/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react';

import { grey900 } from '../../style-variables';
import iconMap from '../../utils/icon-map.utils';


const Icon = ({ value, size, color }) => {
  const divStyles = {
    display: 'inline-block',
  };

  const IconComponent = iconMap[value];

  if (size) { divStyles.width = `${size}px`; }

  return (
    <div style={divStyles} className="icon">
      <IconComponent fill={color} />
    </div>
  );
};

Icon.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 24,
  color: grey900,
};

export default Icon;
