import React from 'react';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ onClick, img }) {
  const { webformatURL, tags, id } = img;
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        id={id}
        className={s.image}
        onClick={onClick}
      />
    </li>
  );
}

export default ImageGalleryItem;
