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
import Badges from './components/Badges';
import QuestionInput from './components/questionsInput';
import Testimonails from './components/Testimonials'
import FAQ from './components/Faq';
import AppDownloadSection from './components/AppDownloadSection';
import Footer from './components/Footer'

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
      <Badges/>
      <QuestionInput/>
      <Testimonails/>
      <FAQ/>
      <AppDownloadSection/>
      <Footer/>
    </div>
  );
}

export default App;
