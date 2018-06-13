import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducer';

export const history = createHistory();

const initialState = {
  session: {
    pending: false,
    authToken: null,
    user: null,
    error: null
  },
  contacts: {
    pending: false,
    data: [],
    error: null
  }
};

const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
);

export default store;
