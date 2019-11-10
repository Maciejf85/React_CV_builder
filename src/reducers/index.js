import personalData from 'reducers/personalData';
import path from 'reducers/path';
import confidential from 'reducers/confidential';
import appState from 'reducers/appState';
import myCv from 'reducers/myCv';
import editComponentView from 'reducers/editComponentView';
import currentCv from 'reducers/currentCv';
import image from 'reducers/image';
import serverResponse from 'reducers/serverResponse';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  path,
  personalData,
  confidential,
  appState,
  myCv,
  editComponentView,
  currentCv,
  image,
  serverResponse,
});

const clearReducer = (state, action) => {
  if (action.type === 'CLEAR_STORE') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return rootReducer(state, action);
};

export default clearReducer;
