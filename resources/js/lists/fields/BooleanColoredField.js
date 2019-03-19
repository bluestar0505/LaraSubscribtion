import React from 'react';
import { BooleanField } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    trueVal: { color: 'green' },
    falseVal: { color: 'red' },
};

const BooleanColoredField = withStyles(styles)(({ classes, ...props }) => (
    <BooleanField className={(props.record[props.source] ? classes.trueVal : classes.falseVal)} {...props} />
));

export default BooleanColoredField;