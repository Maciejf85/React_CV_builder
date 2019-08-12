import { createStore } from 'redux';
import rootReducer from 'reducers';

// eslint-disable-next-line no-underscore-dangle
const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
