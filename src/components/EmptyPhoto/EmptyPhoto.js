import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const EmptyPhoto = ({ backdrop }) => {
  return (
    <div className={`no-photo ${backdrop && 'backdrop'}`}>
      <FontAwesomeIcon icon={faCamera} />
      <p>No photo</p>
    </div>
  );
};

EmptyPhoto.propTypes = {
  backdrop: PropTypes.bool,
};

EmptyPhoto.defaultProps = {
  backdrop: false,
};

export default EmptyPhoto;
