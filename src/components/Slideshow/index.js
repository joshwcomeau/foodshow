import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';

import { photosListSelector } from '../../reducers/photos.reducer';
import { fetchPhotosRequest } from '../../actions';


const styles = StyleSheet.create({
  slideshow: {
    padding: '80px 100px',
  },
  slideshowImageContainer: {
    marginBottom: '50px',
  },
  slideshowImage: {
    display: 'block',
    width: '100%',
    borderRadius: 10,
    boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
  },
});

class Slideshow extends Component {
  componentDidMount() {
    // Fetch info for all the items in our slideshow, right away.
    this.props.fetchPhotosRequest();
  }

  renderPhotos() {
    return this.props.photos.map(photo => (
      <div className={css(styles.slideshowImageContainer)}>
        <img
          key={photo.id}
          src={photo.urls.regular}
          className={css(styles.slideshowImage)}
          alt="Hamburger from Unsplash"
        />
      </div>
    ));
  }

  render() {
    return (
      <div className={css(styles.slideshow)}>
        {this.renderPhotos()}
      </div>
    );
  }
}

Slideshow.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  fetchPhotosRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  photos: photosListSelector(state),
});

export default connect(mapStateToProps, { fetchPhotosRequest })(Slideshow);
