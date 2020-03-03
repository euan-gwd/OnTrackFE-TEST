import mockAxios from 'axios';
import { getBooks } from './actions';
import * as actionTypes from './constants';

describe('getBooks tests', () => {
  test('dispatches GET_BOOKS_BEGIN action', async () => {
    const result = {
      books: [
        {
          id: 1,
          book_author: ['mocked'],
          book_title: 'mocked',
          book_publication_year: 2020,
          book_publication_country: 'mocked',
          book_publication_city: 'mocked',
          book_pages: 104
        }
      ],
      count: 1234,
      page: 1
    };

    mockAxios.post.mockImplementation(() =>
      Promise.resolve({
        data: result
      })
    );

    const dispatch = jest.fn();

    await getBooks()(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.GET_BOOKS_BEGIN
    });
  });

  test('dispatches GET_BOOKS_SUCCESS action and returns data on success', async () => {
    const result = {
      books: [
        {
          id: 1,
          book_author: ['mocked'],
          book_title: 'mocked',
          book_publication_year: 2020,
          book_publication_country: 'mocked',
          book_publication_city: 'mocked',
          book_pages: 104
        }
      ],
      count: 1234,
      page: 1,
      itemsPerPage: 20
    };

    mockAxios.post.mockImplementation(() =>
      Promise.resolve({
        data: result
      })
    );

    const dispatch = jest.fn();
    const pageOptions = { page: 1, itemsPerPage: 20 };

    await getBooks(pageOptions)(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.GET_BOOKS_BEGIN
    });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: actionTypes.GET_BOOKS_SUCCESS,
      payload: result
    });
  });

  test('dispatches GET_BOOKS_ERROR action on error', async () => {
    const error = {
      error: {
        message: 'fetch failed'
      }
    };

    mockAxios.post.mockImplementation(() =>
      Promise.reject({
        message: 'fetch failed'
      })
    );

    const dispatch = jest.fn();

    await getBooks()(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.GET_BOOKS_BEGIN
    });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: actionTypes.GET_BOOKS_ERROR,
      payload: error
    });
  });
});
