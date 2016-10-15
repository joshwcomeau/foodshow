import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

import { currentPhotoSelector } from '../../reducers/photos.reducer';
import { fetchPhotosRequest } from '../../actions';
import { sidebarWidth } from '../../style-variables';

import SlideshowPhoto from '../SlideshowPhoto';

const styles = StyleSheet.create({
  slideshow: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: sidebarWidth,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  photoContainer: {
    position: 'relative',
    flex: 1,
  },
  controls: {
    flexBasis: '50px',
  },
  slideshowImage: {
  },
});

class Slideshow extends Component {
  componentDidMount() {
    // Fetch info for all the items in our slideshow, right away.
    this.props.fetchPhotosRequest();
  }

  render() {
    const { photo } = this.props;

    // Don't render until our initial photo has been fetched.
    if (!photo) {
      return null;
    }

    return (
      <div className={css(styles.slideshow)}>
        <div className={css(styles.photoContainer)}>
          <SlideshowPhoto photo={photo} />
        </div>

        <div className={css(styles.controls)}>Im below</div>
      </div>
    );
  }
}

Slideshow.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
  }),
  fetchPhotosRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  photo: currentPhotoSelector(state),
});

export default connect(mapStateToProps, { fetchPhotosRequest })(Slideshow);
