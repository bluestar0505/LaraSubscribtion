import React, { Component } from 'react';
import { Create, SimpleForm, TextInput, NumberInput, DateInput, SelectInput } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import apiClient from '../utils/apiClient';
import { 
	agentCreateSuccess as agentCreateSuccessAction,
	agentCreateFailure as agentCreateFailureAction
} from '../actions/agentActions';

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
	return <span>Add new agent</span>;
};

class AgentCreateForm extends Component {

	constructor(props) {
        super(props);
        this.props = props;
    }

    handleSave = (values) => {
		const { agentCreateSuccess, agentCreateFailure, basePath } = this.props;
		let response = '';

		apiClient('/agents', {
			method: 'POST',
			body: JSON.stringify(values),
		}).then((resp) => {
			const { status, json } = resp;
			if (status == 202 && json.error) {
				agentCreateFailure(json.error);
			} else {
				agentCreateSuccess(json);
			}
		}).catch((err) => {
			agentCreateFailure(err.message);
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
				<TextInput
					required
					source="email"
					label="Email"
					formClassName={classes.inlineField}
				/>
				<TextInput
					required
					source="phone"
					label="Phone"
					formClassName={classes.inlineField}
				/>
				<TextInput
					required
					source="address"
					label="Address"
					className={classes.longField}
				/>
				<TextInput
					required
					source="bank_account_iban"
					label="IBAN"
					className={classes.longField}
				/>
				<TextInput
					required
					source="bank_name"
					label="Bank name"
					formClassName={classes.inlineField}
				/>
				<TextInput
					required
					source="bank_branch"
					label="Bank branch"
					formClassName={classes.inlineField}
				/>
				<TextInput
					required
					source="location"
					label="Location"
					className={classes.longField}
				/>
				<NumberInput
					required
					source="commission_agreed"
					label="Commission agreed"
					formClassName={classes.inlineField}
				/>
				<NumberInput
					required
					source="commission_count"
					label="Commission count"
					formClassName={classes.inlineField}
					defaultValue={12}
				/>
				<SelectInput
					source="commission_type"
					choices={[
						{id: 'flat', name: 'Flat rate'},
						{id: 'percentage', name: 'Percentage'}
					]}
					label="Commission type"
					formClassName={classes.inlineField}
				/>
				<DateInput
					required
					source="active"
					label="Active"
					formClassName={classes.inlineField}
				/>
			</SimpleForm>
		);
	}
}

AgentCreateForm.propTypes = {
    agentCreateSuccess: PropTypes.func.isRequired,
    agentCreateFailure: PropTypes.func.isRequired,
};

const AgentCreateFormConnected = connect(null, {
    agentCreateSuccess: agentCreateSuccessAction,
    agentCreateFailure: agentCreateFailureAction,
})(withStyles(styles)(AgentCreateForm));

const AgentCreate = (props) => {
	return (
		<Create title={<Title />} {...props}>
			<AgentCreateFormConnected {...props} />
		</Create>
	);
}

export default AgentCreate;