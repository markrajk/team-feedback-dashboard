export const styles = {
  root: {
    position: 'relative',

    '&.open': {},
  },

  trigger: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '3.2em',
    width: '21em',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'solid 1px #c7d2d8',
    backgroundColor: '#fcfcfc',
  },

  triggerMain: {
    paddingLeft: '1.1em',
    paddingRight: '.8em',
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& i': {
      fontSize: '8px',
      color: '#455b60',
    },
  },

  triggerVal: {
    fontSize: '12.5px',
    fontWeight: '600',
    color: '#15202b',
  },

  triggerButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '3.1em',
    borderLeft: 'solid 1px #c7d2d8',

    '& i': {
      fontSize: '1.4em',
      color: '#455b60',
    },
  },

  menu: {
    width: '28em',
    position: 'absolute',
    bottom: '-2px',
    left: 0,
    transform: 'translate(0, 100%)',
    borderRadius: '5px',
    boxShadow: '0 4px 8px 0 rgba(88, 88, 88, 0.16)',
    border: 'solid 1px #eff0f2',
    backgroundColor: '#ffffff',
  },

  search: {
    margin: '2.5em auto .75em',
    position: 'relative',
    width: '100%',
    maxWidth: '25em',
    height: '3em',

    '& input': {
      paddingLeft: '1.3rem',
      paddingRight: '3rem',
      height: '100%',
      width: '100%',
      fontSize: '13px',
      fontWeight: 'normal',
      color: '#15202b',
      borderRadius: '5px',
      border: 'solid 1px #c7d2d8',
      outline: 'none',

      '&::placeholder': {
        opacity: '.5',
      },

      '&:focus': {
        boxShadow: '0 0 0 3px #9dd0e7',
      },
    },

    '& i': {
      position: 'absolute',
      top: '50%',
      right: '1.2rem',
      fontSize: '1.5em',
      color: '#738387',
      transform: 'translate(0, -45%)',
    },
  },

  menuItem: {
    position: 'relative',
    padding: '0 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '3.6rem',
    fontSize: '1.3em',
    fontWeight: '400',
    color: '#15202b',

    '&.active': {
      fontWeight: '600',
      color: '#15202b',

      '& span': {
        display: 'inline-block',
      },
      '&:before': {
        content: "''",
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '100%',
        width: '4px',
        backgroundColor: '#14aa52',
      },
    },
  },

  footer: {
    paddingLeft: '1em',
    height: '6.4em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTop: 'solid 1px #eaeef0',

    '& button': {
      padding: '0 1.5rem',
      height: '3.2rem',
      fontSize: '1.2rem',
      fontWeight: 'normal',
      color: '#15202b',
      borderRadius: '4px',
      border: 'solid 1px #c7d2d8',
      backgroundImage: 'linear-gradient(to bottom, #fdfefe, #e8efed)',
    },
  },
};
