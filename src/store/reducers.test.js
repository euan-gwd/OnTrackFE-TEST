import { bookReducer } from './reducers';
import * as actionTypes from './constants';

describe('bookReducers Tests', () => {
  test('Initial State', () => {
    const endState = {
      isLoading: false,
      error: null,
      books: [],
      itemsPerPage: 20,
      page: 1,
      totalRecords: 0
    };

    const newState = bookReducer(undefined, {});
    expect(newState).toEqual(endState);
  });

  test('GET_BOOKS_BEGIN', () => {
    const state = bookReducer(undefined, {});
    const endState = {
      isLoading: true,
      error: null,
      books: [],
      itemsPerPage: 20,
      page: 1,
      totalRecords: 0
    };
    const newState = bookReducer(state, {
      type: actionTypes.GET_BOOKS_BEGIN
    });

    expect(newState).toEqual(endState);
  });
});
