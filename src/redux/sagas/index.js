import dotenv from 'dotenv';
import axios from 'axios';
import { all, fork } from 'redux-saga/effects';

import auth from './auth';
import question from './question';

dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export default function* rootSaga() {
  yield all([fork(auth), fork(question)]);
}
