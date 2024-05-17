import React from 'react';
import { useState, useEffect } from 'react';
import css from './App.module.css';
import { getImages } from '../images-api';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }
    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getImages(searchQuery, page);
        setImages((prevState) => [...prevState, ...data.results]);
        setShowBtn(data.total_pages && data.total_pages !== page);
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
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = async () => { 
    setPage(page + 1);
  }
  
  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      { isError && <ErrorMessage/>}
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {images.length > 0 &&  !isLoading && showBtn && <LoadMoreBtn onClick={handleLoadMore} />}
      
    </div>
  );
}
