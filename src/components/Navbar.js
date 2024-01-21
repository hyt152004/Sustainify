
import React from "react";
import {Link} from "react-router-dom"
import logo from '../images/logo.png'
import './navbar.css'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#">
          <img class = "logo "
            src= {logo}
            alt="Your Logo"
            height= "50" // You can adjust the height according to your design
            className="d-inline-block align-top me-3"
          />
          </Navbar.Brand>
          <Nav className="me-auto home">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about" class="aboutus">About Us</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
  );
}

export default ColorSchemesExample;