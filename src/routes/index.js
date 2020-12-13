import React, { memo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import Login from '../components/Login';
import Header from '../components/Header';
import Profile from '../components/Profile';

import Questions from '../routes/Questions';
import Create from '../routes/Create';
import Replace from './Update';

const RootRouter = () => {
  return (
    <>
      <Login />

      <Header />
      <Grid container>
        <Grid item xs={12} sm={5} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={7} md={8} lg={9}>
          <Switch>
            <Route path="/" exact component={Questions} />
            <Route path="/create" exact component={Create} />
            <Route path="/replace/:id" exact component={Replace} />

            <Redirect from="*" to="/" />
          </Switch>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(RootRouter);
