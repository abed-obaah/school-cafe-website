import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "./UserContext";

const PublicRoute = ({ children }) => {
  const { user } = useUserContext();

  // Redirect authenticated users to the dashboard
  return user ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;
