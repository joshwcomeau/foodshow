import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

import { grey100, grey900 } from '../../style-variables';
import Icon from '../Icon';

const styles = StyleSheet.create({
  toggleButton: {
    position: 'relative',
    width: '30px',
    height: '30px',
    background: grey900,
    display: 'flex',
    border: 0,
    padding: 0,
    borderRadius: '30px 0 0 30px',
    cursor: 'pointer',
    outline: 'none',
  },
});

const SidebarToggleButton = ({ mergeStyles, isVisible, toggleSidebar }) => {
  return (
    <button
      className={css(styles.toggleButton, mergeStyles)}
      onClick={toggleSidebar}
    >
      <Icon
        value="caret_left"
        color={grey100}
        size={22}
        style={{
          display: 'block',
          transform: isVisible ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 500ms',
          transitionDelay: '300ms',
          transformOrigin: 'center center',
          marginTop: '2px',
          marginLeft: '3px',
        }}
      />
    </button>
  );
};

SidebarToggleButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mergeStyles: PropTypes.object,
  isVisible: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default SidebarToggleButton;
