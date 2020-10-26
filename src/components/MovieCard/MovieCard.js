import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IMG_URL } from '../../constants/general';

const MovieCard = ({ title, poster, id }) => {
  return (
    <Link to={`/details/${id}`} className="movie-card">
      <h1>{title}</h1>
      <img src={`${IMG_URL}${poster}`} alt={poster} />
    </Link>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MovieCard;
