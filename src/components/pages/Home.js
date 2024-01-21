import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import char from "../../images/avatar.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container>
      <div className="homepage">
        <Row>
          <Col md={6}>
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
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <div className="u--pulse">
              <img src={char} alt="character" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Home;

