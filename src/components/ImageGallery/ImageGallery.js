import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';

const ImageGallery = ({ images, onSetImgInfo, openModal }) => {
  return (
    <ul className={style.ImageGallery}>
      {images.map(({ webformatURL, largeImageURL, tags }, idx) => (
        <ImageGalleryItem
          key={idx}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onSetImgInfo={onSetImgInfo}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array,
  openModal: PropTypes.func,
  onSetImgInfo: PropTypes.func,
};
