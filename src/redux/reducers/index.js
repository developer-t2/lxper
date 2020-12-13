import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';

const rootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    auth,
  });
};

export default rootReducer;
