import React from 'react';
import { css, StyleSheet } from 'aphrodite';

import { sidebarWidth, grey100, grey900 } from '../../style-variables';
import Divider from '../Divider';
import Icon from '../Icon';
import Logo from '../Logo';

const styles = StyleSheet.create({
  sidebar: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: sidebarWidth,
    color: grey100,
    background: grey900,
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

const Sidebar = () => {
  return (
    <div className={css(styles.sidebar)}>
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

export default Sidebar;
