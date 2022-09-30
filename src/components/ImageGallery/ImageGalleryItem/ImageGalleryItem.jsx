import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ data, openModal }) => {
  const elements = data.map(el => {
    return (
      <li
        className={css.imageGalleryItem}
        onClick={() => openModal({ src: el.largeImageURL, alt: el.tags })}
        key={el.id}
      >
        <img
          className={css.imageGalleryItemImage}
          src={el.webformatURL}
          alt={el.tags}
        />
      </li>
    );
  });
  return elements;
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  data: [],
};

ImageGalleryItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  openModal: PropTypes.func.isRequired,
};
