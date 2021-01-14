import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './MainStyles';

function Main(props) {
  const { classes, page } = props;
  return <main className={`${page} ${classes.root}`}>{props.children}</main>;
}

export default withStyles(styles)(Main);
