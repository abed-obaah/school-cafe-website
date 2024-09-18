// src/App.js
import React from 'react';
import Header from './components/header';
import SearchBar from './components/SearchBar';
import MainBanner from './components/MainBanner';
import NewsSection from './components/NewsSection';
import ToolsSection from './components/ToolsSection';
import FeaturedSchool from './components/FeaturedSchool';
import LatestSchool from './components/LatestSchool'
import CardCompare from './components/CardCompare'

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <MainBanner />
      <NewsSection />
      <ToolsSection />
      <FeaturedSchool />
      <LatestSchool />
      <CardCompare/>
    </div>
  );
}

export default App;
