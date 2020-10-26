import React from 'react';
import PropTypes from 'prop-types';
import { faFrown, faStar } from '@fortawesome/free-solid-svg-icons';
import InfoText from '../InfoText/InfoText';

const Rating = ({ rating }) => {
  const popularityMark = (rating / 10) * 200;
  let color = '#870000';
  if (popularityMark >= 100 && popularityMark <= 200) {
    color = '#00e676';
  } else if (popularityMark >= 50 && popularityMark <= 100) {
    color = '#c8b900';
  }
  const ratingFill = {
    backgroundColor: color,
    width: popularityMark,
  };

  return rating !== 0 ? (
    <>
      <InfoText label="Rating:" icon={faStar} />
      <div className="rating-container">
        <div className="rating">
          <div style={ratingFill} className="rating-fill" />
        </div>
        <p>{rating}</p>
      </div>
    </>
  ) : (
    <InfoText label="No rating" icon={faFrown} />
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
