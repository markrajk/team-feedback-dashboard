import { mixins } from '../../../style_variables/StyleVariables';

export const styles = {
  root: {
    flex: '1',
    maxHeight: '100%',
    ...mixins.oveflowY,

    '&.giveFeedback': {
      padding: '0 8.3%',
    },

    '&.feedbackData': {
      padding: '0 8.3%',
    },

    '&.widgets': {
      padding: '0 3rem 5rem',
      backgroundColor: '#f5f6f7',
    },
  },
};
