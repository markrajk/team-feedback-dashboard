import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './OptionsStyles';

function Options(props) {
  const { classes, size, color } = props;

  return (
    <div className={`${size} ${color} ${classes.root}`}>{props.children}</div>
  );
}

export default withStyles(styles)(Options);
