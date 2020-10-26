import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EmptyPhoto from '../../../../../components/EmptyPhoto/EmptyPhoto';
import { IMG_URL } from '../../../../../constants/general';

const ItemPoster = ({ id, poster }) => {
  return (
    <Link to={`/React-movie-search/details/${id}`} className="poster-link">
      {poster ? (
        <img
          src={`${IMG_URL}${poster}`}
          alt={`${IMG_URL}${poster}`}
          className="poster-image"
        />
      ) : (
        <EmptyPhoto />
      )}
    </Link>
  );
};

ItemPoster.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
};

ItemPoster.defaultProps = {
  poster: '',
};

export default ItemPoster;
