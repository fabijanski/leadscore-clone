export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = () => ({ type: LOGIN_PENDING });
export const loginSuccess = response => ({ type: LOGIN_SUCCESS, response });
export const loginError = error => ({ type: LOGIN_ERROR, error });
