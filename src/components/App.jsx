import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../store/actions';
import ListGroup from 'react-bootstrap/ListGroup';

import Alert from 'react-bootstrap/Alert';
import Loader from './Loader';
import SearchBar from './SearchBar';
import PageItemsFilter from './PageItemsFilter';
import BookItem from './BookItem';
import PageNavBar from './PageNavBar';
import './App.scss';

class App extends Component {
  componentDidMount = () => {
    const { fetchBooks, page, itemsPerPage } = this.props;
    const pageOptions = { page, itemsPerPage, filters: [] };
    fetchBooks(pageOptions);
  };

  render() {
    const { books, isLoading, error } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return (
        <Alert variant="danger">
          <Alert.Heading>Oops, sorry things fell down</Alert.Heading>
          <p>{error.message}</p>
        </Alert>
      );
    }

    return (
      <div className="app-container">
        <h1 className="app-header">The Library</h1>

        <SearchBar />

        <PageItemsFilter />

        <ListGroup>
          {books.map(book => (
            <ListGroup.Item key={book.id}>
              <BookItem book={book} />
            </ListGroup.Item>
          ))}
        </ListGroup>

        <PageNavBar />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  isLoading: state.isLoading,
  error: state.error,
  page: state.page,
  itemsPerPage: state.itemsPerPage,
  filters: state.filters
});

const mapDispatchToProps = (dispatch, pageOptions) => ({
  fetchBooks: pageOptions => dispatch(getBooks(pageOptions))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
