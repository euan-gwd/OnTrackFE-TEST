import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { bookReducer } from './reducers';
import { loadState } from './localStorage';
import thunk from 'redux-thunk';

const persistedState = loadState();

const store = createStore(
  bookReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
