import axios from 'axios';
import { push } from 'connected-react-router';
import store from './store';
import {
  login,
  loginError,
  loginSuccess
} from './actions';

const basicUrl = 'https://internal-api-staging-lb.interact.io/v2';

const ENDPOINTS = {
  login: `${basicUrl}/login`,
  contacts: `${basicUrl}/contacts`
};

// eslint-disable-next-line import/prefer-default-export
export const loginRequest = (username, password) => (dispatch) => {
  dispatch(login());

  return axios.post(ENDPOINTS.login, { username, password })
    .then(
      (response) => {
        dispatch(loginSuccess(response));
        store.dispatch(push('/contacts'));
      },
      error => dispatch(loginError(error))
    );
};
