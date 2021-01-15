import { Hidden } from '@material-ui/core';
import {
  colorVariables,
  textVariables,
} from '../../../../style_variables/StyleVariables';
import sizes from '../../../../sizes';

export const styles = {
  root: {
    margin: '0 1.5rem 2.2rem',
    paddingLeft: '1.7rem',
    paddingRight: '1.3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '38rem',
    height: '23.6rem',
    borderRadius: '7px',
    boxShadow: '0 3px 6px 0 rgba(111, 111, 111, 0.03)',
    border: `solid 1px ${colorVariables.categories.border}`,
    backgroundColor: colorVariables.colors.white,
    overflow: 'visible',
    cursor: 'pointer',

    [sizes.down('xxl')]: {
      width: 'calc(33.333% - 3rem)',
    },

    [sizes.down('lg')]: {
      width: 'calc(50% - 3rem)',
    },

    [sizes.down('sm')]: {
      margin: '0 0 2.2rem',
      width: '100%',
    },
  },

  header: {
    paddingTop: '1rem',
    paddingBottom: '.3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  headerTitle: {
    ...textVariables.categories.header,
  },

  headerButtons: {
    '& > *:first-child': {
      marginRight: '.7rem',
    },
  },

  reviews: {
    ...textVariables.categories.body,
    marginBottom: '1.7rem',
    opacity: '.7',
  },

  main: {
    padding: '.3rem .9rem .7rem',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: '6px',
    backgroundColor: colorVariables.categories.fill,
    width: '100%',
  },

  mainPlaceholder: {
    margin: 'auto',
    height: 'auto',
    width: '11.7rem',
    minWidth: '0',
    objectFit: 'cover',
  },

  question: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    '&:not(:last-of-type)': {
      marginBottom: '.9rem',
    },
  },

  questionIcon: {
    marginRight: '.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3.2rem',
    height: '2.8rem',
  },

  questionText: {
    ...textVariables.categories.body,
    opacity: '.9',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  footer: {
    paddingBottom: '1.6rem',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '5rem',
    width: '100%',

    '& p': {
      ...textVariables.categories.footer,
      opacity: '.7',
    },
  },
};
