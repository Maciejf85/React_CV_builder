const initialState = {};

const currentCv = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_CURRENT_CV': {
      return state;
    }
    case 'SAVE_CURRENT_CV': {
      return payload;
    }

    default:
      return state;
  }
};
export default currentCv;
