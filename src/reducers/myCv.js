const initialState = [];

const myCV = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SHOW_DATA': {
      return state;
    }
    case 'SAVE_DATA': {
      return payload;
    }

    default:
      return state;
  }
};
export default myCV;
