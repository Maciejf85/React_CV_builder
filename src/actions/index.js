import axios from 'axios';
import path from '../path';

export const changeName = (payload = { name: 'MACIEJ' }) => {
  return {
    type: 'changeName',
    payload,
  };
};

export const tools = (payload = 'Webstorm') => {
  return {
    type: 'tools',
    payload,
  };
};

// CHANGE VIEW IN MAIN PAGE

export const currentView = (type = 'cv') => {
  return {
    type,
  };
};

//  GET CONFIDENTIAL TEXT FROM SERVER

export const getData = (request = 'read') => dispatch => {
  return axios
    .post(`${path.cors}data.php`, {
      type: request,
    })
    .then(({ data }) => {
      const payload = data;
      if (typeof payload === 'string') payload.trimEnd();
      return dispatch({ type: 'UPDATE_CONFIDENTIAL', payload });
    })
    .catch(error => {
      console.log(error);
    });
};

// CHANGE CONFIDENTIAL TEXT
export const newConfidentialText = payload => {
  return {
    type: 'UPDATE_CONFIDENTIAL',
    payload,
  };
};

// CHANGE_SIDEPANEL_STATE

export const changeSidePanelState = payload => {
  return {
    type: 'CHANGE_SIDEPANEL_STATE',
    payload,
  };
};

export const showFullData = payload => {
  return {
    type: 'CHANGE_SIDEPANEL_STATE',
    payload,
  };
};
