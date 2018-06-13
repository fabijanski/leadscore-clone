import axios from 'axios';
import { push } from 'connected-react-router';
import store from './store';
import { getAuthToken } from './selectors';
import {
  login,
  loginError,
  loginSuccess,
  fetchContacts,
  fetchContactsError,
  fetchContactsSuccess,
  logout
} from './actions';


const basicUrl = 'https://internal-api-staging-lb.interact.io/v2';

const ENDPOINTS = {
  login: `${basicUrl}/login`,
  contacts: `${basicUrl}/contacts`
};

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

export const contactsRequest = () => (dispatch, getState) => {
  const headers = { authToken: getAuthToken(getState()) };
  if (headers.authToken) {
    dispatch(fetchContacts());
    return axios.get(ENDPOINTS.contacts, { headers })
      .then(
        response => dispatch(fetchContactsSuccess(response)),
        error => dispatch(fetchContactsError(error))
      );
  }
  return store.dispatch(push('/'));
};

export const logoutRequest = () => (dispatch) => {
  dispatch(logout());
  store.dispatch(push('/'));
};
