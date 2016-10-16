import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

import { pauseSlideshow, resumeSlideshow } from '../../actions';
import { currentPhotographerSelector } from '../../reducers/users.reducer';
import { isActiveSelector } from '../../reducers/slideshow.reducer';
import { grey100 } from '../../style-variables';


const styles = StyleSheet.create({
  photoContainer: {
    position: 'absolute',
    top: '50px',
    left: '50px',
    right: '50px',
    bottom: '50px',
  },
  photo: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    height: '100%',
    display: 'block',
    border: '6px solid #FFF',
    borderRadius: 3,
    boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  photoInfo: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.3))',
    border: '6px solid #E3E3E3',
    borderRadius: 3,
    transition: 'opacity 1500ms',
  },
});

const SlideshowPhoto = ({
  mergeStyles,
  photo,
  user,
  isActive,
  pauseSlideshow,
  resumeSlideshow,
}) => {
  return (
    <div
      className={css(styles.photoContainer, mergeStyles)}
      onMouseEnter={pauseSlideshow}
      onMouseLeave={resumeSlideshow}
    >
      <div
        className={css(styles.photo)}
        style={{ backgroundImage: `url(${photo.urls.regular})` }}
      />

      <div
        className={css(styles.photoInfo)}
        style={{ opacity: isActive ? 0 : 1 }}
      >
        <div className={css(styles.backdrop)} />
      </div>
    </div>
  );
};

SlideshowPhoto.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mergeStyles: PropTypes.object,
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
  }),
  user: PropTypes.shape({}),
  isActive: PropTypes.bool.isRequired,
  pauseSlideshow: PropTypes.func.isRequired,
  resumeSlideshow: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: currentPhotographerSelector(state),
  isActive: isActiveSelector(state),
});

export default connect(
  mapStateToProps,
  { pauseSlideshow, resumeSlideshow }
)(SlideshowPhoto);
