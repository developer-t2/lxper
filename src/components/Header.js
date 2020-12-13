import React, { memo, useCallback } from 'react';

import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { LOGOUT_REQUEST } from '../redux/types';

const useStyles = makeStyles((theme) => {
  return {
    menu: {
      marginRight: theme.spacing(2),
    },
    title: {
      flex: 1,
    },
  };
});

const Header = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const onClick = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  }, [dispatch]);

  return (
    <AppBar>
      <Toolbar>
        <IconButton className={classes.menu} edge="start" color="inherit">
          <Menu />
        </IconButton>

        <Typography className={classes.title} variant="h6">
          LXPER
        </Typography>

        <Button color="inherit" onClick={onClick}>
          LOGOUT
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Header);
