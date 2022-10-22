import React, { Component, createRef } from 'react';
import { getImages } from 'services';
import { ImageGallery, Modal, Loader, Searchbar } from 'components/common';
import { Button } from 'components/ui';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      isLoading: false,
      page: 0,
      photoModal: '',
      open: false,
      tag: '',
    };
    this.div = createRef();
  }

  scrollToMyRef() {
    window.scrollTo(0, this.div.current.scrollHeight);
  }

  searchImages(images, tagName) {
    return images.filter(({ tags }) => tags.includes(tagName));
  }

  async requestImages() {
    const { page, images, tag } = this.state;
    const { hits } = await getImages(page);
    const newImages = this.searchImages(hits, tag);
    const stateImages = [...images, ...newImages];
    this.setState(
      state => ({
        ...state,
        images: stateImages,
        isLoading: false,
      }),
      this.scrollToMyRef
    );
  }

  pageIncrease() {
    this.setState(
      state => ({
        ...state,
        page: ++state.page,
        isLoading: true,
      }),
      this.requestImages
    );
  }

  openModal(img) {
    this.setState(state => ({
      ...state,
      open: true,
      photoModal: img,
    }));
  }

  closeModal() {
    this.setState(state => ({
      ...state,
      open: false,
      photoModal: '',
    }));
  }

  onSubmit(event) {
    event.preventDefault();
    const { tag } = [...event.target.elements]
      .filter(item => item.name)
      .reduce(
        (item, element) => ((item[element.name] = element.value), item),
        {}
      );
    this.setState(
      state => ({
        ...state,
        tag,
        images: [],
        page: 0,
      }),
      this.pageIncrease
    );
  }

  render() {
    const { images, photoModal, open, isLoading } = this.state;
    return (
      <div ref={this.div} className="app">
        <Searchbar onSubmit={this.onSubmit.bind(this)} />
        <ImageGallery images={images} openModal={this.openModal.bind(this)} />
        {isLoading && <Loader />}
        {!!images.length && !isLoading && (
          <Button
            handleClick={this.pageIncrease.bind(this)}
            text={'Loader more'}
          />
        )}
        {open && (
          <Modal src={photoModal} closeModal={this.closeModal.bind(this)} />
        )}
      </div>
    );
  }
}

export { App };
