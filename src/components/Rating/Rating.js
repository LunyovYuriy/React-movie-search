import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
  const popularityMark = (rating / 10) * 100;
  let color = '#870000';
  if (popularityMark >= 50 && popularityMark <= 100) {
    color = '#00e676';
  } else if (popularityMark >= 30 && popularityMark <= 50) {
    color = '#c8b900';
  }
  const ratingFill = {
    backgroundColor: color,
    width: popularityMark,
  };

  return rating !== 0 ? (
    <>
      <p className="info-text">
        <span>Rating:</span>
      </p>
      <div className="rating-container">
        <div className="rating">
          <div style={ratingFill} className="rating-fill" />
        </div>
        <p>{rating}</p>
      </div>
    </>
  ) : (
    <p className="info-text">
      <span>No rating </span>
    </p>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
