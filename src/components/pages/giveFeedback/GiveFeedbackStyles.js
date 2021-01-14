import {
  colorVariables,
  textVariables,
} from '../../../style_variables/StyleVariables';

export const styles = {
  root: {},

  placeholder: {
    marginTop: '-2px',
    height: 'calc(100% - 185px - 86px)',
    minHeight: '32rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: colorVariables.colors.fillLight,
    border: 'solid 2px #eeeeee',
    borderRadius: '3px',

    '&.hide': {
      display: 'none',
    },
  },

  placeholderImg: {
    marginBottom: '5rem',
    width: 'clamp(10rem,17.36vw,40rem)',
    height: 'auto',
    objectFit: 'cover',
  },

  placeholderTitle: {
    ...textVariables.placeholders.title,
    marginBottom: '1.6rem',
  },

  placeholderText: {
    ...textVariables.placeholders.body,

    '& button': {
      fontWeight: '600',
      color: colorVariables.colors.bluePrimary,
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
};
