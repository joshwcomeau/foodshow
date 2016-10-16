import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

import { green, slideshowControlsHeight } from '../../style-variables';
import { incrementSlide, decrementSlide } from '../../actions';


const styles = StyleSheet.create({
  progressBarContainer: {
    position: 'relative',
    height: slideshowControlsHeight,
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
    overflow: 'hidden',
  },
  progressComplete: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: green,
    transformOrigin: 'left center',
  },
});

const SlideshowProgress = ({ mergeStyles, progress }) => {
  return (
    <div className={css(styles.progressBarContainer, mergeStyles)}>
      <div className={css(styles.progressBar)}>
        <div
          className={css(styles.progressComplete)}
          style={{ transform: `translateX(${progress - 100}%)` }}
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
