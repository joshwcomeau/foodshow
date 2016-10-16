import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';


const styles = StyleSheet.create({
  photographer: {
    color: '#FFF',
    textShadow: '0px 1px 1px rgba(0,0,0,0.1)',
  },

  profileImage: {
    position: 'relative',
    float: 'left',
    width: '40px',
    height: '40px',
    marginRight: '10px',
    borderRadius: '4px',
    border: '2px solid #FFF',
    boxShadow: '0px 1px 1px rgba(0,0,0,0.1)',
  },
  name: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

const UserAttribution = ({ mergeStyles, name, profileImage, href }) => {
  return (
    <div className={css(styles.photographer, mergeStyles)}>
      {/* eslint-disable jsx-a11y/img-redundant-alt */}
      <a href={href}>
        <img
          alt="Photographer avatar"
          src={profileImage}
          className={css(styles.profileImage)}
        />
      </a>
      <span>
        By&nbsp;
        <a href={href} className={css(styles.name)}>
          {name}
        </a>
      </span>
    </div>
  );
};

UserAttribution.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mergeStyles: PropTypes.object,
  name: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};


export default UserAttribution;
