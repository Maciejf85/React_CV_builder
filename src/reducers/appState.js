const initialState = {
  isVisible: false,
};

const SidePanel = (state = initialState, { type }) => {
  switch (type) {
    case 'CHANGE_SIDEPANEL_STATE':
      return {
        isVisible: !state.isVisible,
      };
    default:
      return state;
  }
};

export default SidePanel;
