import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Intro.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Intro() {
  const navigate = useNavigate();
  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);
  return (
    <Container className="intro_container">
      <Row>
        <Col md={7}>
          <h1 className="maintext_intro">Experienced and Up-to-Date</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col md={7} sm={12}>
          <h1 className="subtext_intro">Since 1989</h1>
          <p className="subtext_text">
            We're a passionate team dedicated to guiding you towards a life of
            vitality and well-being. With a deep commitment to holistic health,
            we merge expert knowledge with a personalized approach to empower
            your journey.
          </p>
        </Col>
        <Col md={5}>
          <Row>
            <Col>
              <h1>10K+</h1>
              <p>Happy Patients</p>
            </Col>
            <Col>
              <h1>34+</h1>
              <p>Years of Excellence</p>
            </Col>
          </Row>

          <Button
            onClick={() => {
              navigate("/about");
            }}
            className="intro_btn"
            variant="outline-dark"
          >
            About Us
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
