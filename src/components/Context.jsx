import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); // Store token

  const ApiUrl = "http://localhost/churchApp/admin_authentication.php";

  // Load token and user from localStorage on initialization
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
      // Optionally, fetch user data from API if needed
      // fetchUserData();
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        ApiUrl,
        new URLSearchParams({
          action: "login",
          email,
          password,
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      console.log(response.data);

      if (response.data && response.data.success) {
        setUser(response.data.user); // Set user data
        setToken(response.data.token); // Store the token
        localStorage.setItem("token", response.data.token); // Store the token in local storage
        localStorage.setItem("user", response.data.user);
        console.log("user", user);
        return true;
      } else {
        return false; // Handle error response
      }
    } catch (error) {
      console.error("Error during login:", error);
      return false;
    }
  };

  const register = async (email, password) => {
    try {
      const response = await axios.post(ApiUrl, {
        action: "register", // Action parameter for registration
        email,
        password,
      });

      if (
        response.data &&
        response.data.message === "User registered successfully!"
      ) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error during registration:", error);
      return false;
    }
  };

  const updateProfile = async (profileData) => {
    try {
      const response = await axios.post(
        ApiUrl,
        new URLSearchParams({
          action: "update_profile",
          ...profileData,
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      if (response.data && response.data.success) {
        setUser({ ...user, ...profileData }); // Update user data in context
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token"); // Remove token from local storage
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, updateProfile, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
