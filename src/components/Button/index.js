import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

import { grey100 } from '../../style-variables';


const styles = StyleSheet.create({
  button: {
    display: 'inline-block',
    border: '1px solid',
    background: 'transparent',
    borderRadius: '4px',
    padding: '8px 30px',
    cursor: 'pointer',
    fontWeight: 'bold',

    ':hover': {
      background: 'rgba(255,255,255,0.1)',
    },
  },
});

const Button = ({ mergeStyles, children, onClick, href, target, color }) => (
  React.createElement(
    !!href ? 'a' : 'button',
    {
      className: css(styles.button, mergeStyles),
      onClick,
      href,
      target: !!href && target,
      style: {
        color,
        borderColor: color,
      },
    },
    children
  )
);

Button.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mergeStyles: PropTypes.object,
  children: PropTypes.node,
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_blank', '_self']),
  color: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: grey100,
  target: '_blank',
};


export default Button;
