import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.module.css';

class Image extends Component {
  static defaultProps = {
    alt: 'alt',
    className: '',
    circle: false,
  };

  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    circle: PropTypes.bool,
  };

  render() {
    const { src, alt, className, circle, ...arts } = this.props;
    return (
      <img
        src={src}
        alt={alt}
        className={cx(className, { [styles.roundPicture]: circle })}
        {...arts}
      />
    );
  }
}

export { Image };
