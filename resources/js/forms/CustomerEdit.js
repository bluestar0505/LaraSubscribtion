import React, { Component } from 'react';
import { Edit, Toolbar, SimpleForm, SaveButton, CardActions, DateField, TextInput } from 'react-admin';
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
	customerEditSuccess as customerEditSuccessAction,
	customerEditFailure as customerEditFailureAction
} from '../actions/customerActions';

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
	return <span>Customer {record ? `"${record.name}"` : ''}</span>;
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

const CustomerEditToolbar = (props) => (
    <Toolbar {...props}>
    	<SaveButton />
        <DeleteButtonWithConfirmation resource={props.resource} record={props.record} basePath={props.basePath} />
    </Toolbar>
);

class CustomerEditForm extends Component {

	constructor(props) {
        super(props);
        this.props = props;
    }

    handleSave = (values) => {
		const { customerEditSuccess, customerEditFailure, basePath } = this.props;
		let response = '';

		apiClient(`/customers/${values.id}`, {
			method: 'PUT',
			body: JSON.stringify(values),
		}).then((resp) => {
			const { status, json } = resp;
			if (status == 202 && json.error) {
				customerEditFailure(json.error);
			} else {
				customerEditSuccess(json);
			}
		}).catch((err) => {
			customerEditFailure(err.message);
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
				resource="customers"
				basePath={basePath}
				toolbar={<CustomerEditToolbar />}
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
					source="company"
					label="Company"
					className={classes.longField}
				/>
				<TextInput
					required
					source="industry"
					label="Industry"
					className={classes.longField}
				/>
			</SimpleForm>
		);
	}
}

CustomerEditForm.propTypes = {
    customerEditSuccess: PropTypes.func.isRequired,
    customerEditFailure: PropTypes.func.isRequired,
};

const CustomerEditFormConnected = connect(null, {
    customerEditSuccess: customerEditSuccessAction,
    customerEditFailure: customerEditFailureAction,
})(withStyles(styles)(CustomerEditForm));

const CustomerEdit = (props) => {
	return (
		<Edit title={<Title />} aside={<Aside />} {...props}>
			<CustomerEditFormConnected />
		</Edit>
	);
}

export default CustomerEdit;