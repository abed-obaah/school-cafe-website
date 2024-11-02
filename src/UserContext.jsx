// src/UserContext.js

import React, { createContext, useState, useContext } from 'react';

// Create the User Context
const UserContext = createContext();

// Create a custom hook to use the UserContext
export const useUserContext = () => {
  return useContext(UserContext);
};

// Create a Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial state for user

  // Function to log in the user
  const login = (userData) => {
    setUser(userData);
  };

  // Function to log out the user
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
