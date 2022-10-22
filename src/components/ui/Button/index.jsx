import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.css';

class Button extends Component {
  static defaultProps = {
    text: '',
    className: '',
    handleClick: () => {},
  };

  static propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func,
    className: PropTypes.string,
  };

  render() {
    const { text, handleClick, className, ...props } = this.props;
    return (
      <button
        className={cx(styles.button, className)}
        onClick={handleClick}
        {...props}
      >
        {text}
      </button>
    );
  }
}

export { Button };
