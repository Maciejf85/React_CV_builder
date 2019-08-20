const initialState = {
  confidential: 'confidential empty',
};

const confidential = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'READ_CONFIDENTIAL':
      return state;
    case 'UPDATE_CONFIDENTIAL':
      return {
        confidential: payload,
      };
    default:
      return state;
  }
};

export default confidential;
