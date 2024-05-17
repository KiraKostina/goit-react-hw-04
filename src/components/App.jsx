import React from 'react';
import { useState, useEffect } from 'react';
import css from './App.module.css';
import { getImages } from '../images-api';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';

export default function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchImages() { 
      
      const data = await getImages(searchQuery, page);
      setImages(data.results);
     }
  
    fetchImages();
  }, [page, searchQuery])
  


  const handleSearch = async (searchWord) => {
    setSearchQuery(searchWord);

   }

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} /> }
      
    </div>
  );
}
