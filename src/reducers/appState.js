const initialState = {
  isVisible: false,
  inProgress: false,
  error: false,
};

const SidePanel = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_SIDEPANEL_STATE':
      return {
        isVisible: !state.isVisible,
        content: payload.content,
        error: payload.error,
        inProgress: true,
      };
    case 'UNLOCK_SIDE_PANEL':
      return {
        isVisible: false,
        content: '',
        error: false,
        inProgress: false,
      };
    default:
      return state;
  }
};

export default SidePanel;
