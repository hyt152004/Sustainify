import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import nature from "../../images/earthnature.jpg";

function About() {
  return (
    <div className="container">
      <div className="text-box">
        <h2 className="title">What we strive for?</h2>
        <p className="description">
          Once upon a time a little small weak and hopeless boy named david lived. He lived everyday as if life was meaningless.
          However, one day the little boy david met his amazing friends Dayna and Justin. They always carried david wherever he went such that
          his life would brighten up once again. Dayna and Justin were great positive influences to David's life. Fortunately for david
          as his friends lifted his spirit, he gained wealth over the years. Then, to repay the dept he owned to Dayna and Justin, he gave all
          his earning to them. However, Justin and Dayna were already too rich that his wealth meant nothing. However, they still took the money
          and made david broke again. In the end, david was now a small, weak, wealthless, yet hopeful boy.
        </p>
      </div>
      <div className="image-box">
        <img src={nature} alt="reference" />
      </div>
    </div>
  );
}

export default About;
