import React, { Component } from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import apiClient from '../utils/apiClient';
import { 
	applicationCreateSuccess as applicationCreateSuccessAction,
	applicationCreateFailure as applicationCreateFailureAction
} from '../actions/applicationActions';

const styles = theme => ({
	inlineField: {
		display: 'inline-flex',
		marginRight: '1rem',
	},
	longField: {
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '53%',
		}
	}
});

const Title = () => {
	return <span>Add new application</span>;
};

class ApplicationCreateForm extends Component {

	constructor(props) {
        super(props);
        this.props = props;
    }

    handleSave = (values) => {
		const { applicationCreateSuccess, applicationCreateFailure, basePath } = this.props;
		let response = '';

		apiClient('/applications', {
			method: 'POST',
			body: JSON.stringify(values),
		}).then((resp) => {
			const { status, json } = resp;
			if (status == 202 && json.error) {
				applicationCreateFailure(json.error);
			} else {
				applicationCreateSuccess(json);
			}
		}).catch((err) => {
			applicationCreateFailure(err.message);
		});
		return false;
	}

	render() {
		const { classes } = this.props;
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
					formClassName={classes.inlineField}
				/>
			</SimpleForm>
		);
	}
}

ApplicationCreateForm.propTypes = {
    applicationCreateSuccess: PropTypes.func.isRequired,
    applicationCreateFailure: PropTypes.func.isRequired,
};

const ApplicationCreateFormConnected = connect(null, {
    applicationCreateSuccess: applicationCreateSuccessAction,
    applicationCreateFailure: applicationCreateFailureAction,
})(withStyles(styles)(ApplicationCreateForm));

const ApplicationCreate = (props) => {
	return (
		<Create title={<Title />} {...props}>
			<ApplicationCreateFormConnected {...props} />
		</Create>
	);
}

export default ApplicationCreate;