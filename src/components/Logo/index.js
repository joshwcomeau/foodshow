import React from 'react';
import { Link } from 'react-router';
import { css, StyleSheet } from 'aphrodite';

import { grey100, grey900, blue } from '../../style-variables';
import hamburgerIcon from '../../images/hamburger.svg';

const logoRectangleAnimation = {
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(400px)',
  },
};

const styles = StyleSheet.create({
  logoContainer: {
    display: 'block',
    position: 'relative',
    color: '#FFF',
    cursor: 'pointer',
    textDecoration: 'none',

    ':hover [class*=logoEffectRectangle]': {
      animationName: logoRectangleAnimation,
      animationDuration: '1000ms',
      animationIterationCount: 'infinite',
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
    height: '5px',
    overflow: 'hidden',
  },

  logoEffectRectangle: {
    position: 'absolute',
    top: '-100px',
    left: '-200px',
    width: '100px',
    height: '200px',

    ':after': {
      content: '',
      background: blue,
      transform: 'rotate(45deg)',
    },
  },
});

const Logo = () => {
  return (
    <Link to="/" className={css(styles.logoContainer)}>
      <img
        src={hamburgerIcon}
        role="presentation"
        className={css(styles.hamburger)}
      />
      <h1 className={css(styles.logo)}>bunsplash</h1>

      <div className={css(styles.logoEffect)}>
        <div
          className={css(styles.logoEffectRectangle)}
          data-rectangle
        />
      </div>
    </Link>
  );
};

export default Logo;
