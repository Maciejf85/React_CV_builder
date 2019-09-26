import axios from 'axios';
import path from '../path';

export const changeName = (payload = { name: 'MACIEJ' }) => {
  return {
    type: 'changeName',
    payload,
  };
};

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

export const getMainData = () => dispatch => {
  return axios
    .post(`${path.cors}getData.php`)
    .then(({ data }) => {
      const { personalData, cvList, confidential } = data;

      const confidentialData = JSON.parse(confidential);
      const payload = confidentialData.confidential;
      const list = JSON.parse(cvList);

      if (typeof payload === 'string') payload.trimEnd();
      return (
        dispatch({ type: 'UPDATE_CONFIDENTIAL', payload }),
        dispatch({ type: 'CHANGE_NAME', payload: personalData }),
        dispatch({ type: 'SAVE_DATA', payload: list })
      );
    })
    .catch(error => {
      console.log(error);
    });
};
//  GET MAIN DATA FROM SERVER

// export const getMainData = (request = 'mainData') => () => {
//   return axios
//     .post(`${path.cors}data.php`, {
//       type: request,
//     })
//     .then(response => {
//       console.log('response', response);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

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
