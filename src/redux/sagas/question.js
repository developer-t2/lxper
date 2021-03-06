import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import {
  CREATE_QUESTION_FAILURE,
  CREATE_QUESTION_REQUEST,
  CREATE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE,
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESS,
  READ_QUESTIONS_FAILURE,
  READ_QUESTIONS_REQUEST,
  READ_QUESTIONS_SUCCESS,
  SEARCH_QUESTION_FAILURE,
  SEARCH_QUESTION_REQUEST,
  SEARCH_QUESTION_SUCCESS,
  UPDATE_QUESTION_FAILURE,
  UPDATE_QUESTION_REQUEST,
  UPDATE_QUESTION_SUCCESS,
} from '../types';

// create question
const createQuestionAPI = (data) => {
  const config = {
    headers: {
      Auth: localStorage.getItem('token'),
    },
  };

  return axios.post('api/questions', data, config);
};

function* createQuestion(action) {
  try {
    const result = yield call(createQuestionAPI, action.data);

    yield put({
      type: CREATE_QUESTION_SUCCESS,
      data: result.data,
    });

    yield put({
      type: READ_QUESTIONS_REQUEST,
    });
  } catch (err) {
    console.error(err);

    yield put({
      type: CREATE_QUESTION_FAILURE,
      error: true,
    });
  }
}

function* watchCreateQuestion() {
  yield takeLatest(CREATE_QUESTION_REQUEST, createQuestion);
}

// read question
const readQuestionsAPI = () => {
  const config = {
    headers: {
      Auth: localStorage.getItem('token'),
    },
  };

  return axios.get('api/questions', config);
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

// update question
const updateQuestionAPI = (data) => {
  const config = {
    headers: {
      Auth: localStorage.getItem('token'),
    },
  };

  return axios.post(`api/questions/${data.id}`, data, config);
};

function* updateQuestion(action) {
  try {
    const result = yield call(updateQuestionAPI, action.data);

    yield put({
      type: UPDATE_QUESTION_SUCCESS,
      data: result.data,
    });

    yield put({
      type: READ_QUESTIONS_REQUEST,
    });
  } catch (err) {
    console.error(err);

    yield put({
      type: UPDATE_QUESTION_FAILURE,
      error: true,
    });
  }
}

function* watchUpdateQuestion() {
  yield takeLatest(UPDATE_QUESTION_REQUEST, updateQuestion);
}

// delete question
const deleteQuestionAPI = (id) => {
  const config = {
    headers: {
      Auth: localStorage.getItem('token'),
    },
  };

  return axios.delete(`api/questions/${id}`, config);
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

// search question
const searchQuestionAPI = (id) => {
  const config = {
    headers: {
      Auth: localStorage.getItem('token'),
    },
  };

  return axios.get(`api/questions/${id}`, config);
};

function* searchQuestion(action) {
  try {
    const result = yield call(searchQuestionAPI, action.data);

    yield put({
      type: SEARCH_QUESTION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);

    yield put({
      type: SEARCH_QUESTION_FAILURE,
      error: true,
    });
  }
}

function* watchSearchQuestion() {
  yield takeLatest(SEARCH_QUESTION_REQUEST, searchQuestion);
}

export default function* question() {
  yield all([
    fork(watchCreateQuestion),
    fork(watchReadQuestions),
    fork(watchUpdateQuestion),
    fork(watchDeleteQuestion),
    fork(watchSearchQuestion),
  ]);
}
