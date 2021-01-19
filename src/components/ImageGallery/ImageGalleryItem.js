import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags = '',
  onSetImgInfo,
  openModal,
}) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={style.ImageGalleryItemImage}
        onClick={() => {
          onSetImgInfo({ largeImageURL, tags });
          openModal();
        }}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onSetImgInfo: PropTypes.func,
  openModal: PropTypes.func,
};
