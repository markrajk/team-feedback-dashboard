import {
  colorVariables,
  textVariables,
} from '../../../style_variables/StyleVariables';

export const styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    whiteSpace: 'nowrap',

    '&.small': {
      //backgroundColor: 'red!important',
      '& .option': {
        padding: '0 1.6rem',
        height: '2.4rem',
      },
    },

    '& .option': {
      ...textVariables.button.medium,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '.85rem 1.6rem',
      fontWeight: '400',
      opacity: '.5',
      border: `1px solid ${colorVariables.buttons.buttonBorderLight}`,
      borderLeft: 0,
      cursor: 'pointer',

      //   '&:not(:last-of-type)': {
      //     borderRight: `1px solid ${colorVariables.buttons.buttonBorderLight}`,
      //   },

      '&:first-of-type': {
        borderRadius: '4px 0 0 4px',
        borderLeft: `1px solid ${colorVariables.buttons.buttonBorderLight}`,
      },

      '&:last-of-type': {
        borderRadius: '0 4px 4px 0',
      },

      '&.active': {
        background: colorVariables.buttons.buttonLightGradient,
        fontWeight: '500',
        opacity: '1',
        cursor: 'default',
      },
    },
  },
};
