import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'components/ui';
import styles from './index.module.css';

class Modal extends Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  render() {
    const { src, closeModal } = this.props;
    return (
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.modal}>
          <Image src={src} alt={'photo-modal'} />
        </div>
      </div>
    );
  }
}

export { Modal };
