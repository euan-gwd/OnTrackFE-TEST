import React from 'react';
import { shallow } from 'enzyme';
import { initialState } from '../store/reducers';
import { App } from './App';

describe('App', () => {
  test('renders with books', () => {
    const props = {
      page: 1,
      itemsPerPage: 20,
      isLoading: false,
      error: null,
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
      totalRecords: 0,
      fetchBooks: jest.fn().mockReturnValue()
    };

    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders with no books error', () => {
    const props = {
      ...initialState,
      fetchBooks: jest.fn().mockReturnValue()
    };

    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
