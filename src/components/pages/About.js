import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import nature from "../../images/earthnature.jpg";
import earthMelting from "../../images/earth_melting.gif";

function About() {
  return (
    <div className="container">
      <div className="text-box">
        <h2 className="title">What we strive for?</h2>
        <p className="description">
          Sustainify simplifies sustainable living by providing achievable daily
          goals tailored to your lifestyle. From reducing energy consumption to
          adopting eco-friendly shopping habits, our app guides you through
          easy, actionable steps that add up to a significant positive impact.
        </p>
      </div>
      <div className="image-box">
        <img src={nature} alt="reference" />
      </div>
    </div>
  );
}

export default About;
