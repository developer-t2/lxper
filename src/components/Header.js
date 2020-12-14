import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  AppBar,
  Button,
  fade,
  InputBase,
  makeStyles,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { SEARCH_QUESTION_REQUEST } from '../redux/types';
import { history } from '../redux/store';

const useStyles = makeStyles((theme) => {
  return {
    title: {
      flex: 1,
      textDecoration: 'none',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),

      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },

      marginRight: theme.spacing(2),
      display: 'none',

      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        display: 'block',
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'none',

      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      display: 'none',

      [theme.breakpoints.up('sm')]: {
        display: 'block',
        width: '35ch',
      },
    },
    toolbar: theme.mixins.toolbar,
  };
});

const Header = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const onKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        dispatch({
          type: SEARCH_QUESTION_REQUEST,
          data: e.target.value,
        });

        history.push(`/search/${e.target.value}`);
      }
    },
    [dispatch]
  );

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            component={Link}
            to="/"
          >
            LXPER
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="문제 아이디를 입력하세요."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onKeyDown={onKeyDown}
            />
          </div>

          <Tooltip title="CREATE" arrow>
            <Button component={Link} to="/create" color="inherit">
              문제생성
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <div className={classes.toolbar} />
    </>
  );
};

export default memo(Header);
