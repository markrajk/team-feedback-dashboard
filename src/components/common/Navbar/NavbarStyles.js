export const styles = {
  root: {
    position: 'relative',
    padding: '0 2em',
    height: '6em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 3px 6px 0 rgba(55, 109, 142, 0.16)',
    backgroundColor: '#ffffff',
    zIndex: '1000',
  },

  options: {},

  list: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    textDecoration: 'none',

    '&:not(:last-of-type)': {
      marginRight: '4.8em',
    },

    '&.active': {
      color: 'blue',

      '& svg .circle': {
        fill: '#14aa52',
      },

      '& p': {
        fontWeight: '500',
      },
    },

    '& svg .circle': {
      fill: '#89989b',
    },

    '& p': {
      marginLeft: '6px',
      fontSize: '13px',
      fontWeight: '400',
      letterSpacing: '-0.1px',
      color: '#15202b',

      '&:after': {
        display: 'block',
        content: 'attr(text)',
        fontWeight: '500',
        height: '0',
        overflow: 'hidden',
        visibility: 'hidden',
        cursor: 'pointer',
      },
    },
  },

  activeLine: {
    position: 'absolute',
    opacity: 0,
    bottom: 0,
    left: 0,
    width: '100px',
    height: '3px',
    backgroundColor: '#14aa52',
  },

  info: {
    width: '21rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  infoNotifications: {
    fontSize: '1.2em',
    fontWeight: '500',
    color: '#15202b',

    '& span': {
      marginLeft: '5px',
      display: 'inline-block',
      padding: '2px 3.5px',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1f73b7',
      backgroundColor: '#d9edf7',
      borderRadius: '2px',
    },
  },

  infoDropdown: {
    marginLeft: '1.6em',
    padding: '0 1.3em',
    width: '7.3em',
    height: '3.2em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '16px',
    border: 'solid 1px #c7d2d8',
    backgroundColor: '#fcfcfc',

    '& p': {
      fontSize: '12px',
      fontWeight: '500',
      color: '#15202b',
    },

    '& i': {
      fontSize: '8px',
      color: '#455b60',
    },
  },
};
