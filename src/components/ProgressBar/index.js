import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

import { green, grey300 } from '../../style-variables';


const styles = StyleSheet.create({
  progressContainer: {
    position: 'relative',
    height: '5px',
    overflow: 'hidden',
  },
  progress: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transformOrigin: 'left center',
    transition: 'opacity 2000ms',
  },
});

const ProgressBar = ({
  mergeStyles,
  progress,
  isActive,
  barColorActive,
  barColorPaused,
  backgroundColor,
}) => {
  return (
    <div
      className={css(styles.progressContainer, mergeStyles)}
      style={{ backgroundColor }}
    >
      <div
        className={css(styles.progress, styles.active)}
        style={{
          transform: `translateX(${progress - 100}%)`,
          backgroundColor: barColorActive,
        }}
      />
      <div
        className={css(styles.progress, styles.inactive)}
        style={{
          transform: `translateX(${progress - 100}%)`,
          backgroundColor: barColorPaused,
          opacity: isActive ? 0 : 1,
        }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mergeStyles: PropTypes.object,
  progress: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  barColorActive: PropTypes.string,
  barColorPaused: PropTypes.string,
  backgroundColor: PropTypes.string,
};

ProgressBar.defaultProps = {
  barColorActive: green,
  barColorPaused: grey300,
  backgroundColor: 'transparent',
};

export default ProgressBar;
