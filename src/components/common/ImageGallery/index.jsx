import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem';
import styles from './index.module.css';

class ImageGallery extends Component {
  static defaultProps = {
    images: [],
  };

  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        webformatURL: PropTypes.string,
        largeImageURL: PropTypes.string,
        type: PropTypes.string,
        id: PropTypes.number,
      })
    ),
    openModal: PropTypes.func.isRequired,
  };

  render() {
    const { images, openModal } = this.props;
    return (
      <ul className={styles.imageGallery}>
        {images.map(({ webformatURL, id, largeImageURL, type }) => {
          return (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              alt={type}
              openModal={() => openModal(largeImageURL)}
            />
          );
        })}
      </ul>
    );
  }
}

export { ImageGallery };
