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
      return {
        ...state,
        [payload.itemType]: [
          ...state[payload.itemType].map(item => {
            return item.id === payload.id ? payload.newValue : item;
          }),
        ],
      };
    }
    case 'ADD_NEW_ITEM': {
      console.log('payload.itemType', payload.itemType);
      console.log('payload.item', payload.item);
      return {
        ...state,
        [payload.itemType]: [...state[payload.itemType], payload.item],
      };
    }

    default:
      return state;
  }
};
export default currentCv;
