import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import card1 from "../../images/card1.png"
import card2 from "../../images/card2.png"
import card3 from "../../images/card3.png"
import nature from "../../images/earthnature.jpg";
import earthMelting from "../../images/earth_melting.gif";


function About() {
  return (
    <div className="about">
        <h1>We are...</h1>

    
      <div className="cards-container">

        <img src={card1} alt="Card 1" className="cards" />
      
        <img src={card2} alt="Card 2" className="cards" />

        <img src={card3} alt="Card 3" className="cards" />

      </div>
    </div>
  );
}

export default About;