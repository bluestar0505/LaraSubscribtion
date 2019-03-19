import React, { Component } from 'react';
import { Create, SimpleForm, TextInput, BooleanInput } from 'react-admin';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import apiClient from '../utils/apiClient';
import { 
	serverCreateSuccess as serverCreateSuccessAction,
	serverCreateFailure as serverCreateFailureAction
} from '../actions/serverActions';

const Title = () => {
	return <span>Add new server</span>;
};

class ServerCreateForm extends Component {

	constructor(props) {
        super(props);
        this.props = props;
    }

	handleSave = (values) => {
		const { serverCreateSuccess, serverCreateFailure, basePath } = this.props;
		let response = '';

		apiClient('/servers', {
			method: 'POST',
			body: JSON.stringify(values),
		}).then((resp) => {
			const { status, json } = resp;
			if (status == 202 && json.error) {
				throw new SubmissionError({
					email: 'Duplicated value',
				});
				serverCreateFailure(json.error);
			} else {
				serverCreateSuccess(json, basePath);
			}
		}).catch((err) => {
			serverCreateFailure(err.message);
		});
		return false;
	}

	render() {
		return (
			<SimpleForm 
				form="record-form" 
				save={this.handleSave}
				redirect={false}
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

ServerCreateForm.propTypes = {
    serverCreateSuccess: PropTypes.func.isRequired,
    serverCreateFailure: PropTypes.func.isRequired,
};

const ServerCreateFormConnected = connect(null, {
    serverCreateSuccess: serverCreateSuccessAction,
    serverCreateFailure: serverCreateFailureAction,
})(ServerCreateForm);

const ServerCreate = (props) => {
	return (
		<Create title={<Title />} {...props}>
			<ServerCreateFormConnected {...props} />
		</Create>
	);
}

export default ServerCreate;