import userName from 'reducers/userData';
import skills from 'reducers/skills';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userName,
  skills,
});

export default rootReducer;
