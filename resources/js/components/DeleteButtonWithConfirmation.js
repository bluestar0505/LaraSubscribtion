import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ActionDelete from '@material-ui/icons/Delete';
import classnames from 'classnames';
import { translate, crudDelete, startUndoable } from 'ra-core';
import IconCancel from '@material-ui/icons/Cancel';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { SimpleForm, Button, DeleteButton, TextInput, LongTextInput, required } from 'react-admin';
import {
    customerDeleteSuccess as customerDeleteSuccessAction,
    customerDeleteFailure as customerDeleteFailureAction,
} from '../actions/customerActions';
import {
    agentDeleteSuccess as agentDeleteSuccessAction,
    agentDeleteFailure as agentDeleteFailureAction
} from '../actions/agentActions';
import { 
    subscribtionDeleteSuccess as subscribtionDeleteSuccessAction,
    subscribtionDeleteFailure as subscribtionDeleteFailureAction
} from '../actions/subscribtionActions';
import { 
    serverDeleteSuccess as serverDeleteSuccessAction,
    serverDeleteFailure as serverDeleteFailureAction
} from '../actions/serverActions';
import { 
	applicationDeleteSuccess as applicationDeleteSuccessAction,
	applicationDeleteFailure as applicationDeleteFailureAction
} from '../actions/applicationActions';
import apiClient from '../utils/apiClient';

const styles = (theme) => ({
    deleteButton: {
        color: theme.palette.error.main,
        marginLeft: '1rem',
        padding: '0.6rem',
        '&:hover': {
            backgroundColor: fade(theme.palette.error.main, 0.12),
            border: 'solid 1px',
            '@media (hover: none)': {
                backgroundColor: 'transparent'
            }
        }
    }
});

class DeleteButtonWithConfirmation extends Component {
    state = {
        showDialog: false
    };

    handleClick = () => {
        this.setState({ showDialog: true });
    };

    handleCloseClick = () => {
        this.setState({ showDialog: false });
    };

    handleDelete = (event) => {
        event.preventDefault();
        this.setState({ showDialog: false });
        const { 
            customerDeleteSuccess,
            customerDeleteFailure,
            agentDeleteSuccess, 
            agentDeleteFailure,
            subscribtionDeleteSuccess,
            subscribtionDeleteFailure,
            serverDeleteSuccess,
            serverDeleteFailure,
            applicationDeleteSuccess,
            applicationDeleteFailure,
            dispatchCrudDelete, 
            startUndoable, 
            resource, 
            record, 
            basePath, 
            redirect, 
            undoable 
        } = this.props;
        let successAction = null;
        let failureAction = null;
        switch (resource) {
            case 'agents':
                successAction = agentDeleteSuccess;
                failureAction = agentDeleteFailure;
            case 'customers':
                successAction = customerDeleteSuccess;
                failureAction = customerDeleteFailure;
            case 'subscribtions':
                successAction = subscribtionDeleteSuccess;
                failureAction = subscribtionDeleteFailure;
            case 'servers':
            	successAction = serverDeleteSuccess;
                failureAction = serverDeleteFailure;
            case 'application':
            	successAction = applicationDeleteSuccess;
                failureAction = applicationDeleteFailure;
            default:
            	successAction = null;
            	failureAction = null;
        }
        if (successAction !== null && failureAction !== null) {
            apiClient(`/${resource}/${record.id}`, {
                method: 'DELETE',
            }).then((resp) => {
                const { status, json } = resp;
                if (status == 202 && json.error) {
                    failureAction(json.error);
                } else {
                    successAction(json);
                }
            }).catch((err) => {
                failureAction(err.message);
            });
        } else {
            if (undoable) {
                startUndoable(crudDelete(resource, record.id, record, basePath, redirect));
            } else {
                dispatchCrudDelete(resource, record.id, record, basePath, redirect);
            }
        }
    };

    render() {
        const { showDialog } = this.state;
        const { label = 'ra.action.delete', classes = {}, className } = this.props;
        return (
            <Fragment>
                <Button onClick={this.handleClick} label={label} className={classnames('ra-delete-button', classes.deleteButton, className)} key="button">
                    <ActionDelete />
                </Button>
                <Dialog fullWidth open={showDialog} onClose={this.handleCloseClick} aria-label="Are you sure?">
                    <DialogTitle>Are you sure you want to delete this entity?</DialogTitle>
                    <DialogContent>
                        <div>This action will not be undone.</div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDelete} label={label} className={classnames('ra-delete-button', classes.deleteButton, className)} key="button">
                            <ActionDelete />
                        </Button>
                        <Button label="ra.action.cancel" onClick={this.handleCloseClick}>
                            <IconCancel />
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

DeleteButtonWithConfirmation.propTypes = {
    basePath: PropTypes.string,
    classes: PropTypes.object,
    className: PropTypes.string,
    dispatchCrudDelete: PropTypes.func.isRequired,
    label: PropTypes.string,
    record: PropTypes.object,
    redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.func]),
    resource: PropTypes.string.isRequired,
    startUndoable: PropTypes.func,
    agentDeleteSuccess: PropTypes.func,
    agentDeleteFailure: PropTypes.func,
    customerDeleteSuccess: PropTypes.func,
    customerDeleteFailure: PropTypes.func,
    subscribtionDeleteSuccess: PropTypes.func,
    subscribtionDeleteFailure: PropTypes.func,
    serverDeleteSuccess: PropTypes.func,
    serverDeleteFailure: PropTypes.func,
    applicationDeleteSuccess: PropTypes.func,
    applicationDeleteFailure: PropTypes.func,
    translate: PropTypes.func,
    undoable: PropTypes.bool
};

DeleteButtonWithConfirmation.defaultProps = {
    redirect: 'list',
    undoable: true
};

export default compose(
    connect( null, {
        startUndoable,
        dispatchCrudDelete: crudDelete,
        customerDeleteSuccess: customerDeleteSuccessAction,
        customerDeleteFailure: customerDeleteFailureAction,
        agentDeleteSuccess: agentDeleteSuccessAction,
        agentDeleteFailure: agentDeleteFailureAction,
        subscribtionDeleteSuccess: subscribtionDeleteSuccessAction,
        subscribtionDeleteFailure: subscribtionDeleteFailureAction,
        serverDeleteSuccess: serverDeleteSuccessAction,
        serverDeleteFailure: serverDeleteFailureAction,
        applicationDeleteSuccess: applicationDeleteSuccessAction,
        applicationDeleteFailure: applicationDeleteFailureAction,
    }),
    translate,
    withStyles(styles)
)(DeleteButtonWithConfirmation);