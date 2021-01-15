export const colorVariables = {
  colors: {
    fillLight: '#fdfefd',
    textPrimary: '#15202b',
    greyDark: '#404040',
    greenPrimary: '#14aa52',
    greenSecondary: '#64c930',
    redPrimary: '#fa711f',
    orangePrimary: '#ffb12d',
    bluePrimary: '#1f73b7',
    white: '#FFF',
    iconColor: '#455b60',
    separatorLight: '#e9edef',
    separatorDark: '#cfd8dd',
  },
  buttons: {
    buttonLight: '#fcfcfc',
    buttonGrey: '#e9ebed',
    buttonLightGradient: 'linear-gradient(#FDFEFE, #E8EFED)',
    buttonGreenGradient: 'linear-gradient(#119D4C, #19984F)',
    buttonBorderLight: '#c7d2d8',
    buttonBorderDark: '#b4bfc6',
  },
  categories: {
    border: '#dbe6ea',
    fill: '#f9fbfa',
    blue: '#017cad',
  },
};

export const textVariables = {
  general: {
    body01: {
      fontSize: '1.3rem',
      fontWeight: '400',
      lineHeight: 1.54,
      letterSpacing: 'normal',
      color: colorVariables.colors.textPrimary,
    },

    body02: {
      fontSize: '1.2rem',
      lineHeight: 1.67,
      color: colorVariables.colors.textPrimary,
    },

    overline01: {
      fontSize: '1.1rem',
      fontWeight: '600',
      letterSpacing: '-0.03px',
      color: '#0f6cbc',
    },

    overline02: {
      fontSize: '1.1rem',
      fontWeight: '700',
      letterSpacing: '-0.06px',
      color: '#126149',
    },
  },

  headings: {
    h1: {
      fontSize: '2.6rem',
      fontWeight: '600',
      letterSpacing: '-0.33px',
      color: colorVariables.colors.textPrimary,
    },
    h4: {
      fontSize: '1.4rem',
      fontWeight: 600,
      color: '#292f33',
    },
  },
  widgets: {
    bigValue: {
      fontSize: '5.4rem',
      fontWeight: '400',
      color: '#2b373e',
    },
    header: {
      fontSize: '1.7rem',
      fontWeight: 500,
      color: '#2b373e',
    },

    body01: {
      fontSize: '1.1rem',
      fontWeight: '400',
      color: colorVariables.colors.greyDark,
    },

    body02: {
      fontSize: '1.28rem',
      fontWeight: 500,
      lineHeight: 1.49,
      letterSpacing: '-0.06px',
      color: '#2b373e',
    },

    body03: {
      fontSize: '1.28rem',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.57,
      letterSpacing: '-0.03px',
      color: colorVariables.colors.textPrimary,
    },
    barValue: {
      fontSize: '1.2rem',
      fontWeight: 600,
      letterSpacing: '0.06px',
      color: 'var(--white)',
    },
  },

  placeholders: {
    title: {
      fontSize: '1.8rem',
      fontWeight: '600',
      letterSpacing: '-0.23px',
      color: colorVariables.colors.textPrimary,
    },
    body: {
      fontSize: '1.3rem',
      fontWeight: '400',
      letterSpacing: '-0.03px',
      color: '#223343',
    },
  },

  categories: {
    header: {
      fontSize: '1.6rem',
      fontWeight: 600,
      letterSpacing: '-0.12px',
      color: colorVariables.categories.blue,
    },
    body: {
      fontSize: '1.2rem',
      fontWeight: '400',
      letterSpacing: '-0.09px',
      color: colorVariables.colors.textPrimary,
    },

    footer: {
      fontSize: '1.1rem',
      fontWeight: '400',
      color: colorVariables.colors.textPrimary,
    },
  },

  textFeedback: {
    h1: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#2b373e',
    },
    h2: {
      fontSize: '1.38rem',
      fontWeight: 500,
      color: '#2b373e',
    },
    names: {
      fontSize: '1.3rem',
      fontWeight: 500,
      letterSpacing: '0.03px',
      color: colorVariables.colors.textPrimary,
    },
    questions: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#2b373e',
    },
  },

  giveFeedback: {
    names: {
      fontSize: '12.5px',
      fontWeight: 500,
      color: colorVariables.colors.textPrimary,
    },

    jobTitle: {
      fontSize: '1.1rem',
      fontWeight: '400',
      letterSpacing: '-0.03px',
      color: colorVariables.colors.textPrimary,
    },
  },

  feedbackRequest: {
    name: {
      fontSize: '1.2rem',
      fontWeight: 500,
      letterSpacing: '-0.03px',
      color: colorVariables.colors.textPrimary,
    },
    jobReqAmount: {
      fontSize: '1.15rem',
      fontWeight: '400',
      color: colorVariables.colors.textPrimary,
    },
  },

  menu: {
    secondary: {
      fontSize: '1.35rem',
      fontWeight: 600,
      letterSpacing: '-0.17px',
      color: '#343b3e',
    },
    top: {
      fontSize: '1.3rem',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: '-0.1px',
      color: colorVariables.colors.textPrimary,
    },

    side: {
      fontSize: '1.28rem',
      fontWeight: '400',
      letterSpacing: '-0.1px',
      color: '#3d4f59',
    },
  },

  table: {
    body: {
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '-0.09px',
      color: '#464c4f',
    },
    description: {
      fontSize: '1.13rem',
      fontWeight: 600,
      letterSpacing: '-0.14px',
      color: '#464c4f',
    },
  },

  button: {
    medium: {
      fontSize: '1.2rem',
      fontWeight: 500,
      letterSpacing: '0.03px',
      color: colorVariables.colors.textPrimary,
    },

    small: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: '#3d4f59',
    },
  },
};

export const mixins = {
  oveflowY: {
    overflowY: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': { width: '0', height: '0' },
  },

  // sticky: {
  //   position: [
  //     '-webkit-sticky',
  //     '-moz-sticky',
  //     '-ms-sticky',
  //     '-o-sticky',
  //     'sticky',
  //   ],
  // },
};
