import axios from 'axios';
import * as actionTypes from './constants';

export function getBooks(pageOptions) {
  return (dispatch, getState) => {
    dispatch({ type: actionTypes.GET_BOOKS_BEGIN });
    return axios
      .post(`http://nyx.vima.ekt.gr:3000/api/books/`, pageOptions)
      .then(res => {
        dispatch({
          type: actionTypes.GET_BOOKS_SUCCESS,
          payload: {
            books: res.data.books,
            count: res.data.count,
            page: pageOptions.page,
            itemsPerPage: pageOptions.itemsPerPage
          }
        });
      })
      .catch(error =>
        dispatch({
          type: actionTypes.GET_BOOKS_ERROR,
          payload: {
            error
          }
        })
      );
  };
}
