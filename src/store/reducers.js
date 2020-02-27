import * as actionTypes from './constants';

const initialState = {
  page: 1,
  itemsPerPage: 20,
  isLoading: false,
  error: null,
  books: [],
  totalRecords: 0
};

export function bookReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_BOOKS_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actionTypes.GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload.books,
        totalRecords: action.payload.count,
        page: action.payload.page,
        itemsPerPage: action.payload.itemsPerPage,
        isLoading: false,
        error: null
      };
    case actionTypes.GET_BOOKS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        books: [],
        isLoading: false
      };
    default:
      return state;
  }
}
