import React, { createContext, useState, useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// Create the User Context
const UserContext = createContext();
// const navigate = useNavigate();
// Create a custom hook to use the UserContext
export const useUserContext = () => {
  return useContext(UserContext);
};

// Create a Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial state for user

  // Function to log in the user and persist in localStorage
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Save to localStorage
  };

  // Function to log out the user and clear from localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Clear from localStorage
    // navigate('/'); // Navigate to the login page
  };

  // Retrieve user from localStorage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Restore user from localStorage
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
