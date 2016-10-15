import React, { Component, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';


// The home route for this app is the photo gallery.
class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    // TODO: API call here.

  }

  renderPhotos() {
    return this.state.photos.map(photo => (
      <img
        src={photo}
        style={{ width: '50%' }}
      />
    ));
  }

  render() {
    return (
      <div className={css(styles.gallery)}>
        {this.renderPhotos()}
      </div>
    )
  }
}

Gallery.propTypes = {};

const styles = StyleSheet.create({
  gallery: {
    padding: '100px',
  },
});

export default Gallery;
