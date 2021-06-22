import React from "react";

export const Navbar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-2">
    <div className="navbar-brand">
      Github Search
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="/" className="nav-link">Home</a>
      </li>
      <li className="nav-item">
        <a href="/about" className="nav-link">About</a>
      </li>
      <li className="nav-item">
        <a href="/profile" className="nav-link">Profile</a>
      </li>
    </ul>
  </nav>
)
