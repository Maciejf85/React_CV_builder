const initialState = {
  isVisible: false,
  error: false,
};

const SidePanel = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_SIDEPANEL_STATE':
      return {
        isVisible: !state.isVisible,
        content: payload.content,
        error: payload.error
      };
    default:
      return state;
  }
};

export default SidePanel;
