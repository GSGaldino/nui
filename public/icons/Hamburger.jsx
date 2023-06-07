import React from 'react';
import PropTypes from 'prop-types';

function Hamburger({ color }) {
  return (
    <svg width="51" height="29" viewBox="0 0 51 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="51" height="7" rx="3.5" fill={color} />
      <rect y="11" width="51" height="7" rx="3.5" fill={color} />
      <rect y="22" width="51" height="7" rx="3.5" fill={color} />
    </svg>
  );
}

Hamburger.propTypes = {
  color: PropTypes.string,
};

Hamburger.defaultProps = {
  color: '#0A0A0A',
};

export default Hamburger;
