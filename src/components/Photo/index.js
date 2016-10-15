import React, { PropTypes } from 'react';
import { connect } from 'redux';
import { css, StyleSheet } from 'aphrodite';

import { pauseSlideshow, resumeSlideshow } from '../../actions';
import { currentPhotographerSelector } from '../../reducers/users.reducer';


const styles = StyleSheet.create({

});

const Photo = ({ photo, photographer, pauseSlideshow, resumeSlideshow }) => {
  return (
    <div
      className={css(styles.photoContainer)}
      onMouseEnter={pauseSlideshow}
      onMouseLeave={resumeSlideshow}
    >
      <div
        className={css(styles.photo)}
        style={{ backgroundImage: `url(${photo.src})` }}
      />
    </div>
  );
};

Photo.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
  }),
  photographer: PropTypes.shape({}),
  pauseSlideshow: PropTypes.func.isRequired,
  resumeSlideshow: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  photographer: currentPhotographerSelector(state),
});

export default connect(
  mapStateToProps,
  { pauseSlideshow, resumeSlideshow }
)(Photo);
