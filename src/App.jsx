import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import SearchBar from './components/SearchBar';
import MainBanner from './components/MainBanner';
import ContactSection from './components/Pages/ContactSection';
import Footer from './components/Footer';
import AppDownloadSection from './components/AppDownloadSection';
import About from './components/Pages/about';
import Privacy from './components/Pages/privacy';
import School from './components/Pages/featuredSchoolPage'
import Auth from './components/auth'
import Community from './components/Pages/community/index'

function App() {
  const location = useLocation();  // Hook to get the current route

  // List of routes where SearchBar should be displayed
  const showSearchBarRoutes = ['/']; 

  // List of routes where Header, Footer, and AppDownloadSection should be hidden
  const hideLayoutRoutes = ['/login'];

  return (
    <div>
      {/* Conditionally render Header, SearchBar, and Footer based on current route */}
      {!hideLayoutRoutes.includes(location.pathname) && <Header />}

      {/* Conditionally render SearchBar based on the current route */}
      {!hideLayoutRoutes.includes(location.pathname) && showSearchBarRoutes.includes(location.pathname) && <SearchBar />}

      <Routes>
        <Route path="/" element={<MainBanner />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/school" element={<School />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/community" element={<Community />} />
      </Routes>

      {/* Conditionally render AppDownloadSection and Footer based on current route */}
      {!hideLayoutRoutes.includes(location.pathname) && <AppDownloadSection />}
      {!hideLayoutRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
