import React from 'react';

const BookItem = ({ book }) => (
  <div>
    <p>
      Title: <span>{book.book_title}</span>
    </p>
    <p>
      Author(s):
      <span>
        {book.book_author.map((author, idx) => (
          <span key={idx}>{` ${author} `}</span>
        ))}
      </span>
    </p>
    <p>
      Publication year: <span>{book.book_publication_year}</span>
    </p>
    <p>
      Publication country : <span>{book.book_publication_country}</span>
    </p>
    <p>
      Publication city : <span>{book.book_publication_city}</span>
    </p>
    <p>
      Total pages: <span>{book.book_pages}</span>
    </p>
    <p>
      Id: <span>{book.id} </span>
    </p>
  </div>
);

export default BookItem;
