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

export const getData = () => dispatch => {
  // dispatch({ type: 'UPDATE_CONFIDENTIAL' });

  return axios(`${path.cors}data.php`)
    .then(({ data }) => {
      const payload = data.confidential;
      return dispatch({ type: 'UPDATE_CONFIDENTIAL', payload });
    })
    .catch(error => {
      console.log(error);
    });
};

// CHANGE CONFIDENTIAL TEXT
export const newConfidentialText = (type = 'UPDATE_CONFIDENTIAL', payload) => {
  return {
    type,
    payload,
  };
};
