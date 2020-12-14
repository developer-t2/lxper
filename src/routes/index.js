import React, { memo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import Login from '../components/Login';
import Header from '../components/Header';
import Profile from '../components/Profile';

import Questions from './Questions';
import Create from './Create';
import Update from './Update';
import Search from './Search';

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
            <Route path="/update/:id" exact component={Update} />
            <Route path="/search/:id" exact component={Search} />

            <Redirect from="*" to="/" />
          </Switch>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(RootRouter);
