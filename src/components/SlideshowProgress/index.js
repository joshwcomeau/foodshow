import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

import { green } from '../../style-variables';
import { incrementSlide, decrementSlide } from '../../actions';


const styles = StyleSheet.create({
  progressBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    height: '5px',
    background: 'rgba(0,0,0,0.2)',
  },
  progressComplete: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    background: green,
  },
});

const SlideshowProgress = ({ progress }) => {
  return (
    <div className={css(styles.progressBarContainer)}>
      <div className={css(styles.progressBar)}>
        <div
          className={css(styles.progressComplete)}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

SlideshowProgress.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mergeStyles: PropTypes.object,
  progress: PropTypes.number.isRequired,
  incrementSlide: PropTypes.func.isRequired,
  decrementSlide: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  progress: state.slideshow.progress,
});

export default connect(
  mapStateToProps,
  { incrementSlide, decrementSlide }
)(SlideshowProgress);
