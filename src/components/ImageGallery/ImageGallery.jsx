import ImageGalleryItem from './ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, openModal }) => {
  // console.log(images);
  return (
    <ul className={css.imageGallery}>
      <ImageGalleryItem data={images} openModal={openModal} />
    </ul>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  images: [],
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
