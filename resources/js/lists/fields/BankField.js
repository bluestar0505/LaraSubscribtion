import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	bankUl: {
		paddingLeft: 0,
	},
	bankIban: {
		listStyleType: 'none',
		borderBottom: 'solid 1px #aaa',
		padding: '0.2rem 0',
	},
	bankName: {
		listStyleType: 'none',
		padding: '0.2rem 0',
	}
};

const BankField = ({record = {}, source, classes}) => (
	<ul className={classes.bankUl}>
		<li className={classes.bankIban}><strong>IBAN:</strong> {record['bank_account_iban']}</li>
		<li className={classes.bankName}><strong>Name:</strong> {record['bank_name']}, {record['bank_branch']}</li>
	</ul>
);

export default withStyles(styles)(BankField);