import React, { Component, Fragment, useState } from 'react';
import { Create, SimpleForm, TextInput, NumberInput, DateInput, SelectInput, BooleanInput, AutocompleteInput, ReferenceInput } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import apiClient from '../utils/apiClient';
import { 
	subscribtionCreateSuccess as subscribtionCreateSuccessAction,
	subscribtionCreateFailure as subscribtionCreateFailureAction
} from '../actions/subscribtionActions';

const styles = theme => ({
	fragmentBox: {
		marginBottom: '1rem',
	},
	inlineField3: {
		display: 'inline-flex',
		marginRight: '1rem',
		[theme.breakpoints.up('md')]: {
			width: '18%',
		}
	},
	inlineField4: {
		display: 'inline-flex',
		marginRight: '1rem',
	},
	halfField: {
		display: 'inline-flex',
		width: '100%',
		marginRight: '1rem',
		[theme.breakpoints.up('md')]: {
			width: '28%',
		}
	},
	longField: {
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '57%',
		}
	},
	title: {
		padding: '1rem',
		fontWeight: 'bold',
		fontSize: '2rem',
	},
	subTitle: {
		borderBottom: 'solid 1px #eee',
		marginBottom: '1rem',
		padding: '1rem',
	}
});

const Title = () => {
	return <span>Create new subscription</span>;
};

const CustomerFormBlock = withStyles(styles)(({ classes, props }) => {
	const [useExistsing, setState] = useState(false);

	const changeSourceState = () => {
		const newState = Boolean(!useExistsing);
		setState(newState);
	}

	return (
		<Fragment>
			<Typography component="h1" variant="title" className={classes.title}>New Subscription</Typography>
			<Typography component="h2" variant="title" className={classes.subTitle}>Customer</Typography>
			<TextInput
				required
				source="customer.name"
				label="Name"
				className={classes.inlineField3}
			/>
			<TextInput
				required
				source="customer.email"
				label="Email"
				className={classes.inlineField3}
			/>
			<TextInput
				required
				source="customer.phone"
				label="Phone"
				className={classes.inlineField3}
			/>
			<br/>
			<TextInput
				required
				source="customer.company"
				label="Company"
				className={classes.longField}
			/>
			<TextInput
				required
				source="customer.industry"
				label="Industry"
				className={classes.longField}
			/>
		</Fragment>
	);
});

const AgentFormBlock = withStyles(styles)(({ classes, props }) => {
	const [useExistsing, setState] = useState(false);
	const [withoutAgent, setAgentAssignment] = useState(false);

	const changeSourceState = () => {
		const newState = Boolean(!useExistsing);
		setState(newState);
	}

	const disableAgent = () => {
		const newState = Boolean(!withoutAgent);
		setAgentAssignment(newState);
	}

	return (
		<Fragment>
			<Typography component="h2" variant="title" className={classes.subTitle}>Agent</Typography>
			<BooleanInput source="agent.dont_use" label="Without agent" onChange={disableAgent} />
			{withoutAgent && (
				<Fragment>
					<Typography component="div" variant="body2">
						Agent will be assigned later
					</Typography>
				</Fragment>
			)}
			{!withoutAgent && (
				<Fragment>
					<TextInput
						required
						source="agent.remote_id"
						label="Remote ID"
						className={classes.inlineField4}
					/>
					<TextInput
						required
						source="agent.name"
						label="Name"
						className={classes.inlineField4}
					/>
					<TextInput
						required
						source="agent.email"
						label="Email"
						className={classes.inlineField4}
					/>
					<TextInput
						required
						source="agent.phone"
						label="Phone"
						className={classes.inlineField4}
					/>
					<br/>
					<TextInput
						required
						source="agent.address"
						label="Address"
						className={classes.longField}
					/>
					<TextInput
						required
						source="agent.bank_account_iban"
						label="IBAN"
						className={classes.longField}
					/>
					<br/>
					<TextInput
						required
						source="agent.bank_name"
						label="Bank name"
						className={classes.halfField}
					/>
					<TextInput
						required
						source="agent.bank_branch"
						label="Bank branch"
						className={classes.halfField}
					/>
					<br/>
					<TextInput
						required
						source="agent.location"
						label="Location"
						className={classes.longField}
					/>
				</Fragment>
			)}
		</Fragment>
	);
});

class SubscriptionFormBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoadedTypes: false,
			isLoadedServers: false,
			subscriptionTypes: [],
			serversList: [],
			serverApplications: [],
		};
	}

	componentDidMount = () => {
		apiClient('/subscribtions/get-types', {
			method: 'GET',
		}).then((resp) => {
			this.setState((state, props) => ({
				subscriptionTypes: resp.json,
				isLoadedTypes: true,
			}));
		});
		apiClient('/subscribtions/get-servers', {
			method: 'GET',
		}).then((resp) => {
			this.setState((state, props) => ({
				serversList: resp.json.servers,
				serverApplications: resp.json.applications,
				isLoadedServers: true,
			}));
		});
    }

	render() {
		const { classes } = this.props; 
		return (
			<Fragment>
				{(this.state.isLoadedTypes && this.state.isLoadedServers) &&
					<Fragment>
						<Typography component="h2" variant="title" className={classes.subTitle}>Subscription</Typography>
						<TextInput
							required
							source="remote_id"
							label="Remote ID"
							className={classes.halfField}
						/>
						<SelectInput
							required
							source="subscribtion_type.id"
							choices={this.state.subscriptionTypes}
							label="Type"
							className={classes.halfField}
						/>
						<br/>
						<DateInput
							required
							source="subscribtion_cycle.start"
							label="Cycle start"
							className={classes.inlineField3}
						/>
						<DateInput
							required
							source="subscribtion_cycle.end"
							label="Cycle end"
							className={classes.inlineField3}
						/>
						<NumberInput
							required
							source="subscribtion_cycle.amount"
							label="Cycle amount"
							className={classes.inlineField3}
						/>
						<br/>
						<BooleanInput
							required
							source="subscribtion_cycle.paid"
							label="Paid"
							className={classes.inlineField3}
						/>
						<DateInput
							required
							source="subscribtion_cycle.paid_on"
							label="Paid on"
							className={classes.inlineField3}
						/>
						<SelectInput
							required
							source="server.size"
							choices={this.state.serversList}
							label="Server size"
							className={classes.inlineField3}
						/>
						<br/>
						<SelectInput
							required
							source="server.application"
							choices={this.state.serverApplications}
							label="Application"
							className={classes.longField}
						/>
					</Fragment>
				}
			</Fragment>
		);
	}
}

const SubscriptionFormBlockStyled = withStyles(styles)(SubscriptionFormBlock);

class SubscribtionCreateForm extends Component {

	constructor(props) {
        super(props);
        this.props = props;
    }

    handleSave = (values) => {
    	const { subscribtionCreateSuccess, subscribtionCreateFailure, basePath } = this.props;

		apiClient('/subscribtions', {
			method: 'POST',
			body: JSON.stringify(values),
		}).then((resp) => {
			const { status, json } = resp;
			if (status == 202 && json.error) {
				subscribtionCreateFailure(json.error);
			} else {
				subscribtionCreateSuccess(json);
			}
		}).catch((err) => {
			subscribtionCreateFailure(err.message);
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
				<CustomerFormBlock className={classes.fragmentBox} />
				<AgentFormBlock className={classes.fragmentBox} />
				<SubscriptionFormBlockStyled className={classes.fragmentBox} />
			</SimpleForm>
		);
	}
}

SubscribtionCreateForm.propTypes = {
    subscribtionCreateSuccess: PropTypes.func.isRequired,
    subscribtionCreateFailure: PropTypes.func.isRequired,
};

const SubscribtionCreateFormConnected = connect(null, {
    subscribtionCreateSuccess: subscribtionCreateSuccessAction,
    subscribtionCreateFailure: subscribtionCreateFailureAction,
})(withStyles(styles)(SubscribtionCreateForm));

const SubscribtionCreate = (props) => {
	return (
		<Create title={<Title />} {...props}>
			<SubscribtionCreateFormConnected {...props} />
		</Create>
	);
}

export default SubscribtionCreate;