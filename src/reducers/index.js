import personalData from 'reducers/personalData';
import path from 'reducers/path';
import confidential from 'reducers/confidential';
import appState from 'reducers/appState';
import myCv from 'reducers/myCv';
import editComponentView from 'reducers/editComponentView';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  path,
  personalData,
  confidential,
  appState,
  myCv,
  editComponentView,
});

export default rootReducer;
