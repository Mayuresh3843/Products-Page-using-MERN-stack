// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

// Create context
const AuthContext = createContext(null);

// Custom hook to use the Auth context
function useAuth() {
  return useContext(AuthContext);
}

// Provider component
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token when app loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const value = { isLoggedIn, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// ✅ Default + named exports (fixes VS Code warnings)
// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
export default AuthContext;
