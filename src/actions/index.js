import axios from 'axios';
import path from '../path';

// CHANGE VIEW IN MAIN PAGE

export const currentView = (type = 'cv') => {
  return {
    type,
  };
};

// CHANGE VIEW IN EDIT PAGE

export const currentEditView = (type = 'personal') => {
  return {
    type,
  };
};

//  GET MAIN DATA FROM SERVER

// export const getMainData = () => () => {
//   return axios
//     .post(`${path.cors}getData.php`)
//     .then(response => {
//       console.log('response = ', response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// //  GET CURRENT CV
export const getCvData = (type, id, token) => dispatch => {
  return axios
    .post(`${path.cors}handleCv.php`, {
      type,
      id,
      token,
    })
    .then(({ data }) => {
      console.log('result', data);
      return dispatch({ type: 'SAVE_CURRENT_CV', payload: data });
    })
    .catch(error => {
      console.log(error);
    });
};

//  GET CONFIDENTIAL,
export const getMainData = (type = 'main') => dispatch => {
  return axios
    .post(`${path.cors}getData.php`, {
      type,
    })
    .then(({ data }) => {
      const { personalData, cvList, confidential } = data;

      const confidentialData = JSON.parse(confidential);
      const payload = confidentialData.confidential;
      const list = JSON.parse(cvList);

      sessionStorage.setItem('userID', personalData.token);

      if (typeof payload === 'string') payload.trimEnd();
      return (
        dispatch({ type: 'UPDATE_CONFIDENTIAL', payload }),
        dispatch({ type: 'SET_PERSONAL_DATA', payload: personalData }),
        dispatch({ type: 'SAVE_DATA', payload: list })
      );
    })
    .catch(error => {
      console.log(error);
    });
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

// export const showFullData = payload => {
//   return {
//     type: 'CHANGE_SIDEPANEL_STATE',
//     payload,
//   };
// };
