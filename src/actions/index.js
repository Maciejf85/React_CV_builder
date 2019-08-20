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

// change component on main view

export const currentView = (type = 'cv') => {
  return {
    type,
  };
};

export const getData = () => dispatch => {
  dispatch({ type: 'UPDATE_CONFIDENTIAL' });

  return axios(`${path.cors}http://www.maciejf.pl/cv-builder/data.php`)
    .then(({ data }) => {
      const payload = data.confidential;
      return dispatch({ type: 'UPDATE_CONFIDENTIAL', payload });
    })
    .catch(error => {
      console.log(error);
    });
};
