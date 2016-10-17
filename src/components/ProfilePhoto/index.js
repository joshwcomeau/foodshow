/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';


const styles = StyleSheet.create({
  profilePhoto: {
    position: 'relative',
    width: '40px',
    height: '40px',
    borderRadius: '4px',
    border: '2px solid #FFF',
    boxShadow: '0px 1px 1px rgba(0,0,0,0.1)',
  },

  small: {
    width: '32px',
    height: '32px',
  },

  medium: {
    width: '64px',
    height: '64px',
  },
});

const ProfilePhoto = ({ mergeStyles, profilePhotoUrls, profileLink, size }) => {
  // Because we want to support retina displays, we want to pick the image
  // from a size up, when possible.
  let photoUrl;

  switch (size) {
    case 'small': {
      photoUrl = profilePhotoUrls.medium;
      break;
    }
    default: {
      photoUrl = profilePhotoUrls.large;
    }
  }
  return (
    <a href={profileLink} target="_blank" rel="noopener noreferrer">
      <img
        alt="Photographer avatar"
        src={photoUrl}
        className={css(styles.profilePhoto, styles[size], mergeStyles)}
      />
    </a>
  );
};

ProfilePhoto.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mergeStyles: PropTypes.object,
  profilePhotoUrls: PropTypes.shape({
    small: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired,
  }).isRequired,
  profileLink: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium']).isRequired,
};


export default ProfilePhoto;
