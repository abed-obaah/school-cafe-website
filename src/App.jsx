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
import Auth from './components/auth/index';
import Community from './components/Pages/community/index';
import Dashboard from './components/dashboard/index';
import Profile from './components/dashboard/profile';
import Waitlist from './components/waitlist/index';
import Board from './components/Board/leaderBoard'
import Verification from './components/verification/index'
import Admin from "./components/admin/index"
import { UserProvider } from './UserContext';
import PrivateRoute from './PrivateRoute';  // Import the PrivateRoute component
import PublicRoute from "./PublicRoute";

function App() {
  const location = useLocation();

  const showSearchBarRoutes = ['/m'];
  const hideLayoutRoutes = ['/login', '/profile', '/', 'login/', '/register/',"/register",'/admin'];

  return (
    <div>
      {!hideLayoutRoutes.includes(location.pathname) && <Header />}
      {!hideLayoutRoutes.includes(location.pathname) && showSearchBarRoutes.includes(location.pathname) && <SearchBar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/a" element={<MainBanner />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/school" element={<School />} />
        {/* <Route path="/" element={<Auth />} /> */}
        <Route
          path="/ms"
          element={
            <PublicRoute>
              <Auth />
            </PublicRoute>
          }
        />

        {/* Private Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/community"
          element={
            <PrivateRoute>
              <Community />
            </PrivateRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <PrivateRoute>
              <Board />
            </PrivateRoute>
          }
        />
        <Route
          path="/verification"
          element={
            <PrivateRoute>
              <Verification />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PublicRoute>
              <Admin />
            </PublicRoute>
          }
        />
      </Routes>

      {!hideLayoutRoutes.includes(location.pathname) && <AppDownloadSection />}
      {!hideLayoutRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  );
}
