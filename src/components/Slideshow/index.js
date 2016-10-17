import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

import { currentPhotoSelector } from '../../reducers/photos.reducer';
import { isActiveSelector } from '../../reducers/slideshow.reducer';
import { fetchPhotosRequest } from '../../actions';
import { sidebarWidth } from '../../style-variables';

import SlideshowPhoto from '../SlideshowPhoto';
import ProgressBar from '../ProgressBar';

const styles = StyleSheet.create({
  slideshow: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  photoContainer: {
    position: 'relative',
    zIndex: 1,
    flex: 1,
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },

  backdrop: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.125)',
    transition: 'opacity 1000ms',
  },
});

class Slideshow extends Component {
  render() {
    const { photo, progress, isActive, isSidebarVisible } = this.props;

    // Don't render until our initial photo has been fetched.
    if (!photo) {
      return null;
    }

    return (
      <div
        className={css(styles.slideshow)}
        style={{
          right: isSidebarVisible ? sidebarWidth : 0,
        }}
      >
        <ProgressBar {...{ isActive, progress }} />
        <div className={css(styles.photoContainer)}>
          <SlideshowPhoto photo={photo} />
        </div>

        <div
          className={css(styles.backdrop)}
          style={{ opacity: isActive ? 0 : 1 }}
        />
      </div>
    );
  }
}

Slideshow.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
  }),
  progress: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  isSidebarVisible: PropTypes.bool.isRequired,
  fetchPhotosRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  photo: currentPhotoSelector(state),
  progress: state.slideshow.progress,
  isActive: isActiveSelector(state),
  isSidebarVisible: state.ui.sidebar.isVisible,
});

export default connect(mapStateToProps, { fetchPhotosRequest })(Slideshow);
