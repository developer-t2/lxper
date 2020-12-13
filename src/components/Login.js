import React, { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@material-ui/core';
import { LOGIN_REQUEST } from '../redux/types';

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth, isError } = useSelector((state) => state.auth);

  const [userId, setUserId] = useState('');

  const onChange = useCallback((e) => {
    setUserId(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    dispatch({
      type: LOGIN_REQUEST,
      data: userId,
    });
  }, [dispatch, userId]);

  return (
    <Dialog open={!isAuth} maxWidth="xs" fullWidth>
      <DialogTitle disableTypography>
        <Typography variant="subtitle2">발급 받은 ID를 입력해주세요.</Typography>
      </DialogTitle>

      <DialogContent>
        <TextField
          variant="outlined"
          label="ID"
          size="small"
          fullWidth
          autoFocus
          onChange={onChange}
          error={isError}
          helperText={isError ? '발급 받은 ID를 다시 확인해주세요.' : ''}
        />
      </DialogContent>

      <DialogActions>
        <Button color="primary" onClick={onClick}>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(Login);
