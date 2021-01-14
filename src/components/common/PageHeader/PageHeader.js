import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './PageHeaderStyles';

function PageHeader(props) {
  const { classes, page } = props;
  return <div className={`${page} ${classes.root}`}>{props.children}</div>;
}

export default withStyles(styles)(PageHeader);
