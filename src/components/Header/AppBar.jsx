import React, { useState, useContext } from "react";
import AuthContext from "../Context";
import "./Appbar.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);
  const { user, logout } = useContext(AuthContext);
  const [username, setUsername] = useState(user?.username || "Sign In");

  const handleProfileClick = () => setShowProfileDropdown(!showProfileDropdown);
  const handleNotificationClick = () =>
    setShowNotificationDropdown(!showNotificationDropdown);

  return (
    <div className="topbar">
      <div>
        <div className="details">
          <p>Pages / Dashboard</p>
          <span>Dashboard</span>
        </div>
      </div>

      <div className="profile">
        <div className="searchbar">
          <i className="fa fa-search"></i>
          <input type="search" placeholder="Search..." />
        </div>

        <div className="username">
          <span>
            <i className="fa fa-user"></i>
          </span>
          <p>{username}</p>
        </div>

        <div className="notification" onClick={handleNotificationClick}>
          <i className="fa fa-bell"></i>
          {showNotificationDropdown && (
            <div className="dropdown notification-dropdown">
              <p>No new notifications</p>
            </div>
          )}
        </div>
        <div className="notification" onClick={handleProfileClick}>
          <i className="fa fa-cog"></i>
          {showProfileDropdown && (
            <div className="dropdown profile-dropdown">
              <Link to="/profile" className="link">
                User Profile
              </Link>
              <a href="#logout" onClick={logout}>
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
