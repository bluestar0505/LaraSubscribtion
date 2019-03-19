import React from 'react';
import { Login } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

import { LoginForm } from '../forms';

const styles = ({
    main: { 
    	background: '#fff',
    	backgroundImage: 'none'
    }
});

const LoginPage = (props) => (
	<Login loginForm={<LoginForm />} backgroundImage="" {...props} />
);

export default withStyles(styles)(LoginPage);