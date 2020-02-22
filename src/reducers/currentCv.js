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
      return {
        ...state,
        [payload.itemType]: [...state[payload.itemType], payload.item],
      };
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        [payload.itemType]: [...state[payload.itemType].filter(item => item.id !== payload.id)],
      };
    }

    case 'CHANGE_TEMPLATE':
      return {
        ...state,
        currentItem: {
          ...state.currentItem,
          template: payload.id,
        },
      };
    case 'CHANGE_COLOR':
      return {
        ...state,
        currentItem: {
          ...state.currentItem,
          color: payload.id,
        },
      };

    default:
      return state;
  }
};
export default currentCv;
