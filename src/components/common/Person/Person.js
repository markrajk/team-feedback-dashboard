import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './PersonStyles';

function Person(props) {
  const { classes, showImg, img, initials, name, position } = props;

  return (
    <div className={classes.root}>
      {showImg ? (
        <img src={img} alt="User's profile image" className={classes.img} />
      ) : (
        <div className={classes.initials}>{initials}</div>
      )}
      <p className={classes.name}>{name}</p>
      <p className={classes.position}>{position}</p>
    </div>
  );
}

export default withStyles(styles)(Person);
