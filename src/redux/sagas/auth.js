import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  USER_CHECK_FAILURE,
  USER_CHECK_REQUEST,
  USER_CHECK_SUCCESS,
} from '../types';

// login
const loginAPI = async (userID) => {
  const result = await axios.post(`auth/${userID}`);

  localStorage.setItem('token', `JWT ${result.data.jwt}`);

  const config = {
    headers: {
      Auth: `JWT ${result.data.jwt}`,
    },
  };

  return await axios.get('auth', config);
};

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);

    yield put({
      type: LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);

    yield put({
      type: LOGIN_FAILURE,
      error: true,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

// user check
const userCheckAPI = async (token) => {
  const config = {
    headers: {
      Auth: ``,
    },
  };

  if (token) {
    config.headers.Auth = token;
  }

  return await axios.get('auth', config);
};

function* userCheck(action) {
  try {
    const result = yield call(userCheckAPI, action.data);

    yield put({
      type: USER_CHECK_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);

    yield put({
      type: USER_CHECK_FAILURE,
      error: true,
    });
  }
}

function* watchUserCheck() {
  yield takeLatest(USER_CHECK_REQUEST, userCheck);
}

export default function* auth() {
  yield all([fork(watchLogin), fork(watchUserCheck)]);
}
