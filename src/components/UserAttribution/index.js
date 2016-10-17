import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

import ProfilePhoto from '../ProfilePhoto';


const styles = StyleSheet.create({
  photographer: {
    color: '#FFF',
    textShadow: '0px 1px 1px rgba(0,0,0,0.1)',
  },

  profilePhoto: {
    float: 'left',
    marginRight: '10px',
  },

  name: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

const UserAttribution = ({
  mergeStyles,
  name,
  profilePhotoUrls,
  profileLink,
}) => {
  return (
    <div className={css(styles.photographer, mergeStyles)}>
      <ProfilePhoto
        mergeStyles={styles.profilePhoto}
        profilePhotoUrls={profilePhotoUrls}
        profileLink={profileLink}
        size="small"
      />
      <span>
        By&nbsp;
        <a
          href={profileLink}
          target="_blank"
          rel="noopener noreferrer"
          className={css(styles.name)}
        >
          {name}
        </a>
      </span>
    </div>
  );
};

UserAttribution.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mergeStyles: PropTypes.object,
  name: PropTypes.string.isRequired,
  profilePhotoUrls: PropTypes.shape({
    small: PropTypes.string,
    medium: PropTypes.string,
    large: PropTypes.string,
  }).isRequired,
  profileLink: PropTypes.string.isRequired,
};


export default UserAttribution;
