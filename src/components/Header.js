import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Button, makeStyles, Toolbar, Tooltip, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    title: {
      flex: 1,
      textDecoration: 'none',
    },
    toolbar: theme.mixins.toolbar,
  };
});

const Header = () => {
  const classes = useStyles();

  const onCreate = useCallback(() => {}, []);

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

          <Tooltip title="CREATE" arrow>
            <Button component={Link} to="/create" color="inherit" onClick={onCreate}>
              문제 생성
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <div className={classes.toolbar} />
    </>
  );
};

export default memo(Header);
