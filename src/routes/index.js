import React, { memo } from 'react';

import { Grid } from '@material-ui/core';

import Login from '../components/Login';
import Header from '../components/Header';
import Profile from '../components/Profile';

const RootRouter = () => {
  return (
    <>
      <Login />

      <Header />
      <Grid container>
        <Grid item xs={12} sm={4} md={3}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          중앙
        </Grid>
      </Grid>
    </>
  );
};

export default memo(RootRouter);
