const initialState = {};

const currentCv = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_CURRENT_CV': {
      return state;
    }
    case 'SAVE_CURRENT_CV': {
      return payload;
    }
    case 'UPDATE_CURRENT_CV_ITEM': {
      console.log('payload', payload);
      return {
        ...state,
        [payload.itemType]: [
          ...state[payload.itemType].map(item => {
            return item.id === payload.id ? payload.newValue : item;
          }),
        ],
      };
    }

    default:
      return state;
  }
};
export default currentCv;
