const initialState = {
  isVisible: false,
  error: false,
};

const SidePanel = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_SIDEPANEL_STATE':
      return {
        isVisible: !state.isVisible,
        error: payload,
      };
    default:
      return state;
  }
};

export default SidePanel;
