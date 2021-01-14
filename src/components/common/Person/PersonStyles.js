import { textVariables } from '../../../style_variables/StyleVariables';

export const styles = {
  root: {
    margin: '0 2rem 4rem',
    minWidth: '13rem',
    width: '13rem',
    textAlign: 'center',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'visible',
    cursor: 'pointer',
    zIndex: '10',

    '&:hover $initials': {
      transform: 'scale(1.06) translateY(-2.5px)',
    },

    '&:hover $img': {
      transform: 'scale(1.06) translateY(-2.5px)',
    },
  },

  img: {
    marginBottom: '1rem',
    width: '8.25rem',
    minWidth: '8.25rem',
    height: '8.25rem',
    minHeight: '8.25rem',
    objectFit: 'cover',
    borderRadius: '16px',
    transition: 'all .2s ease-in-out',
  },

  initials: {
    marginBottom: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '8.25rem',
    minWidth: '8.25rem',
    height: '8.25rem',
    minHeight: '8.25rem',
    borderRadius: '16px',
    fontSize: '2.85em',
    color: '#FFF',
    fontWeight: 700,
    letterSpacing: '-0.43px',
    backgroundColor: '#fea42a',
    borderRadius: '16px',
    transition: 'all .2s ease-in-out',
    boxShadow: '0 3px 6px 0 rgba(221, 221, 221, 0.2)',
    textTransform: 'uppercase',
  },

  name: {
    ...textVariables.giveFeedback.names,
    marginBottom: '.3rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },

  position: {
    ...textVariables.giveFeedback.jobTitle,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    opacity: '.5',
  },
};
