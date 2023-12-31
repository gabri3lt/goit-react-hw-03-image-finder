import React, { Component } from 'react';
import s from './App.module.css';
import Searchbar from 'components/SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { fetchMovies } from './API/Api';
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
  state = {
    image: [],
    searchImage: null,
    page: null,
    loading: false,
    error: null,
    showModal: false,
    largeImage: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchImage !== this.state.searchImage ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });

      fetchMovies(this.state.searchImage, this.state.page)
        .then(data => {
          this.setState(prevState => ({
            image: [...prevState.image, ...data.hits],
          }));

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  onClickLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  modalShow = index => {
    this.setState({
      showModal: true,
      largeImage: this.state.image[index].largeImageURL,
    });
  };

  modalHide = () => {
    this.setState({ showModal: false });
  };

  onFormSubmit = img => {
    this.setState({ searchImage: img, page: 1, image: [] });
  };

  notify = () => {
    toast.error('🦄 Wow so easy!', {
      position: 'top-right',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    const { error, image, loading, showModal, largeImage } = this.state;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery searchQuery={image} onClick={this.modalShow} />

        {image.length !== 0 && (
          <Button text="Load more" onClick={this.onClickLoadMore} />
        )}

        {error ? this.notify() : null}
        {loading && <Loader />}
        {showModal && <Modal onClose={this.modalHide} img={largeImage} />}

        <ToastContainer
          position="top-right"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
      </div>
    );
  }
}

export default App;
