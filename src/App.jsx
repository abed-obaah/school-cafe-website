// src/App.js
import React from 'react';
import Header from './components/header';
import SearchBar from './components/SearchBar';
import MainBanner from './components/MainBanner';
import NewsSection from './components/NewsSection';
import ToolsSection from './components/ToolsSection';
import FeaturedSchool from './components/FeaturedSchool'

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <MainBanner />
      <NewsSection />
      <ToolsSection />
      < FeaturedSchool />
    </div>
  );
}

export default App;
