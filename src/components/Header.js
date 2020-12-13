import React, { memo } from 'react';

import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const useStyles = makeStyles((theme) => {
  return {
    menu: {
      marginRight: theme.spacing(2),
    },
    title: {
      flex: 1,
    },
    toolbar: theme.mixins.toolbar,
  };
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton className={classes.menu} edge="start" color="inherit">
            <Menu />
          </IconButton>

          <Typography className={classes.title} variant="h6">
            LXPER
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.toolbar} />
    </>
  );
};

export default memo(Header);
