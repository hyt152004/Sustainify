// Import necessary libraries/components
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./navbar.css";
function Navbar() {
  return (
    <nav className="nav">
      <Link to="/home" className="site-title">
        <img src={logo} alt="logo" className="profile" />
      </Link>
      <ul>
        <li>
          <Link to="/home" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
