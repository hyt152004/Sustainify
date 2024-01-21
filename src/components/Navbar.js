import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
<<<<<<< HEAD
  
=======

>>>>>>> 6d7ed1ddd6a4427176c06abdeba910f148d1f44e
<Navbar bg="light" data-bs-theme="light">
<Container class="d-flex justify-content-between align-items-center">
<Link to="/home" className="site-title me-5">
  <Navbar.Brand href="#logo">
    <img
      className="logo"
      src={logo}
      alt="Your Logo"
      height="50"
      class="d-inline-block align-top"
    />
  </Navbar.Brand>
  </Link>
  <Nav className="me-auto home t">
  <Link to="/home">
    <Nav.Link href="tohome" class="me-5">Home</Nav.Link>
    </Link>
    <Link to="/about">
    <Nav.Link href="#about" className="aboutus ps-5">About Us</Nav.Link>
    </Link>
    <Link to="/main">
    <Nav.Link href="#main " className="main ps-5">Main</Nav.Link>
    </Link>
  </Nav>
</Container>
</Navbar>
);
}

export default NavBar;
