import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

import { green } from '../../style-variables';
import { currentUserSelector } from '../../reducers/auth.reducer';

import ProfilePhoto from '../ProfilePhoto';


const styles = StyleSheet.create({
  currentUserProfile: {
  },
  currentUserLink: {
    color: green,
    fontWeight: 'bold',
  },
  profilePhoto: {
    display: 'block',
    width: '64px',
    margin: '0 auto 15px',
  },
});

const CurrentUserProfile = ({ currentUser }) => {
  return (
    <div
      className={css(styles.currentUserProfile)}
    >
      <ProfilePhoto
        mergeStyles={styles.profilePhoto}
        profilePhotoUrls={currentUser.profile_image}
        profileLink={currentUser.links.html}
        size="medium"
      />

      Logged in as&nbsp;
      <a href={currentUser.links.html} className={css(styles.currentUserLink)}>
        {currentUser.name}
      </a>
    </div>
  );
};

CurrentUserProfile.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};


const mapStateToProps = state => ({
  currentUser: currentUserSelector(state),
});

export default connect(mapStateToProps)(CurrentUserProfile);
