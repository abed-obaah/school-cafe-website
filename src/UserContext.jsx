import React, { createContext, useState, useContext, useEffect } from "react";

// Create the User Context
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUserContext = () => {
  return useContext(UserContext);
};

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial state for user
  const [isLoading, setIsLoading] = useState(true); // State to handle loading

  // Function to log in the user and persist in localStorage
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Save to localStorage
  };

  // Function to log out the user and clear from localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear from localStorage
    // window.location.href = "/login"; // Redirect to login page
    window.location.href = "/"; // Redirect to login page
  };

  // Retrieve user from localStorage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Restore user from localStorage
    }
    setIsLoading(false); // Set loading to false after checking localStorage
  }, []);

  if (isLoading) {
    // Optional loading screen while checking user state
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
