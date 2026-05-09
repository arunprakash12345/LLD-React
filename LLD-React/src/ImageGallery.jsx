import React from "react";
import "./CSS/imageGallery.css";

const ImageGallery = ({ imageItems }) => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  return (
    <div className="image-gallery">
      <h2>Image Gallery</h2>
      <p>This is the Image Gallery page.</p>
      <div>
        {imageItems.map((item) => (
          <img
            key={item.id}
            src={item.url}
            alt={item.name}
            style={{ width: "200px", margin: "10px", cursor: "pointer" }}
            onClick={() => setSelectedImage(item.url)}
          />
        ))}
      </div>
      <div className="SelectedImage">
        <img
          src={selectedImage}
          alt=""
          style={{ width: "200px", margin: "10px" }}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
