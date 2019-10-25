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

// GET ALL INFORMATIONS OF CURRENT CV

export const getCvData = (type, id, token, redir) => dispatch => {
  return axios
    .post(`${path.cors}handleCurrentCv.php`, {
      type,
      id,
      token,
    })
    .then(({ data }) => {
      return (
        dispatch({ type: 'SAVE_CURRENT_CV', payload: data }),
        setTimeout(() => redir.push(path.edit), 10)
      );
    })
    .catch(error => {
      console.log(error);
    });
};

// GET ALL INFORMATIONS OF CURRENT CV

export const setNewCurrentCVData = (type, token, id, data) => {
  return axios
    .post(`${path.cors}handleCurrentCv.php`, {
      type,
      id,
      token,
      data,
    })
    .then(request => {
      console.log('data', request);
    })
    .catch(error => {
      console.log(error);
    });
};

//  GET USER CONFIDENTIAL PERSONAL DATA AND LIST OF CV's

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
        dispatch({ type: 'SAVE_CV_LIST', payload: list }),
        axios
          .get(`${path.cors}getImage.php?token=${personalData.token}`, {
            responseType: 'blob',
          })
          .then(request => {
            const { size } = request.data;
            if (size > 0) {
              const accepted = ['image/jpeg', 'image/jpg', 'image/png'];
              const reader = new FileReader();
              if (accepted.includes(request.data.type)) {
                reader.readAsDataURL(request.data);
                reader.onload = () => dispatch({ type: 'GET_IMAGE', payload: reader.result });
              }
            }
          })
      );
    })
    .catch(error => {
      console.log(error);
    });
};

export const updateImage = payload => {
  return {
    type: 'GET_IMAGE',
    payload,
  };
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

// HANDLE ADD/REMOVE CV

export const updateCVList = (type, token, cvId = null, redir, cvTitle = null) => dispatch => {
  return axios
    .post(`${path.cors}handleCV.php`, {
      type,
      token,
      cvId,
      cvTitle,
    })
    .then(({ data }) => {
      const { cvList, currentCv } = data;
      const list = cvList ? JSON.parse(cvList) : null;
      const currentItem = currentCv ? JSON.parse(currentCv) : null;

      return (
        dispatch({ type: 'SAVE_CV_LIST', payload: list }),
        dispatch({ type: 'SAVE_CURRENT_CV', payload: currentItem }),
        type === 'add' ? redir.push(path.edit) : null
      );
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

// CHANGE PERSONAL DATA FROM EDIT FORMS

export const updatePersonalFromState = payload => {
  return {
    type: 'UPDATE_PERSONAL_DATA',
    payload,
  };
};

//
export const updatecurrentCVFromState = (itemType, id, newValue) => {
  console.log('newValue', newValue);
  return {
    type: 'UPDATE_CURRENT_CV_ITEM',
    payload: {
      itemType,
      id,
      newValue,
    },
  };
};
