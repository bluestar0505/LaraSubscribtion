import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate } from 'ra-core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { fade } from '@material-ui/core/styles/colorManipulator';
import classnames from 'classnames';
import IconCancel from '@material-ui/icons/NotInterested';
import IconRestore from '@material-ui/icons/Loop';
import { 
    subscribtionCancelSuccess as subscribtionCancelSuccessAction,
    subscribtionCancelFailure as subscribtionCancelFailureAction
} from '../actions/subscribtionActions';
import apiClient from '../utils/apiClient';

const styles = (theme) => ({
    cancelButton: {
        color: theme.palette.secondary.main,
        marginLeft: '1rem',
        padding: '0.6rem',
        '&:hover': {
            backgroundColor: fade(theme.palette.secondary.main, 0.12),
            border: 'solid 1px',
            '@media (hover: none)': {
                backgroundColor: 'transparent'
            }
        }
    }
});

class SubscribtionCancelButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCancelled: props.record.is_cancelled,
		}
	}	
	
	handleClick = () => {
		const { subscribtionCancelSuccess, subscribtionCancelFailure, record, handlePauseOrCancel } = this.props;
        apiClient(`/subscribtions/${record.id}/set-cancelled`, {
        	method: 'PATCH',
        	body: JSON.stringify({
        		is_cancelled: !this.state.isCancelled,
        	})
        }).then((resp) => {
        	const { status, json } = resp;
        	if (status == 202 && json.error) {
        		subscribtionCancelFailure(json.error);
        	} else {
        		let data = json;
        		data.data.subscribtion_type = json.data.subscribtion_type.id;
        		this.setState((state, props) => ({
        			isCancelled: Boolean(json.data.is_cancelled)
        		}));
        		subscribtionCancelSuccess(json);
        	}
        }).catch((err) => {
        	subscribtionCancelFailure(err.message);
        });
    };
	
	render() {
		const { label = 'Cancel', classes = {}, className, record } = this.props;
		return (
			<Fragment>
			{!this.state.isCancelled ? (
				<Button onClick={this.handleClick} label={label} className={classnames('ra-cancel-button', classes.cancelButton, className)} key="button">
                    <IconCancel style={{ marginRight: '1rem' }}/> Cancel
                </Button>
            ) : (
				<Button onClick={this.handleClick} label={label} className={classnames('ra-cancel-button', classes.cancelButton, className)} key="button">
                    <IconRestore style={{ marginRight: '1rem' }}/> Restore
                </Button>
			)}
            </Fragment>
		);
	}
}

SubscribtionCancelButton.propTypes = {
    basePath: PropTypes.string,
    classes: PropTypes.object,
    className: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
    redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.func]),
    resource: PropTypes.string.isRequired,
    subscribtionCancelSuccess: PropTypes.func,
    subscribtionCancelFailure: PropTypes.func,
    translate: PropTypes.func,
    undoable: PropTypes.bool,
};

export default compose(
    connect( null, {
    	subscribtionCancelSuccess: subscribtionCancelSuccessAction,
    	subscribtionCancelFailure: subscribtionCancelFailureAction,
    }),
    translate,
    withStyles(styles)
)(SubscribtionCancelButton);

