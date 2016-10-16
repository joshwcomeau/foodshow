import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

import { green } from '../../style-variables';


const styles = StyleSheet.create({
  progressBar: {
    position: 'relative',
    height: '5px',
    overflow: 'hidden',
  },
  progressComplete: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transformOrigin: 'left center',
  },
});

const ProgressBar = ({ mergeStyles, progress, barColor, backgroundColor }) => {
  return (
    <div
      className={css(styles.progressBar, mergeStyles)}
      style={{ backgroundColor }}
    >
      <div
        className={css(styles.progressComplete)}
        style={{
          transform: `translateX(${progress - 100}%)`,
          backgroundColor: barColor,
        }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mergeStyles: PropTypes.object,
  progress: PropTypes.number.isRequired,
  barColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

ProgressBar.defaultProps = {
  barColor: green,
  backgroundColor: 'transparent',
};

export default ProgressBar;
