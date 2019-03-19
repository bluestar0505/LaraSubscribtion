import React, { Component } from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import apiClient from '../utils/apiClient';
import { 
	customerCreateSuccess as customerCreateSuccessAction,
	customerCreateFailure as customerCreateFailureAction
} from '../actions/customerActions';

const Title = () => {
	return <span>Add new customer</span>;
};

class CustomerCreateForm extends Component {

	constructor(props) {
        super(props);
        this.props = props;
    }

	handleSave = (values) => {
		const { customerCreateSuccess, customerCreateFailure, basePath } = this.props;
		let response = '';

		apiClient('/customers', {
			method: 'POST',
			body: JSON.stringify(values),
		}).then((resp) => {
			const { status, json } = resp;
			if (status == 202 && json.error) {
				throw new SubmissionError({
					email: 'Duplicated value',
				});
				customerCreateFailure(json.error);
			} else {
				customerCreateSuccess(json, basePath);
			}
		}).catch((err) => {
			customerCreateFailure(err.message);
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
					source="name"
					label="Name"
				/>
				<TextInput
					required
					source="email"
					label="Email"
				/>
				<TextInput
					required
					source="phone"
					label="Phone"
				/>
				<TextInput
					required
					source="company"
					label="Company"
					fullWidth
				/>
				<TextInput
					required
					source="industry"
					label="Industry"
					fullWidth
				/>
			</SimpleForm>
		);
	}
}

CustomerCreateForm.propTypes = {
    customerCreateSuccess: PropTypes.func.isRequired,
    customerCreateFailure: PropTypes.func.isRequired,
};

const CustomerCreateFormConnected = connect(null, {
    customerCreateSuccess: customerCreateSuccessAction,
    customerCreateFailure: customerCreateFailureAction,
})(CustomerCreateForm);

const CustomerCreate = (props) => {
	return (
		<Create title={<Title />} {...props}>
			<CustomerCreateFormConnected {...props} />
		</Create>
	);
}

export default CustomerCreate;