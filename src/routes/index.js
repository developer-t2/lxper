import React, { memo } from 'react';

import Login from '../components/Login';
import Header from '../components/Header';

const RootRouter = () => {
  return (
    <>
      <Login />

      <Header />
    </>
  );
};

export default memo(RootRouter);
