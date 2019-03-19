import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { translate } from 'ra-core';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { SimpleForm, Button, NumberInput, BooleanInput, DateInput, required } from 'react-admin';
import apiClient from '../utils/apiClient';
import { 
    subscribtionAddCycleSuccess as subscribtionAddCycleSuccessAction,
    subscribtionAddCycleFailure as subscribtionAddCycleFailureAction
} from '../actions/subscribtionActions';

const styles = (theme) => ({
    addButton: {
        color: theme.palette.primary.main,
        marginLeft: '1rem',
        padding: '0.6rem',
        '&:hover': {
            backgroundColor: fade(theme.palette.primary.main, 0.12),
            border: 'solid 1px',
            '@media (hover: none)': {
                backgroundColor: 'transparent'
            }
        }
    },
    inlineField: {
    	display: 'inline-flex',
    	marginRight: '1rem',
    	width: '49%',
    }
});

class AddCycleButton extends Component {
	state = {
        showDialog: false,
        isPaid: false,
        isCalncelled: false,
        isEnded: false,
    };
	
	componentDidMount = () => {
		console.log('ROUTE:', this.props);
	}
	
	handleClick = () => {
        this.setState({ showDialog: true });
    };
    
    handleCloseClick = () => {
        this.setState({ showDialog: false });
    };
    
    handleIsPaidField = () => {
    	let newVal = !this.state.isPaid;
    	this.setState({
    		isPaid: newVal
    	});
    }
    
    handleIsCancelledField = () => {
    	let newVal = !this.state.isCancelled;
    	this.setState({
    		isCancelled: newVal
    	});
    }
    
    handleIsEndedField = () => {
    	let newVal = !this.state.isEnded;
    	this.setState({
    		isEnded: newVal
    	});
    }
    
    handleAddCycle = (values) => {
    	const { subscribtionAddCycleSuccess, subscribtionAddCycleFailure, subscribtion, updateCycles } = this.props;
    	apiClient(`/subscribtion-cycles/${subscribtion.id}`, {
			method: 'POST',
			body: JSON.stringify(values),
		}).then((resp) => {
			console.log(resp.json);
			subscribtionAddCycleSuccess(resp.json);
			updateCycles(resp.json.data.cycles);
			this.handleCloseClick();
		}).catch((err) => {
			subscribtionAddCycleFailure(err.message);
			this.handleCloseClick();
		});
    }
    
    render() {
    	const { showDialog } = this.state;
    	const { classes, subscribtion, resource, basePath } = this.props;
    	return (
    		<Fragment>
    			<Button onClick={this.handleClick} className={classes.addButton}>
    				<AddCircleOutline />
    			</Button>
    			<Dialog fullWidth open={showDialog} onClose={this.handleCloseClick} aria-label="Add cycle">
    				<DialogTitle>Add cycle</DialogTitle>
    				<DialogContent>
    					<SimpleForm
    						resource={resource}
    						basePath={basePath}
    						save={this.handleAddCycle}
    					>
    						<NumberInput source="cycle_amount" label="Amount" className={classes.inlineField} />
    						<DateInput source="cycle_start" label="Start" className={classes.inlineField} />
    						<DateInput source="cycle_end" label="End" className={classes.inlineField} />
    						<BooleanInput source="cycle_paid" label="Is paid" className={classes.inlineField} onChange={this.handleIsPaidField} />
    						{this.state.isPaid &&
    							<DateInput source="cycle_paid_on" label="Paid on" className={classes.inlineField} />
    						}
    						<BooleanInput source="cycle_cancelled" label="Is cancelled" className={classes.inlineField} onChange={this.handleIsCancelledField} />
    						{this.state.isCancelled &&
    							<DateInput source="cycle_cancelled_on" label="Cancelled on" className={classes.inlineField} />
    						}
    						<BooleanInput source="cycle_ended" label="Is ended" className={classes.inlineField} onChange={this.handleIsEndedField} />
    						{this.state.isEnded &&
    							<DateInput source="cycle_ended_on" label="Ended on" className={classes.inlineField} />
    						}
    					</SimpleForm>
    				</DialogContent>
    			</Dialog>
    		</Fragment>
    	);
    }
}

AddCycleButton.propTypes = {
    basePath: PropTypes.string,
    classes: PropTypes.object,
    className: PropTypes.string,
    label: PropTypes.string,
    //record: PropTypes.object,
    //redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.func]),
    resource: PropTypes.string.isRequired,
    subscribtionAddCycleSuccess: PropTypes.func,
    subscribtionAddCycleFailure: PropTypes.func,
    translate: PropTypes.func,
    subscribtion: PropTypes.object,
};

export default compose(
    connect( null, {
    	subscribtionAddCycleSuccess: subscribtionAddCycleSuccessAction,
        subscribtionAddCycleFailure: subscribtionAddCycleFailureAction,
    }),
    translate,
    withStyles(styles)
)(AddCycleButton);




