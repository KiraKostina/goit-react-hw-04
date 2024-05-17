import React from 'react';
import { useState, useEffect } from 'react';
import css from './App.module.css';
import { getImages } from '../images-api';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage'

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }
    async function fetchImages() {
      try {
        setIsLoading(true);
        setImages([]);
        setIsError(false);
        const data = await getImages(searchQuery, page);
        setImages(data.results);
      } catch {
        setIsError(true);
      }
      finally { 
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [page, searchQuery]);

  const handleSearch = async searchWord => {
    setSearchQuery(searchWord);
  };

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      { isError && <ErrorMessage/>}
      {images.length > 0 && <ImageGallery images={images} />}
      { isLoading && <Loader />}
    </div>
  );
}
