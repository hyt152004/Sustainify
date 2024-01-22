import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./navbar.css";
import KingImage from "../images/crown-emoji-2048x1463-p6njt0zs.png";
import QueenImage from "../images/citizen.png";
import JackImage from "../images/zombie.png";
import HoboImage from "../images/ailien.png";
import UnrankedImage from "../images/Question_mark.png";

function Navbar() {
  const [rank, setRank] = useState(UnrankedImage);

  useEffect(() => {
    // Define a function to update rank
    localStorage.setItem("numberOfDaysCompleted",90)
    function updateRank() {
      const daysCompleted = parseInt(localStorage.getItem("numberOfDaysCompleted")) || 0;

      if (daysCompleted >= 100) {
        setRank(KingImage);
      } else if (daysCompleted >= 75) {
        setRank(QueenImage);
      } else if (daysCompleted >= 50) {
        setRank(JackImage);
      } else if (daysCompleted >= 25) {
        setRank(HoboImage);
      } else {
        setRank(UnrankedImage);
      }
    }

    // Set up an interval to check and update rank every, for example, 1000 milliseconds (1 second)
    const intervalId = setInterval(updateRank, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);



  return (
    <nav className="nav">
      <Link to="/home" className="site-title">
        <img src={logo} alt="logo" className="profile" />
        <img className="site-title" src={rank} alt="Image has not loaded" style={{ width: 40, height: 40 }} />
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
