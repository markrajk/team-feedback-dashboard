import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './PeopleStyles';

function People(props) {
  const { classes, page } = props;
  return <div className={`${page} ${classes.root}`}>{props.children}</div>;
}

export default withStyles(styles)(People);
