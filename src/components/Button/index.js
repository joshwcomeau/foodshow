import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

import { grey100 } from '../../style-variables';


const styles = StyleSheet.create({
  button: {
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

const Button = ({ mergeStyles, children, onClick, color }) => (
  <button
    className={css(styles.button, mergeStyles)}
    style={{
      color,
      borderColor: color,
    }}
  >
    {console.log(color)}
    {children}
  </button>
);

Button.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mergeStyles: PropTypes.object,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: grey100,
};


export default Button;
