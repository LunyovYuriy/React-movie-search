import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IMG_URL } from '../../../constants/general';

const ItemPoster = ({ id, poster }) => {
  return (
    <Link to={`/details/${id}`} className="poster-link">
      {poster ? (
        <img
          src={`${IMG_URL}${poster}`}
          alt={`${IMG_URL}${poster}`}
          className="poster-image"
        />
      ) : (
        <div className="no-photo">
          <p>No photo</p>
        </div>
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
