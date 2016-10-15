import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

import { sidebarWidth, grey100, grey900 } from '../../style-variables';


const Sidebar = () => {
  return (
    <div className={css(styles.sidebar)}>
      <h1>I am a sidebar!</h1>
    </div>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: sidebarWidth,
    color: grey100,
    background: grey900,
  }
});

export default Sidebar;
