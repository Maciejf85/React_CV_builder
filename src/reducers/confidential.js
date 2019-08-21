const initialState = {
  confidential: 'confidential empty',
  edit: false,
};

const confidential = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_CONFIDENTIAL':
      return {
        confidential: payload,
        edit: false,
      };
    case 'NEW_CONFIDENTIAL':
      return {
        confidential: payload,
      };
    case 'EDIT_CONFIDENTIAL':
      return {
        ...state,
        edit: !state.edit,
      };

    default:
      return state;
  }
};

export default confidential;
