import userName from 'reducers/userData';
import skills from 'reducers/skills';
import path from 'reducers/path';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  path,
  userName,
  skills,
});

export default rootReducer;
