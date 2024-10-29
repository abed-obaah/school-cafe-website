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
import School from './components/Pages/featuredSchoolPage';
import Auth from './components/auth';
import Community from './components/Pages/community/index';
import Dashboard from './components/dashboard/index';
import Profile from './components/dashboard/profile';
import Waitlist from './components/waitlist/index';

function App() {
  const location = useLocation();  // Hook to get the current route

  // List of routes where SearchBar should be displayed
  const showSearchBarRoutes = ['/m'];

  // List of routes where Header, Footer, and AppDownloadSection should be hidden
  const hideLayoutRoutes = ['/login', '/profile']; // Add '/profile' to hide AppDownloadSection on the profile page

  return (
    <div>
      {/* Conditionally render Header, SearchBar, and Footer based on current route */}
      {!hideLayoutRoutes.includes(location.pathname) && <Header />}

      {/* Conditionally render SearchBar based on the current route */}
      {!hideLayoutRoutes.includes(location.pathname) && showSearchBarRoutes.includes(location.pathname) && <SearchBar />}

      <Routes>
        <Route path="/m" element={<Waitlist />} />
        <Route path="/" element={<MainBanner />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/school" element={<School />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/community" element={<Community />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/waitlist" element={<Waitlist />} />
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
