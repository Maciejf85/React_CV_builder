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

// //  GET ALL INFORMATIONS OF CURRENT CV

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

//  GET USER CONFIDENTIAL AND PERSONAL DATA

export const getMainData = (type = 'main') => dispatch => {
  return axios
    .post(`${path.cors}getData.php`, {
      type,
    })
    .then(({ data }) => {
      const { personalData, cvList, confidential } = data;
      console.log('data', data);

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

export const getImage = () => dispatch => {
  axios
    .get(
      'https://cors-anywhere.herokuapp.com/http://www.maciejf.pl/cv-builder/users/bad3e7665d3c14b042a18f72082ddf76/0507e9d80f2dd6da461e8e9775046698/images/pic1.jpg',
      {
        responseType: 'blob',
      },
    )
    .then(request => {
      const reader = new FileReader();
      reader.readAsDataURL(request.data);
      reader.onload = () => dispatch({ type: 'GET_IMAGE', payload: reader.result });
    })
    .catch(error => console.log('error', error));
};

export const updatePersonalData = (type = 'update') => dispatch => {
  return axios
    .post(`${path.cors}getPersonalData.php`, {
      type,
    })
    .then(({ data }) => {
      const { personalData } = data;
      return dispatch({ type: 'SET_PERSONAL_DATA', payload: personalData });
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

// CHANGE_SIDEPANEL_STATE

export const updatePersonalFromState = payload => {
  return {
    type: 'UPDATE_PERSONAL_DATA',
    payload,
  };
};
