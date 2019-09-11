import userData from 'reducers/userData';
import path from 'reducers/path';
import confidential from 'reducers/confidential';
import appState from 'reducers/appState';
import cvData from 'reducers/cvData';
import editComponentView from 'reducers/editComponentView';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  path,
  userData,
  confidential,
  appState,
  cvData,
  editComponentView,
});

export default rootReducer;
