import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import {
  DELETE_QUESTION_FAILURE,
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESS,
  READ_QUESTIONS_FAILURE,
  READ_QUESTIONS_REQUEST,
  READ_QUESTIONS_SUCCESS,
} from '../types';

// read question
const readQuestionsAPI = async () => {
  const config = {
    headers: {
      Auth: localStorage.getItem('token'),
    },
  };

  return await axios.get('api/questions', config);
};

function* readQuestions() {
  try {
    const result = yield call(readQuestionsAPI);

    yield put({
      type: READ_QUESTIONS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);

    yield put({
      type: READ_QUESTIONS_FAILURE,
      error: true,
    });
  }
}

function* watchReadQuestions() {
  yield takeLatest(READ_QUESTIONS_REQUEST, readQuestions);
}

// delete question
const deleteQuestionAPI = async (id) => {
  const config = {
    headers: {
      Auth: localStorage.getItem('token'),
    },
  };

  return await axios.delete(`api/questions/${id}`, config);
};

function* deleteQuestion(action) {
  try {
    const result = yield call(deleteQuestionAPI, action.data);

    yield put({
      type: DELETE_QUESTION_SUCCESS,
      data: result.data,
    });

    yield put({
      type: READ_QUESTIONS_REQUEST,
      data: result.data,
    });
  } catch (err) {
    console.error(err);

    yield put({
      type: DELETE_QUESTION_FAILURE,
      error: true,
    });
  }
}

function* watchDeleteQuestion() {
  yield takeLatest(DELETE_QUESTION_REQUEST, deleteQuestion);
}

export default function* question() {
  yield all([fork(watchReadQuestions), fork(watchDeleteQuestion)]);
}
