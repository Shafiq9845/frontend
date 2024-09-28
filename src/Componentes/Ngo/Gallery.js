import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Css/style/gallery.css";
import Nav from './Nav';
import Footer from '../User/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      fetchImages();
    }
  }, [userId]);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("images", selectedFiles[i]);
    }

    axios
      .post(`http://localhost:8081/ngo/gallery/upload/${userId}`, formData)
      .then(() => {
        fetchImages();
        setSelectedFiles([]);
      })
      .catch((error) => {
        console.error("Error uploading images:", error);
      });
  };

  const fetchImages = () => {
    axios
      .get(`http://localhost:8081/ngo/gallery/${userId}`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  };

  const handleDelete = (imagename) => {
    axios
      .delete(`http://localhost:8081/ngo/gallery/${userId}/${imagename}`)
      .then(() => {
        fetchImages();
      })
      .catch((error) => {
        console.error("Error deleting image:", error);
      });
  };

  return (
    <>
      <Nav />
      <div className="gallery-container">
        <h1>Gallery</h1>
        <div className="text-center">
          <input type="file" multiple onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>
        </div>
        <div className="gallery row">
          {images.length > 0 ? (
              images.map((image) => (
                  <div key={image.file} className="gallery-item col-12 col-sm-6 col-md-4">
                <img src={image.url} alt={image.description} />
                <button id="delete" onClick={() => handleDelete(image.file)}>X</button>
              </div>
            ))
        ) : (
            <p className="text-center">No images available</p>
        )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
