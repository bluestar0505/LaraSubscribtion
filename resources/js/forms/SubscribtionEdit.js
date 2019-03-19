import React, { Component, Fragment, useState } from 'react';
import { withRouter } from 'react-router';
import { Edit, Toolbar, SaveButton, SimpleForm, TextInput, TextField, NumberInput, DateInput, SelectInput, BooleanInput, AutocompleteInput, ReferenceInput } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import DeleteButtonWithConfirmation from '../components/DeleteButtonWithConfirmation';
import SubscribtionPauseButton from '../components/SubscribtionPauseButton';
import SubscribtionCancelButton from '../components/SubscribtionCancelButton';
import AddCycleButton from '../components/AddCycleButton';
import apiClient from '../utils/apiClient';
import { 
	subscribtionEditSuccess as subscribtionEditSuccessAction,
	subscribtionEditFailure as subscribtionEditFailureAction
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
		flexDirection: 'column',
		[theme.breakpoints.up('md')]: {
			width: '28%',
		},
		ul: {
			listStyle: 'none',
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

const Title = ({ record }) => {
	return <span>Subscription #{record.id}</span>;
};

const SubscribtionEditToolbar = (props) => (
    <Toolbar {...props}>
    	<SaveButton />
    	<SubscribtionPauseButton resource={props.resource} record={props.record} basePath={props.basePath} />
        <SubscribtionCancelButton resource={props.resource} record={props.record} basePath={props.basePath} />
    	<DeleteButtonWithConfirmation resource={props.resource} record={props.record} basePath={props.basePath} />
    </Toolbar>
);

class SubscribtionEditForm extends Component {

	constructor(props) {
        super(props);
        this.props = props;
        this.state = {
			isLoadedTypes: false,
			isLoadedServers: false,
			subscriptionTypes: [],
			serversList: [],
			serverApplications: [],
			cycles: this.props.record.cycles,
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
    
    componentWillMount = () => {
    	console.log(this.state, this.props);
    }
    
    handleCyclesUpdate = (updates) => {
    	this.setState((state, props) => ({
    		cycles: updates,
    	}));
    }

    handleCycleSelection = () => {
    	//
    }

    handleSave = (values) => {
    	const { subscribtionEditSuccess, subscribtionEditFailure, basePath } = this.props;
    	const data = {
    		remote_id: values.remote_id,
    		is_cancelled: values.is_cancelled,
    		is_cancelled_on: values.is_cancelled_on,
    		is_paused: values.is_paused,
    		is_paused_on: values.is_paused_on,
    		subscribtion_type: values.subscribtion_type,
    		server: values.server,
    	}

		apiClient(`/subscribtions/${values.id}`, {
			method: 'PUT',
			body: JSON.stringify(data),
		}).then((resp) => {
			const { status, json } = resp;
			if (status == 202 && json.error) {
				subscribtionEditFailure(json.error);
			} else {
				subscribtionEditSuccess(data);
			}
		}).catch((err) => {
			subscribtionEditFailure(err.message);
		});
		return false;
    }

    render() {
		const { classes, record, resource, basePath } = this.props;
		return (
			<SimpleForm 
				form="record-form" 
				save={this.handleSave}
				resource={resource}
				record={record}
				redirect={false}
				basePath={basePath}
				toolbar={<SubscribtionEditToolbar />}
			>
				{(this.state.isLoadedTypes && this.state.isLoadedServers) &&
					<Fragment>
						<Typography component="h1" variant="title" className={classes.title}>Edit subscribtion #{record.id}</Typography><br/>
						<Typography component="div" className={classes.halfField}>
							<Typography component="h2" variant="title" className={classes.subTitle}>Customer info</Typography><br/>
							<Typography component="div" variant="body2">
								<ul>
									<li><strong>Remote ID:</strong> {record.customer.remote_id}</li>
									<li><strong>Name:</strong> {record.customer.name}</li>
									<li><strong>Email:</strong> {record.customer.email}</li>
									<li><strong>Phone:</strong> {record.customer.phone}</li>
									<li><strong>Company:</strong> {record.customer.company}</li>
									<li><strong>Industry:</strong> {record.customer.industry}</li>
								</ul>
							</Typography>
						</Typography>
						<Typography component="div" className={classes.halfField}>
							<Typography component="h2" variant="title" className={classes.subTitle}>Agent info</Typography><br/>
							<Typography component="div" variant="body2">
								<ul>
									<li><strong>Remote ID:</strong> {record.agent.remote_id}</li>
									<li><strong>Name:</strong> {record.agent.name}</li>
									<li><strong>Email:</strong> {record.agent.email}</li>
									<li><strong>Phone:</strong> {record.agent.phone}</li>
									<li><strong>Address:</strong> {record.agent.address}</li>
									<li><strong>IBAN:</strong> {record.agent.bank_account_iban}</li>
									<li><strong>Bank name:</strong> {record.agent.bank_name}</li>
									<li><strong>Bank branch:</strong> {record.agent.bank_branch}</li>
									<li><strong>Location:</strong> {record.agent.location}</li>
								</ul>
							</Typography>
						</Typography>
						
						<br/>
						<Typography component="h2" variant="title" className={classes.subTitle}>
							Subscribtion cycles
							<AddCycleButton subscribtion={record} resource="subscribtions" basePath={`/subscribtion-cycles/${record.id}`} updateCycles={this.handleCyclesUpdate} />
						</Typography>
						<List component="nav" className={classes.longField}>
							{this.state.cycles.map((item, i) => (
								<ListItem
									key={i}
									button
									divider={true}
									onClick={this.handleCycleSelection}
									disabled={Boolean(item.cycle_ended)}
								>
									<ListItemAvatar>
										<Avatar>
											{ Boolean(item.cycle_paid) ? <AttachMoneyIcon style={{ color: 'green' }} /> : <MoneyOffIcon style={{ color: 'red' }} /> }
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary={`Period: ${new Date(item.cycle_start).toLocaleDateString('en-US')} - ${new Date(item.cycle_end).toLocaleDateString('en-US')}`}
										secondary={
											`Amount: ${item.cycle_amount}
											${(Boolean(item.cycle_paid) ? ', Paid on: ' + new Date(item.cycle_paid_on).toLocaleDateString('en-US') : '')}
											${(Boolean(item.cycle_cancelled) ? ', Cancelled on: ' + new Date(item.cycle_cancelled_on).toLocaleDateString('en-US') : '')}
											${(Boolean(item.cycle_ended) ? ', Ended on: ' + new Date(item.cycle_ended_on).toLocaleDateString('en-US') : '')}`
										}
									/>
									{!Boolean(item.cycle_ended) &&
										<ListItemSecondaryAction>
											{!Boolean(item.cycle_paid) &&
												<IconButton aria-label="Set paid">
													<AttachMoneyIcon />
												</IconButton>
											}
											{!Boolean(item.cycle_cancelled) &&
												<IconButton aria-label="Cancel">
													<PauseCircleOutlineIcon />
												</IconButton>
											}
											<IconButton aria-label="End cycle">
												<NotInterestedIcon />
											</IconButton>
										</ListItemSecondaryAction>
									}
								</ListItem>
							))}
						</List>
						<Typography component="h2" variant="title" className={classes.subTitle}>Subscription</Typography>
						<TextInput
							required
							source="remote_id"
							label="Remote ID"
							className={classes.inlineField3}
						/>
						<SelectInput
							required
							source="subscribtion_type.id"
							choices={this.state.subscriptionTypes}
							label="Type"
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
			</SimpleForm>
		);
	}
}

SubscribtionEditForm.propTypes = {
	handlePauseAndCancel: PropTypes.func,
    subscribtionEditSuccess: PropTypes.func.isRequired,
    subscribtionEditFailure: PropTypes.func.isRequired,
};

const SubscribtionEditFormConnected = connect(null, {
    subscribtionEditSuccess: subscribtionEditSuccessAction,
    subscribtionEditFailure: subscribtionEditFailureAction,
})(withStyles(styles)(SubscribtionEditForm));

const SubscribtionEdit = (props) => {
	return (
		<Edit title={<Title />} {...props}>
			<SubscribtionEditFormConnected {...props} />
		</Edit>
	);
}

export default SubscribtionEdit;