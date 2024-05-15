import React from 'react';
import { useState, useEffect } from 'react';
import css from './App.module.css';
import { getImages } from '../images-api';

import SearchBar from './SearchBar/SearchBar';

export default function App() {
  return (
    <div className={css.container}>
      <SearchBar />
    </div>
  );
}
