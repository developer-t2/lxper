import store from '../redux/store';
import { USER_CHECK_REQUEST } from '../redux/types';

const userCheck = () => {
  store.dispatch({
    type: USER_CHECK_REQUEST,
    data: localStorage.getItem('token'),
  });
};

export default userCheck;
