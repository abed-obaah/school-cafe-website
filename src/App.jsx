import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import SearchBar from './components/SearchBar';
import MainBanner from './components/MainBanner';
import ContactSection from './components/Pages/ContactSection';
import Footer from './components/Footer';
import AppDownloadSection from './components/AppDownloadSection';
import About from './components/Pages/about';
import Mission from './components/Pages/Ourmission';
import Editorial from './components/Pages/editorial';
import Feedbacks from './components/Pages/feedbacks';
import FeatureSchool from './components/Pages/featuredSchoolPage'
import SchoolCompare from './components/Pages/compareSchools'
import Privacy from './components/Pages/privacy';
import School from './components/Pages/featuredSchoolPage';
import Schools from './components/Pages/schools';
import ComingSoon from './components/Pages/comingSoon';
import Auth from './components/auth/index';
import Community from './components/Pages/community/index';
import Dashboard from './components/dashboard/index';
import Winner from './components/Pages/winnerPage';
import RafflePage from './components/Pages/RafflePage';
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
  const hideLayoutRoutes = ['/login', '/profile', '/c', 'login/', '/register/',"/register",'/admin',"/ms","/auth","/comingSoon"];

  return (
    <div>
      {!hideLayoutRoutes.includes(location.pathname) && <Header />}
      {!hideLayoutRoutes.includes(location.pathname) && showSearchBarRoutes.includes(location.pathname) && <SearchBar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/" element={<MainBanner />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/school" element={<School />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
        <Route path="/feature-school" element={<FeatureSchool />} />
        <Route path="/school-compare" element={<SchoolCompare />} />
        <Route path="/school[id]" element={<Schools />} />
        
        {/* <Route path="/" element={<Auth />} /> */}
        <Route
          path="/auth"
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
          path="/winner"
          element={
            <PrivateRoute>
              <Winner />
           
            </PrivateRoute>
          }
        />
        <Route
          path="/raffle"
          element={
            <PrivateRoute>
              <RafflePage  />
           
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
          path="/admin"
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
