import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { searchMovies, setQuery } from '../../actions/general';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { query } = useSelector((state) => state.general, shallowEqual);
  return (
    <header>
      <Link to="/" className="logo">
        <FontAwesomeIcon icon={faFilm} />
        <h1>React Movie Search</h1>
      </Link>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(searchMovies(query));
          history.push('/');
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
    </header>
  );
};

export default Header;
