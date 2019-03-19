import React, { Component } from 'react';
import { Edit, Toolbar, SimpleForm, SaveButton, TextInput, BooleanInput } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import apiClient from '../utils/apiClient';
import DeleteButtonWithConfirmation from '../components/DeleteButtonWithConfirmation';
import { 
	serverEditSuccess as serverEditSuccessAction,
	serverEditFailure as serverEditFailureAction
} from '../actions/serverActions';

const Title = ({ record }) => {
	return <span>Server {record ? `"${record.domain}/${record.ip}"` : ''}</span>;
};

const ServerEditToolbar = (props) => (
    <Toolbar {...props}>
    	<SaveButton />
        <DeleteButtonWithConfirmation resource={props.resource} record={props.record} basePath={props.basePath} />
    </Toolbar>
);

class ServerEditForm extends Component {

	constructor(props) {
        super(props);
        this.props = props;
    }

    handleSave = (values) => {
		const { serverEditSuccess, serverEditFailure, basePath } = this.props;
		let response = '';

		apiClient(`/servers/${values.id}`, {
			method: 'PUT',
			body: JSON.stringify(values),
		}).then((resp) => {
			const { status, json } = resp;
			if (status == 202 && json.error) {
				serverEditFailure(json.error);
			} else {
				serverEditSuccess(json);
			}
		}).catch((err) => {
			serverEditFailure(err.message);
		});
		return false;
	}

	render() {
		const { classes, record, basePath, ...rest } = this.props;

		return (
			<SimpleForm 
				form="record-form" 
				save={this.handleSave}
				redirect={false}
				record={record}
				resource="servers"
				basePath={basePath}
				toolbar={<ServerEditToolbar />}
			>
				<TextInput
					required
					source="application"
					label="Application"
				/>
				<TextInput
					required
					source="location"
					label="Location"
				/>
				<TextInput
					required
					source="size"
					label="Size"
				/>
				<TextInput
					required
					source="image"
					label="Image"
				/>
				<TextInput
					required
					source="snapshot"
					label="Snapshot"
				/>
				<TextInput
					required
					source="domain"
					label="Domain name"
				/>
				<TextInput
					required
					source="ip"
					label="IP address"
				/>
				<BooleanInput
					required
					source="is_active"
					label="Active"
				/>
			</SimpleForm>
		);
	}
}

ServerEditForm.propTypes = {
    serverEditSuccess: PropTypes.func.isRequired,
    serverEditFailure: PropTypes.func.isRequired,
};

const ServerEditFormConnected = connect(null, {
    serverEditSuccess: serverEditSuccessAction,
    serverEditFailure: serverEditFailureAction,
})(ServerEditForm);

const ServerEdit = (props) => {
	return (
		<Edit title={<Title />} {...props}>
			<ServerEditFormConnected />
		</Edit>
	);
}

export default ServerEdit;