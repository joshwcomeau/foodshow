import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

import { pauseSlideshow, resumeSlideshow } from '../../actions';
import { currentPhotographerSelector } from '../../reducers/users.reducer';


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
    width: '100%',
    height: '100%',
    display: 'block',
    borderRadius: 10,
    boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
});

const SlideshowPhoto = ({
  mergeStyles,
  photo,
  user,
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
  pauseSlideshow: PropTypes.func.isRequired,
  resumeSlideshow: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: currentPhotographerSelector(state),
});

export default connect(
  mapStateToProps,
  { pauseSlideshow, resumeSlideshow }
)(SlideshowPhoto);
