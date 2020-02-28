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
  const [displayRanges] = pagesChunks.filter((item) => item.includes(page));
  const hasPages = displayRanges !== undefined ? displayRanges : false;

  const handlePageChange = (pg) => {
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
    <>
      {hasPages ? (
        <Pagination>
          <Pagination.First onClick={() => handlePageChange(1)} disabled={page <= 1} />
          <Pagination.Prev disabled={page <= 1} onClick={() => handlePrev()} />
          {displayRanges.map((pg) => (
            <Pagination.Item key={pg} active={pg === page} onClick={() => handlePageChange(pg)} to={`/${pg}`}>
              {pg}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handleNext()} disabled={page === totalPages - 1} />
          <Pagination.Last onClick={() => handlePageChange(totalPages - 1)} disabled={page === totalPages - 1} />
        </Pagination>
      ) : (
        <Pagination>
          <Pagination.First disabled />
          <Pagination.Prev disabled />
          <Pagination.Item active={1} onClick={() => handlePageChange(1)} to={`/${1}`}>
            Show All
          </Pagination.Item>
          <Pagination.Next disabled />
          <Pagination.Last disabled />
        </Pagination>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  totalRecords: state.totalRecords,
  page: state.page,
  itemsPerPage: state.itemsPerPage
});

export default connect(mapStateToProps)(PageNavBar);
