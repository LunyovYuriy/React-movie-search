import React from 'react';
import { batch, shallowEqual, useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { searchMovies, setGeneralValue } from '../../actions/general';

const Pagination = () => {
  const dispatch = useDispatch();
  const { totalPages, query, pageNumber } = useSelector(
    (state) => state.general,
    shallowEqual,
  );
  return (
    totalPages > 1 && (
      <ReactPaginate
        forcePage={pageNumber}
        pageCount={totalPages}
        previousLabel="<<"
        nextLabel=">>"
        containerClassName="pagination-container"
        pageLinkClassName="pagination-page"
        pageClassName="pagination-list"
        breakLinkClassName="pagination-page"
        breakClassName="pagination-list"
        previousLinkClassName="pagination-page"
        previousClassName="pagination-list"
        nextLinkClassName="pagination-page"
        nextClassName="pagination-list"
        disabledClassName="pagination-disabled"
        activeLinkClassName="pagination-active-link"
        onPageChange={({ selected }) => {
          batch(() => {
            dispatch(searchMovies(query, selected + 1));
            dispatch(setGeneralValue('pageNumber', selected));
          });
        }}
      />
    )
  );
};

export default Pagination;
