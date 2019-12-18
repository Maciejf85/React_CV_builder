const CHANGE_SIDEPANEL_STATE = 'CHANGE_SIDEPANEL_STATE';
const UNLOCK_SIDE_PANEL = 'UNLOCK_SIDE_PANEL';
const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const initialState = {
  isVisible: false,
  inProgress: false,
  error: false,
  logedIn: false,
  language: 'PL',
};

const SidePanel = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SIDEPANEL_STATE:
      return {
        ...state,
        isVisible: !state.isVisible,
        content: payload.content,
        error: payload.error,
        inProgress: true,
      };
    case UNLOCK_SIDE_PANEL:
      return {
        ...state,
        isVisible: false,
        content: '',
        error: false,
        inProgress: false,
      };
    case LOG_IN:
      return {
        ...state,
        logedIn: true,
      };
    case LOG_OUT:
      return {
        ...state,
        logedIn: true,
      };
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: payload,
      };
    default:
      return state;
  }
};

export default SidePanel;
