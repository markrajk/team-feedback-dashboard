import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './DropdownStyles';

function Dropdown(props) {
  const [open, setOpen] = useState(false);
  const { classes } = props;

  Dropdown.handleClickOutside = () => setOpen(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className={`${classes.root} ${open && ' open'}`}>
      <div className={classes.trigger} onClick={toggleOpen}>
        <div className={classes.triggerMain}>
          <p className={classes.triggerVal}>Team Marketing</p>
          <i className="icon-caret-down"></i>
        </div>
        <div className={classes.triggerButton}>
          <i className="icon-cog-full"></i>
        </div>
      </div>

      {open && (
        <div className={classes.menu}>
          <div className={classes.search}>
            <input type="text" placeholder="Search for a Team" />
            <i className="icon-search"></i>
          </div>
          <button className={`${classes.menuItem} active`}>
            Team Marketing <span> (selected)</span>
          </button>
          <button className={`${classes.menuItem}`}>Team Recruitment</button>
          <button className={`${classes.menuItem}`}>Team Manegement</button>

          <div className={classes.footer}>
            <button>Create a new team</button>
          </div>
        </div>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default withStyles(styles)(onClickOutside(Dropdown, clickOutsideConfig));
