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
    textAlign: 'center',
  },

  subtitle: {
    margin: '30px 60px',
    fontSize: '13px',
    // fontFamily: 'Trirong',
  },
});

const Sidebar = ({ isActive, toggleSidebar }) => {
  return (
    <div
      className={css(styles.sidebar)}
      style={{
        transform: isActive ? 'translateX(0)' : `translateX(${sidebarWidthNumber - 6}px)`,
      }}
    >
      <SidebarToggleButton
        mergeStyles={styles.toggleButton}
        isActive={isActive}
        toggleSidebar={toggleSidebar}
      />

      <header className={css(styles.header)}>
        <Logo />
        <p className={css(styles.subtitle)}>
          For those times in life when you just feel like looking at pictures of hamburgers.
        </p>
      </header>

      <Divider />
    </div>
  );
};

Sidebar.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  isActive: state.ui.sidebar.isActive,
});

export default connect(mapStateToProps, { toggleSidebar })(Sidebar);
