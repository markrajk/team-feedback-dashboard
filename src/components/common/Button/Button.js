import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ButtonStyles';

function Button(props) {
  const { classes, color, size, handleClick } = props;
  return (
    <button
      className={`${color} ${size} ${classes.root}`}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
}

export default withStyles(styles)(Button);
