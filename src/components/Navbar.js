
import React from "react";
import {Link} from "react-router-dom"
import logo from '../images/logo.png'
import './navbar.css'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light" class="navbar navbar-expand-lg">
    <Container>
      <Link class="navbar-brand" href="#logo">
      <img
            src={logo}
            alt="Your Logo"
            height="50" // You can adjust the height according to your design
            className="d-inline-block align-top"
          />
      </Link>
      <Nav id="navigation-items" className="navbar-nav me-auto">
        <Nav.Item>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about">About Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;