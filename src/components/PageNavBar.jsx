import React from 'react';
import { connect } from 'react-redux';
import _range from 'lodash/range';
import Pagination from 'react-bootstrap/Pagination';
import { getBooks } from '../store/actions';
import { useHistory } from 'react-router-dom';

const PageNavBar = ({
  dispatch,
  totalRecords,
  page,
  itemsPerPage,
  action,
  pathname
}) => {
  let history = useHistory();
  const totalPages = Math.ceil(totalRecords / itemsPerPage);
  const pageRanges = _range(1, totalPages);

  const handlePageChange = pg => {
    const pageOptions = {
      page: pg,
      itemsPerPage: itemsPerPage
    };
    dispatch(getBooks(pageOptions));
    history.push(`/${pg}`);
  };

  return (
    <Pagination>
      {pageRanges.map(pg => (
        <Pagination.Item
          key={pg}
          active={pg === page}
          onClick={() => handlePageChange(pg)}
          to={`/${pg}`}
        >
          {pg}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

const mapStateToProps = state => ({
  totalRecords: state.totalRecords,
  page: state.page,
  itemsPerPage: state.itemsPerPage
});

export default connect(mapStateToProps)(PageNavBar);
