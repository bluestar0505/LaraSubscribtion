import React, { Component } from 'react';
import { Edit, Toolbar, SimpleForm, SaveButton, TextInput, NumberInput, DateInput, SelectInput } from 'react-admin';
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
	agentEditSuccess as agentEditSuccessAction,
	agentEditFailure as agentEditFailureAction
} from '../actions/agentActions';

const styles = theme => ({
	card: {
		minWidth: '24rem',
		marginLeft: '1rem',
	},
	list: {
		paddingLeft: '0.4rem',
	},
	listItem: {
		listStyle: 'none',
		paddingBottom: '0.2rem',
		marginBottom: '0.4rem',
		borderBottom: 'solid 1px #eee',
	},
	strong: {
		color: '#777',
	},
	inlineField: {
		display: 'inline-flex',
		marginRight: '1rem',
	},
	longField: {
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '53%',
		}
	},
});

const Title = ({ record }) => {
	return <span>Agent {record ? `"${record.name}"` : ''}</span>;
};

const Aside = withStyles(styles)(({ classes, record }) => (
    <Card className={classes.card}>
    	<CardContent>
	        <Typography component="h2" variant="title">Other info</Typography>
	        {record && (
	            <Typography variant="body1" component="div">
	            	<ul className={classes.list}>
		                <li className={classes.listItem}><strong className={classes.strong}>ID:</strong> {record.id}</li>
		                <li className={classes.listItem}><strong className={classes.strong}>Remote ID:</strong> {record.remote_id}</li>
		                <li className={classes.listItem}><strong className={classes.strong}>Created at:</strong> {(new Date(record.created_at)).toLocaleDateString()}</li>
		                <li className={classes.listItem}><strong className={classes.strong}>Last update:</strong> {(new Date(record.updated_at)).toLocaleDateString()}</li>
		            </ul>
	            </Typography>
	        )}
	    </CardContent>
    </Card>
));

const AgentEditToolbar = (props) => (
    <Toolbar {...props}>
    	<SaveButton />
        <DeleteButtonWithConfirmation resource={props.resource} record={props.record} basePath={props.basePath} />
    </Toolbar>
);

class AgentEditForm extends Component {

	constructor(props) {
        super(props);
        this.props = props;
    }

    handleSave = (values) => {
		const { agentEditSuccess, agentEditFailure, basePath } = this.props;
		let response = '';

		apiClient(`/agents/${values.id}`, {
			method: 'PUT',
			body: JSON.stringify(values),
		}).then((resp) => {
			const { status, json } = resp;
			if (status == 202 && json.error) {
				agentEditFailure(json.error);
			} else {
				agentEditSuccess(json);
			}
		}).catch((err) => {
			agentEditFailure(err.message);
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
				resource="agents"
				basePath={basePath}
				toolbar={<AgentEditToolbar />}
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

AgentEditForm.propTypes = {
    agentEditSuccess: PropTypes.func.isRequired,
    agentEditFailure: PropTypes.func.isRequired,
};

const AgentEditFormConnected = connect(null, {
    agentEditSuccess: agentEditSuccessAction,
    agentEditFailure: agentEditFailureAction,
})(withStyles(styles)(AgentEditForm));

const AgentEdit = (props) => {
	return (
		<Edit title={<Title />} aside={<Aside />} {...props}>
			<AgentEditFormConnected />
		</Edit>
	);
}

export default AgentEdit;