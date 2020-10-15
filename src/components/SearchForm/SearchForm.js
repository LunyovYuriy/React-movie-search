import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { searchMovies, setQuery } from '../../actions/general';

const SearchForm = () => {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.general, shallowEqual);
  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(searchMovies(query));
        }}>
        <input
          type="text"
          name="query"
          className="input"
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          placeholder="Enter movie name"
        />
        <button type="submit" className="button" disabled={!query.length}>
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
