import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Avatar, Button, Card, CardActions, CardHeader, makeStyles } from '@material-ui/core';

import { LOGOUT_REQUEST } from '../redux/types';

const useStyles = makeStyles((theme) => {
  return {
    card: {
      margin: theme.spacing(2),
    },
    avatar: {
      backgroundColor: '#1976d2',
    },
    actions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  };
});

const Profile = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const classes = useStyles();

  const onClick = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  }, [dispatch]);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>{name[0]}</Avatar>}
        title={name}
        subheader="좋은 하루 보내세요~!"
      />

      <CardActions className={classes.actions}>
        <Button variant="contained" disableElevation size="small" color="primary" onClick={onClick}>
          LOGOUT
        </Button>
      </CardActions>
    </Card>
  );
};

export default memo(Profile);
