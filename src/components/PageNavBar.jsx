import React from 'react';
import { connect } from 'react-redux';
import range from 'lodash/range';
import chunk from 'lodash/chunk';
import Pagination from 'react-bootstrap/Pagination';
import { getBooks } from '../store/actions';
import { useHistory } from 'react-router-dom';

export const PageNavBar = ({ dispatch, totalRecords, page, itemsPerPage }) => {
  let history = useHistory();
  const pageLimit = 20;
  const totalPages = Math.ceil(totalRecords / pageLimit);
  const pageRanges = range(1, totalPages);
  const pagesChunks = chunk(pageRanges, pageLimit);
  const [displayRanges] = pagesChunks.filter(item => item.includes(page));

  const handlePageChange = pg => {
    const pageOptions = {
      page: pg,
      itemsPerPage: itemsPerPage
    };
    dispatch(getBooks(pageOptions));
    history.push(`/${pg}`);
  };

  const handleNext = () => {
    const pageOptions = {
      page: page + displayRanges.length,
      itemsPerPage: itemsPerPage
    };
    dispatch(getBooks(pageOptions));
    history.push(`/${pageOptions.page}`);
  };

  const handlePrev = () => {
    let newStartIndex = Number(page - pageLimit);
    if (newStartIndex < 0) {
      newStartIndex = 1;
    }
    const pageOptions = {
      page: newStartIndex,
      itemsPerPage: itemsPerPage
    };
    dispatch(getBooks(pageOptions));
    history.push(`/${pageOptions.page}`);
  };

  return (
    <Pagination>
      <Pagination.First
        onClick={() => handlePageChange(1)}
        disabled={page <= 1}
      />
      <Pagination.Prev disabled={page <= 1} onClick={() => handlePrev()} />
      {displayRanges.map(pg => (
        <Pagination.Item
          key={pg}
          active={pg === page}
          onClick={() => handlePageChange(pg)}
          to={`/${pg}`}
        >
          {pg}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => handleNext()}
        disabled={page === totalPages - 1}
      />
      <Pagination.Last
        onClick={() => handlePageChange(totalPages - 1)}
        disabled={page === totalPages - 1}
      />
    </Pagination>
  );
};

const mapStateToProps = state => ({
  totalRecords: state.totalRecords,
  page: state.page,
  itemsPerPage: state.itemsPerPage
});

export default connect(mapStateToProps)(PageNavBar);
