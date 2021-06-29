import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import {AlertContext} from "../context/alert/alertContext";

export const Navbar = () => {
  const alert = useContext(AlertContext);

  const hideAlertHandler = () => alert.hide();

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary p-2">
      <div className="navbar-brand">
        Github Search
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" onClick={hideAlertHandler}>About</NavLink>
        </li>
      </ul>
    </nav>
  )
}

