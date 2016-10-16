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
import SidebarToggleButton from '../SidebarToggleButton';
import Button from '../Button';


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

  logInButton: {
    marginTop: '40px',
  },
});

const Sidebar = ({ isVisible, toggleSidebar }) => {
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

      <Button mergeStyles={styles.logInButton}>Log In to Unsplash</Button>
    </div>
  );
};

Sidebar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  isVisible: state.ui.sidebar.isVisible,
});

export default connect(mapStateToProps, { toggleSidebar })(Sidebar);
