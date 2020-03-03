import React from 'react';
import { render } from '@testing-library/react';
import BookItem from './BookItem';

test('renders as expected', () => {
  const book = {
    id: 1,
    book_author: ['mocked'],
    book_title: 'mocked',
    book_publication_year: 2020,
    book_publication_country: 'mocked',
    book_publication_city: 'mocked',
    book_pages: 104
  };

  const comp = render(<BookItem book={book} />);
  expect(comp).toMatchSnapshot();
});
