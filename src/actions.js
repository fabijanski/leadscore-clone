export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const FETCH_CONTACTS_PENDING = 'FETCH_CONTACTS_PENDING';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR';

export const login = () => ({ type: LOGIN_PENDING });
export const loginSuccess = response => ({ type: LOGIN_SUCCESS, response });
export const loginError = error => ({ type: LOGIN_ERROR, error });

export const fetchContacts = () => ({ type: FETCH_CONTACTS_PENDING });
export const fetchContactsSuccess = response => ({ type: FETCH_CONTACTS_SUCCESS, response });
export const fetchContactsError = error => ({ type: FETCH_CONTACTS_ERROR, error });
