import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-2">
    <div className="navbar-brand">
      Github Search
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">About</NavLink>
      </li>
    </ul>
  </nav>
)
