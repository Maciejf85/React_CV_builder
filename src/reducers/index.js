import userName from 'reducers/userData';
import skills from 'reducers/skills';
import path from 'reducers/path';
import confidential from 'reducers/confidential';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  path,
  userName,
  skills,
  confidential,
});

export default rootReducer;
