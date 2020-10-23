import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, icon }) => {
  return (
    <div className="main-section-title">
      {icon && <FontAwesomeIcon icon={icon} />}
      <h1>{title}</h1>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.shape({}).isRequired,
};

export default SectionTitle;
