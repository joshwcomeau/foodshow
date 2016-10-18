import React from 'react';
import { css, StyleSheet } from 'aphrodite';

import { blue } from '../../style-variables';
import hamburgerIcon from '../../images/hamburger.svg';

const logoRectangleAnimation = {
  from: {
    transform: 'translateX(75px)',
  },
  to: {
    transform: 'translateX(410px)',
  },
};

const styles = StyleSheet.create({
  logoContainer: {
    display: 'block',
    position: 'relative',
    color: '#FFF',
    cursor: 'default',
    textDecoration: 'none',

    ':hover [class*=rectangleContainer]': {
      animationName: logoRectangleAnimation,
      animationDuration: '1000ms',
      animationIterationCount: '1',
      animationFillMode: 'both',
    },
  },

  hamburger: {
    width: '50px',
  },

  logo: {
    fontSize: '36px',
    lineHeight: '32px',
    fontWeight: 'bold',
  },

  logoEffect: {
    position: 'absolute',
    zIndex: -1,
    left: 0,
    right: 0,
    bottom: '-5px',
    margin: 'auto',
    width: '180px',
    height: '4px',
    overflow: 'hidden',
  },

  rectangleContainer: {
    position: 'absolute',
    top: '-100px',
    left: '-200px',
    width: '100px',
    height: '200px',
  },
  rectangle: {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: 'rotate(45deg)',
    background: blue,
  },
});

const Logo = () => {
  return (
    <div className={css(styles.logoContainer)}>
      <img
        src={hamburgerIcon}
        role="presentation"
        className={css(styles.hamburger)}
      />
      <h1 className={css(styles.logo)}>foodshow</h1>

      <div className={css(styles.logoEffect)}>
        <div className={css(styles.rectangleContainer)}>
          <div className={css(styles.rectangle)} />
        </div>
      </div>
    </div>
  );
};

export default Logo;
