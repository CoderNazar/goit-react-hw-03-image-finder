import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Magnifier } from 'assets/images';
import styles from './index.module.css';

class Searchbar extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={onSubmit}>
          <button type="submit" className={styles.button}>
            <Magnifier fill={'#828182'} />
          </button>

          <input
            className={styles.input}
            name="tag"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export { Searchbar };
