import React, { PropTypes } from 'react';

import { grey100 } from '../../style-variables';

import Button from '../Button';
import Icon from '../Icon';


const IconButton = ({ iconName, iconColor, iconSize, ...buttonProps }) => (
  <Button {...buttonProps}>
    <Icon value={iconName} size={iconSize} color={iconColor} />
  </Button>
);

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
};

IconButton.defaultProps = {
  iconColor: grey100,
};


export default IconButton;
