import {
  colorVariables,
  textVariables,
  mixins,
} from '../../../style_variables/StyleVariables';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const styles = {
  root: {
    paddingTop: '4rem',
    backgroundColor: colorVariables.colors.white,
    zIndex: '500',
    '& .PageHeader-subtitle': {
      marginBottom: '.6rem',
      fontSize: '1.1rem',
      fontWeight: 600,
      letterSpacing: '-0.03px',
      color: colorVariables.colors.bluePrimary,

      '& i': {
        margin: '0 .3rem',
        fontSize: '.8rem',
      },
    },

    '& .PageHeader-title': {
      ...textVariables.headings.h1,
      marginBottom: '4rem',

      '& span': {
        fontWeight: '400',
      },
    },

    '& .PageHeader-bottom': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '&-buttons': {
        '& > *:not(:last-child)': {
          marginRight: '1rem',
        },

        '& input': {
          padding: '0 1.1rem',
          height: '3.4rem',
          fontSize: '1.2rem',
          fontWeight: '400',
          letterSpacing: '0.03px',
          color: colorVariables.colors.textPrimary,
          borderRadius: '3px',
          border: `solid 1px ${fade(
            colorVariables.buttons.buttonBorderLight,
            0.75
          )}`,
          outline: 'none',
          backgroundColor: 'var(--buttons-fill-light)',

          '&::placeholder': {
            opacity: '.5',
          },
        },
      },
    },

    // PAGE SPECIFIC
    '&.giveFeedback': {
      position: 'sticky',
      top: '0',
      paddingBottom: '3.4rem',
      borderBottom: `solid 2px ${colorVariables.colors.separatorLight}`,

      '& .PageHeader-title': {
        marginBottom: '2.4rem',
      },
    },

    '&.feedbackData': {
      '& .PageHeader-title': {},
    },
  },
};
