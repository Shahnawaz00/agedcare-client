// NavigationBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.css";

function NavigationBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/patients">Patient Records</Link>
        </li>
        <li>
          <Link to="/staff">Staff Records</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/account">User Account</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
