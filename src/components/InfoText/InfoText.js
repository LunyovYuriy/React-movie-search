import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoText = ({ label, text, icon }) => {
  return (
    <div className="info-container">
      {icon && (
        <div className="info-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      <p className="info-text">
        <span>{label} </span>
        {text}
      </p>
    </div>
  );
};

InfoText.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
    .isRequired,
  text: PropTypes.string,
  icon: PropTypes.shape({}),
};

InfoText.defaultProps = {
  text: '',
  icon: {},
};

export default InfoText;
