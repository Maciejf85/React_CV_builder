const initialState = [];

const myCV = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SHOW_DATA': {
      return state;
    }
    case 'SAVE_DATA': {
      return payload;
    }
    case 'DELETE_ITEM': {
      return state.filter(item => item.id !== payload);
    }

    default:
      return state;
  }
};
export default myCV;
