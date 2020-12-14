const {
  READ_QUESTIONS_REQUEST,
  READ_QUESTIONS_SUCCESS,
  READ_QUESTIONS_FAILURE,
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE,
  CREATE_QUESTION_REQUEST,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE,
  UPDATE_QUESTION_REQUEST,
  UPDATE_QUESTION_SUCCESS,
  UPDATE_QUESTION_FAILURE,
  SEARCH_QUESTION_REQUEST,
  SEARCH_QUESTION_SUCCESS,
  SEARCH_QUESTION_FAILURE,
} = require('../types');

const initialState = {
  questions: [],
  isLoading: false,
  isError: false,
};

const question = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_QUESTION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CREATE_QUESTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case READ_QUESTIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case READ_QUESTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        questions: action.data,
      };
    case READ_QUESTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case UPDATE_QUESTION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case UPDATE_QUESTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_QUESTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case DELETE_QUESTION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case DELETE_QUESTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case SEARCH_QUESTION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case SEARCH_QUESTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        question: action.data,
      };
    case SEARCH_QUESTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default question;
