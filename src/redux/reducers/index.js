import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import question from './question';

const rootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    auth,
    question,
  });
};

export default rootReducer;
