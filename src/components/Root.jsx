import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './App';

const history = createBrowserHistory();

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/:page?" component={App}></Route>
      </Router>
    </Provider>
  );
};

export default Root;
