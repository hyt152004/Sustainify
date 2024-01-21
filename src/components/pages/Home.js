import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import char from "../../images/avatar.png";

function Home() {
  return (
    <div className="homepage">
      <div className="container">
        <div className="leftside">
          <div className="title">
            <ul>Set your goal,</ul>
            <ul>Do your work,</ul>
            <ul>Save the Earth</ul>
          </div>
          <div className="Buttons">
            <Link to="/main" className="button">
              Challenge yourself!
            </Link>
            <Link to="/about" className="button">
              Who are we?
            </Link>
          </div>
        </div>

        <div className="u--pulse">
          <img src={char} alt="character" />
        </div>
      </div>
    </div>
  );
}

export default Home;
