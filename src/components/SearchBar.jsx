import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../store/actions';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export const SearchBar = ({ dispatch, page, itemsPerPage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const pageOptions = {
      page: page,
      itemsPerPage: itemsPerPage,
      filters: [{ type: 'all', values: [searchTerm] }]
    };

    dispatch(getBooks(pageOptions));
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <InputGroup size="sm" className="mb-3">
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <InputGroup.Append>
          <Button id="inputGroup-sizing-sm" variant="primary" type="submit">
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  page: state.page,
  itemsPerPage: state.itemsPerPage
});

export default connect(mapStateToProps)(SearchBar);
