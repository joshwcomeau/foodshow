import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

import {
  sidebarWidth,
  sidebarWidthNumber,
  grey100,
  grey900,
} from '../../style-variables';
import { toggleSidebar } from '../../actions';

import Divider from '../Divider';
import Logo from '../Logo';
import CurrentUserProfile from '../CurrentUserProfile';
import SidebarToggleButton from '../SidebarToggleButton';
import LoginButton from '../LoginButton';


const styles = StyleSheet.create({
  sidebar: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: sidebarWidth,
    color: grey100,
    background: grey900,
    transition: 'transform 500ms',
    textAlign: 'center',
  },

  toggleButton: {
    position: 'absolute',
    top: '15px',
    left: 0,
    transform: 'translateX(-60%)',
  },

  hamburger: {
    width: '50px',
  },

  header: {
    padding: '50px 0',
  },

  subtitle: {
    margin: '30px 60px',
    fontSize: '13px',
    // fontFamily: 'Trirong',
  },

  mainContent: {
    marginTop: '40px',
  },

  unsplashAttribution: {
    position: 'absolute',
    fontSize: '14px',
    left: 0,
    right: 0,
    bottom: 0,
    padding: '25px 0',
  },
  unsplashLink: {
    fontWeight: 'bold',
  },
});

const Sidebar = ({ isVisible, isLoggedIn, toggleSidebar }) => {
  return (
    <div
      className={css(styles.sidebar)}
      style={{
        transform: isVisible ? 'translateX(0)' : `translateX(${sidebarWidthNumber - 6}px)`,
      }}
    >
      <SidebarToggleButton
        mergeStyles={styles.toggleButton}
        isVisible={isVisible}
        toggleSidebar={toggleSidebar}
      />

      <header className={css(styles.header)}>
        <Logo />
        <p className={css(styles.subtitle)}>
          For those times in life when you just feel like looking at pictures of food.
        </p>
      </header>

      <Divider />

      <div className={css(styles.mainContent)}>
        {isLoggedIn ? <CurrentUserProfile /> : <LoginButton />}
      </div>

      <p className={css(styles.unsplashAttribution)}>
        Photos from&nbsp;
        <a href="http://unsplash.com" className={css(styles.unsplashLink)}>
          Unsplash
        </a>.
      </p>
    </div>
  );
};

Sidebar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  isVisible: state.ui.sidebar.isVisible,
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { toggleSidebar })(Sidebar);
