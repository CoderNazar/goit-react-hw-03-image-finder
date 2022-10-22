import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'components/ui';
import styles from './index.module.css';

class ImageGalleryItem extends Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
  };

  render() {
    const { src, alt, openModal } = this.props;
    return (
      <li onClick={openModal} className={styles.item}>
        <Image className={styles.image} src={src} alt={alt} />
      </li>
    );
  }
}

export { ImageGalleryItem };
