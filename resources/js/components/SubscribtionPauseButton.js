import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate } from 'ra-core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { fade } from '@material-ui/core/styles/colorManipulator';
import classnames from 'classnames';
import IconPause from '@material-ui/icons/PauseCircleOutline';
import IconResume from '@material-ui/icons/Replay';
import { 
    subscribtionPauseSuccess as subscribtionPauseSuccessAction,
    subscribtionPauseFailure as subscribtionPauseFailureAction
} from '../actions/subscribtionActions';
import apiClient from '../utils/apiClient';

const styles = (theme) => ({
    pauseButton: {
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

class SubscribtionPauseButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPaused: props.record.is_paused,
		}
	}	
	
	handleClick = () => {
		const { subscribtionPauseSuccess, subscribtionPauseFailure, record, handlePauseOrCancel } = this.props;
        apiClient(`/subscribtions/${record.id}/set-paused`, {
        	method: 'PATCH',
        	body: JSON.stringify({
        		is_paused: !this.state.isPaused,
        	})
        }).then((resp) => {
        	const { status, json } = resp;
        	if (status == 202 && json.error) {
        		subscribtionPauseFailure(json.error);
        	} else {
        		let data = json;
        		data.data.subscribtion_type = json.data.subscribtion_type.id;
        		this.setState((state, props) => ({
        			isPaused: Boolean(json.data.is_paused)
        		}));
        		subscribtionPauseSuccess(json);
        	}
        }).catch((err) => {
        	subscribtionPauseFailure(err.message);
        });
    };
	
	render() {
		const { label = 'Pause', classes = {}, className, record } = this.props;
		return (
			<Fragment>
			{!this.state.isPaused ? (
				<Button onClick={this.handleClick} label={label} className={classnames('ra-cancel-button', classes.pauseButton, className)} key="button">
                    <IconPause style={{ marginRight: '1rem' }}/> Pause
                </Button>
            ) : (
				<Button onClick={this.handleClick} label={label} className={classnames('ra-cancel-button', classes.pauseButton, className)} key="button">
                    <IconResume style={{ marginRight: '1rem' }}/> Resume
                </Button>
			)}
            </Fragment>
		);
	}
}

SubscribtionPauseButton.propTypes = {
    basePath: PropTypes.string,
    classes: PropTypes.object,
    className: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
    redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.func]),
    resource: PropTypes.string.isRequired,
    subscribtionPauseSuccess: PropTypes.func,
    subscribtionPauseFailure: PropTypes.func,
    translate: PropTypes.func,
    undoable: PropTypes.bool
};

export default compose(
    connect( null, {
    	subscribtionPauseSuccess: subscribtionPauseSuccessAction,
    	subscribtionPauseFailure: subscribtionPauseFailureAction,
    }),
    translate,
    withStyles(styles)
)(SubscribtionPauseButton);

