import {
  colorVariables,
  textVariables,
} from '../../../style_variables/StyleVariables';

export const styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '3px',
    cursor: 'pointer',
    border: '1px solid transparent',

    '&.green': {
      color: `${colorVariables.colors.white}!important`,
      backgroundColor: colorVariables.colors.greenPrimary,
      borderColor: colorVariables.colors.greenPrimary,
    },

    '&.greenGradient': {
      color: `${colorVariables.colors.white}!important`,
      background: colorVariables.buttons.buttonGreenGradient,
      borderColor: colorVariables.colors.greenPrimary,
    },

    '&.light': {
      color: `#303434!important`,
      backgroundColor: colorVariables.buttons.buttonLight,
      borderColor: colorVariables.buttons.buttonBorderLight,
    },

    '&.lightGradient': {
      color: `#303434!important`,
      background: colorVariables.buttons.buttonLightGradient,
      borderColor: colorVariables.buttons.buttonBorderLight,
    },

    '&.small': {
      ...textVariables.button.small,
      padding: '.6rem 1.5rem',

      '& i': {
        fontSize: 'inherit',
      },
    },

    '&.medium': {
      ...textVariables.button.medium,
      padding: '.85rem 1.7rem',

      '& i': {
        fontSize: 'inherit',
      },
    },

    '&.smallSquare': {
      ...textVariables.button.small,
      padding: '.6rem',

      '& i': {
        fontSize: 'inherit',
      },
    },

    '&.mediumSquare': {
      ...textVariables.button.medium,
      padding: '.85rem',

      '& i': {
        fontSize: 'inherit',
      },
    },
  },
};
