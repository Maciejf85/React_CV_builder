import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';
// eslint-disable-next-line no-underscore-dangle

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
