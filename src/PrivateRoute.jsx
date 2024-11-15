import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from './UserContext';// Assuming UserContext is in the same directory

const PrivateRoute = ({ children }) => {
    const { user } = useUserContext();

  // If not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // If logged in, allow access to the route
  return children;
};

export default PrivateRoute;
