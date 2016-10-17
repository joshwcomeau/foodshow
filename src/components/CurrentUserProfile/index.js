import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

import {
  green,
} from '../../style-variables';
import { currentUserSelector } from '../../reducers/auth.reducer';


const styles = StyleSheet.create({
  currentUserProfile: {
  },
  currentUserLink: {
    color: green,
    fontWeight: 'bold',
  },
});

const CurrentUserProfile = ({ currentUser }) => {
  return (
    <div
      className={css(styles.currentUserProfile)}
    >
      Logged in as&nbsp;
      <a href="#" className={css(styles.currentUserLink)}>
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
