import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './redux/store';
import RootRouter from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RootRouter />
      </ConnectedRouter>
    </Provider>
  );
};

export default memo(App);
