import {
  colorVariables,
  textVariables,
} from '../../../style_variables/StyleVariables';

export const styles = {
  root: {},

  PageHeader: {
    height: '9.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  PageHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  PageHeaderTitle: {
    marginBottom: '.8rem',
    fontSize: '1.8rem',
    fontWeight: 600,
    letterSpacing: '-0.14px',
    color: colorVariables.colors.greyDark,
  },

  PageHeaderRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    '& > *:not(:last-child)': {
      marginRight: '1rem',
    },
  },
};
