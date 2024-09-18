import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => (
  <div className="sidebar">
    <div className="logo">
      <h3>DIGI CHURCH</h3>
    </div>
    <ul>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <li>
          <i className="fa fa-home"></i>
          <span>Dashboard</span>
        </li>
      </NavLink>
      <p className="link-title">EVENTS</p>
      <NavLink
        to="/events"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <li>
          <i className="fa fa-calendar"></i>
          <span>Events</span>
        </li>
      </NavLink>
      <p className="link-title">ACTIVITIES</p>
      <NavLink
        to="/sermon"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <li>
          <i className="fa fa-microphone"></i> <span> Sermon</span>
        </li>
      </NavLink>
      <NavLink
        to="/testimony"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <li>
          <i className="fa fa-comments"></i>
          <span>Testimonies</span>
        </li>
      </NavLink>
      <NavLink
        to="/prayer"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <li>
          <i className="fa fa-praying-hands"></i>
          <span>Prayer Request</span>
        </li>
      </NavLink>
      <p className="link-title">FINANCES</p>
      <NavLink
        to="/offering"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <li>
          <i className="fa fa-donate"></i>
          <span>Offerings</span>
        </li>
      </NavLink>
      <NavLink
        to="/tithe"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <li>
          <i className="fa fa-piggy-bank"></i>
          <span>Tithes</span>
        </li>
      </NavLink>
      <p className="link-title">ANNOUNCEMENTS</p>
      <NavLink
        to="/announcement"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <li>
          <i className="fa fa-bullhorn"></i>
          <span>Annoucement</span>
        </li>
      </NavLink>
    </ul>
  </div>
);

export default Sidebar;
