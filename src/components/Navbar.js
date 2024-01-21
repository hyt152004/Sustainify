import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import earthMelting from "../images/earth_melting.gif";

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container className="d-flex justify-content-between align-items-center">
        <Link to="/home" className="site-title me-5">
          <Navbar.Brand href="#logo">
            <img
              src={logo}
              alt="Your Logo"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Link>
        <Nav className="me-auto home t">
          <Link to="/home" className="me-5">
            Home
          </Link>
          <Link to="/about" className="aboutus ps-5">
            About Us
          </Link>
          <Link to="/main" className="main ps-5">
            Main
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
