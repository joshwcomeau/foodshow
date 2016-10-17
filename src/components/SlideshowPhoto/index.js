import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

import {
  pauseSlideshow,
  resumeSlideshow,
  likePhotoRequest,
  unlikePhotoRequest,
} from '../../actions';
import { currentPhotographerSelector } from '../../reducers/users.reducer';
import { isActiveSelector } from '../../reducers/slideshow.reducer';
import { red } from '../../style-variables';

import UserAttribution from '../UserAttribution';
import IconButton from '../IconButton';


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
    transition: 'opacity 500ms',
  },

  photographer: {
    position: 'absolute',
    top: '25px',
    left: '25px',
  },

  likeButton: {
    position: 'absolute',
    top: '25px',
    right: '25px',
  },
});

const SlideshowPhoto = ({
  mergeStyles,
  photo,
  user,
  isActive,
  pauseSlideshow,
  resumeSlideshow,
  likePhotoRequest,
  unlikePhotoRequest,
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
        <UserAttribution
          name={user.name}
          profileImage={user.profile_image.small}
          href={user.links.html}
          mergeStyles={styles.photographer}
        />

        <IconButton
          iconName="favorite"
          color={red}
          iconColor={red}
          iconSize={16}
          mergeStyles={styles.likeButton}
          onClick={() => likePhotoRequest({ photoId: photo.id })}
        />
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
  user: PropTypes.shape({
    name: PropTypes.string,
    profile_image: PropTypes.shape({
      small: PropTypes.string,
    }),
    links: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
  isActive: PropTypes.bool.isRequired,
  pauseSlideshow: PropTypes.func.isRequired,
  resumeSlideshow: PropTypes.func.isRequired,
  likePhotoRequest: PropTypes.func.isRequired,
  unlikePhotoRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: currentPhotographerSelector(state),
  isActive: isActiveSelector(state),
});

export default connect(
  mapStateToProps,
  { pauseSlideshow, resumeSlideshow, likePhotoRequest, unlikePhotoRequest }
)(SlideshowPhoto);
