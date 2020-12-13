const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_CHECK_REQUEST,
  USER_CHECK_SUCCESS,
  USER_CHECK_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} = require('../types');

const initialState = {
  isLoading: false,
  token: '',
  name: '',
  isAuth: true,
  isError: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_CHECK_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case USER_CHECK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        name: action.data.name,
        isAuth: true,
      };
    case USER_CHECK_FAILURE:
      return {
        ...state,
        isLoading: false,
        name: '',
        isAuth: false,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: localStorage.getItem('token'),
        name: action.data.name,
        isAuth: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: '',
        name: '',
        isAuth: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default auth;
