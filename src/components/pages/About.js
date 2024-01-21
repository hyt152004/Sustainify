import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'
import nature from '../../images/earthnature.jpg'



function About() {
  return (
    <div className="container">
    <div className="text-box">
      <h2 className="title">What we strive for?</h2>
      <p className="description">Some description text goes here.adjkfakjdfnkandknf
        sadkfknakdfnkjasdnfkjnsafkjndnakfjnksndfkjadnskjnf
        ansdkjfnakjdfnksnfdkajnfkjandksjankjanfkj

        asdnkjfnsakjfdnkasndfkjands
        asndkfjanskdjfnskn
        asndkjfnskdjfnksjdnfkjsdnfksfdnkjsdnfkjsnkfnsdkjf
        sdfnkjsdnfknafkndkjnwewkjfm,dafn,msdnf,sdfnkjsdnfknafkndkjnwewkjfmasdnfjsnke
        dsnakjfnkj
      </p>
    </div>
    <div className="image-box">
      <img src={nature} alt="reference" />
    </div>
  </div>
);
}

export default About;
