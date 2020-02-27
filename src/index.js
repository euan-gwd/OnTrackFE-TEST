import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import throttle from 'lodash/throttle';
import store from './store/store';
import { createBrowserHistory } from 'history';
import { saveState } from './store/localStorage';

const history = createBrowserHistory();

store.subscribe(
  throttle(() => {
    saveState({
      page: store.getState().page,
      itemsPerPage: store.getState().itemsPerPage,
      books: store.getState().books,
      totalRecords: store.getState().totalRecords
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/:page?" component={App}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
