import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './OptionsStyles';

function Options(props) {
  const { classes } = props;

  return <div className={classes.root}>{props.children}</div>;
}

export default withStyles(styles)(Options);
