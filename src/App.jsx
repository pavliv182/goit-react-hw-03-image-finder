import { Component } from 'react';
import { fetchImages } from 'shared/services/API';
import { Oval } from 'react-loader-spinner';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    q: '',
    page: 1,
    images: [],
    loading: false,
    showModal: false,
    modalData: {},
  };

  async componentDidUpdate(_, prevState) {
    if (this.state.q !== prevState.q || prevState.page < this.state.page) {
      this.setState({ loading: true });

      try {
        const data = await fetchImages(this.state.q, this.state.page);
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...data.hits],
            loading: false,
          };
        });
      } catch (error) {
        console.log(error);
        this.setState({ loading: false });
      }
    }
  }

  onSearch = q => {
    this.setState({ q, page: 1 });
  };

  onLoadMore = () => {
    // console.log(this.state.page);
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  toggleModal = modalData => {
    this.setState({
      showModal: true,
      modalData,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { images, loading, showModal, modalData } = this.state;
    const { onSearch, toggleModal, onLoadMore, closeModal } = this;
    // console.log(modalData);
    return (
      <>
        <Searchbar onSearch={onSearch} />
        <ImageGallery images={images} openModal={toggleModal} />
        {!!images.length && <Button onClick={onLoadMore} />}
        {loading && <Oval width={200} />}
        {showModal && <Modal data={modalData} closeModal={closeModal} />}
      </>
    );
  }
}
export default App;
