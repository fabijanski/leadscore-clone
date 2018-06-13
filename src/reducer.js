import {
  LOGIN_PENDING,
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from './actions';


export default function rootReducer(state, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        session: {
          pending: true,
          authToken: null,
          user: null,
          error: ''
        }
      };
    // eslint-disable-next-line no-case-declarations
    case LOGIN_SUCCESS:
      console.log('loginSuccess', action.response.data);
      const { data } = action.response;
      return {
        ...state,
        session: {
          pending: false,
          authToken: data.token.authToken,
          user: data.user,
          error: ''
        }
      };
    case LOGIN_ERROR:
      return {
        ...state,
        session: {
          pending: false,
          authToken: null,
          user: null,
          error: 'Bad Credentials'
        }
      };
    default:
      return state;
  }
}
