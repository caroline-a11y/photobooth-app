import React from 'react';
import '../styles/gallery.css'; // Import the CSS file

const GalleryPage = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <p className="gallery-description">Here you can see a collection of our photobooth experiences!</p>
      <div className="gallery-images">
        <img src="/images/photo two.jpg" alt="Gallery Malckie Photobooth" className="gallery-image" />
        <img src="/images/photo three.jpg" alt="Gallery Malckie Photobooth" className="gallery-image" />
        <img src="/images/photo 4.jpg" alt="Gallery Malckie Photobooth" className="gallery-image" />
        <img src="/images/photo 5.jpg" alt="Gallery Malckie Photobooth" className="gallery-image" />
        <img src="/images/photo 7.jpg" alt="Gallery Malckie Photobooth" className="gallery-image" />
        <img src="/images/photo eight.jpg" alt="Gallery Malckie Photobooth" className="gallery-image" />
        <img src="/images/photo nine.jpg" alt="Gallery Malckie Photobooth" className="gallery-image" />
        <img src="/images/photo ten.jpg" alt="Gallery Malckie Photobooth" className="gallery-image" />
        <img src="/images/photo elen.jpg" alt="Gallery Malckie Photobooth" className="gallery-image" />
        <img src="/images/photo 7.jpg" alt="Gallery Malckie Photobooth" className="gallery-image" />
        <img src="/images/photo 6.jpg" alt="Gallery Malckie Photobooth" className="gallery-image" />
        <img src="/images/photo one.jpg" alt="Gallery Malckie Photobooth" className="gallery-image" />
      </div>
    </div>
  );
};

export default GalleryPage;
