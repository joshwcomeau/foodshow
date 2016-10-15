import React from 'react';
import { css, StyleSheet } from 'aphrodite';

// import { sidebarWidth, grey100, grey900 } from '../../style-variables';

const styles = StyleSheet.create({
  dividerContainer: {
    padding: '0 40px',
  },
  divider: {
    position: 'relative',
    height: '21px',
  },
  line: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto',
    width: 'calc(50% - 7px)',
    height: '1px',
    background: 'rgba(255,255,255,0.25)',
  },

  lineLeft: {
    left: 0,
  },

  lineRight: {
    right: 0,
  },

  accent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    width: '6px',
    height: '6px',
    background: 'rgba(255,255,255,0.4)',
    borderRadius: '100%',
  },
});

const Divider = () => (
  <div className={css(styles.dividerContainer)}>
    <div className={css(styles.divider)}>
      <div className={css(styles.line, styles.lineLeft)} />
      <div className={css(styles.line, styles.lineRight)} />
      <div className={css(styles.accent)} />
    </div>
  </div>
);

export default Divider;
