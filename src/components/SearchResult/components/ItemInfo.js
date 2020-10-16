import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from '../../Rating/Rating';

const ItemInfo = ({ id, title, releaseDate, voteAverage, overview }) => {
  let shortInfo = '';

  if (overview.split('.')[0].length > 150) {
    shortInfo = `${overview.split('.')[0].slice(0, 150)}...`;
  } else {
    shortInfo = `${overview.split('.')[0]}${
      overview?.split('.')[1] && `. ${overview.split('.')[1]}`
    }...`;
  }

  return (
    <div className="search-item-info">
      <Link to={`/details/${id}`}>
        <h1>{title}</h1>
      </Link>
      <div className="info-container">
        <p className="info-text">
          <span>Release date: </span>
          {releaseDate}
        </p>
        <Rating rating={voteAverage} />
        <p>{overview.length ? shortInfo : 'No description'}</p>
      </div>
      <Link to={`/details/${id}`} className="button read-more-btn">
        Read more
      </Link>
    </div>
  );
};

ItemInfo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  voteAverage: PropTypes.number,
  overview: PropTypes.string,
};

ItemInfo.defaultProps = {
  releaseDate: '',
  voteAverage: 0,
  overview: '',
};

export default ItemInfo;
