const initialState = [];

const myCV = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SHOW_DATA': {
      return state;
    }
    case 'DELETE_ITEM': {
      return state.filter(item => item.id !== payload);
    }
    case 'SAVE_DATA': {
      return payload;
    }
    default:
      return state;
  }
};
export default myCV;
