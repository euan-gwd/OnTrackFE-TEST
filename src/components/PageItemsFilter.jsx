import React from 'react';
import { connect } from 'react-redux';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { getBooks } from '../store/actions';
import { useHistory } from 'react-router-dom';

const PageItemsFilter = ({ dispatch, totalRecords, page, itemsPerPage }) => {
  let history = useHistory();

  const handleItemsPerPageChange = newItemsPerPage => {
    const pageOptions = {
      page: page,
      itemsPerPage: Number(newItemsPerPage)
    };
    dispatch(getBooks(pageOptions));
    history.push(`/${page}`);
  };

  return (
    <ButtonToolbar className="justify-content-end">
      <div></div>
      <ButtonGroup size="sm">
        <Button variant="outline-secondary" disabled>
          Items Per Page
        </Button>
        <Button
          variant="secondary"
          onClick={() => handleItemsPerPageChange(20)}
        >
          20
        </Button>
        <Button
          variant="secondary"
          onClick={() => handleItemsPerPageChange(50)}
        >
          50
        </Button>
        <Button
          variant="secondary"
          onClick={() => handleItemsPerPageChange(75)}
        >
          75
        </Button>
        <Button
          variant="secondary"
          onClick={() => handleItemsPerPageChange(100)}
        >
          100
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
};

const mapStateToProps = state => ({
  totalRecords: state.totalRecords,
  page: state.page,
  itemsPerPage: state.itemsPerPage
});

export default connect(mapStateToProps)(PageItemsFilter);
