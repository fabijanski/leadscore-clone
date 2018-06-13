import {
  LOGIN_PENDING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  FETCH_CONTACTS_PENDING,
  FETCH_CONTACTS_ERROR,
  FETCH_CONTACTS_SUCCESS
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
    case FETCH_CONTACTS_PENDING:
      return {
        ...state,
        contacts: {
          pending: true,
          data: [],
          error: null
        }
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: {
          pending: false,
          data: action.response.data.data,
          error: null
        }
      };
    case FETCH_CONTACTS_ERROR:
      return {
        ...state,
        contacts: {
          pending: true,
          data: [],
          error: action.error.message
        }
      };
    default:
      return state;
  }
}
