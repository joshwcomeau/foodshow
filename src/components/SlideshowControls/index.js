import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

import { grey300 } from '../../style-variables';
import { incrementSlide, decrementSlide } from '../../actions';

import SlideshowProgress from '../SlideshowProgress';


const styles = StyleSheet.create({
  controlsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: grey300,
    display: 'flex',
  },
  progressBar: {
    flex: 1,
  },
});

const SlideshowControls = ({ mergeStyles, incrementSlide, decrementSlide }) => {
  return (
    <div className={css(styles.controlsContainer, mergeStyles)}>
      <SlideshowProgress mergeStyles={styles.progressBar} />
    </div>
  );
};

SlideshowControls.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mergeStyles: PropTypes.object,
  incrementSlide: PropTypes.func.isRequired,
  decrementSlide: PropTypes.func.isRequired,
};

export default connect(
  null,
  { incrementSlide, decrementSlide }
)(SlideshowControls);
