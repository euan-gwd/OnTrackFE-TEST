import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { bookReducer } from './reducers';
import { loadState, saveState } from './localStorage';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(bookReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

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

  return store;
};

export default configureStore;
