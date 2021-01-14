import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ButtonStyles';

function Button(props) {
  const { classes, color, size } = props;
  return (
    <button className={`${color} ${size} ${classes.root}`}>
      {props.children}
    </button>
  );
}

export default withStyles(styles)(Button);
