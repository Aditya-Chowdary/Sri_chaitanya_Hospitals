import React from "react";
import { Accordion, Button, Col, Image, Row } from "react-bootstrap";
import ortho from "../../Assets/Images/ortho.png";
import optha from "../../Assets/Images/optha.png";
import spine from "../../Assets/Images/spine.png";

import "./Services.css";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  return (
    <div className="service_container">
      <div>
        <Row>
          <h1 className="service_maintext">Our Medical Specialities</h1>
        </Row>
        <Row>
          <Col sm={12}>
            <p className="service_text">
              At Sri Chaitanya, we are dedicated to delivering top-notch
              healthcare services tailored to your needs. With a focus on
              Orthopaedics, Ophthalmology, and Spine, we offer a comprehensive
              range of medical expertise, cutting-edge technology, and
              compassionate care to ensure your well-being.
            </p>
          </Col>
        </Row>
      </div>
      <div style={{ width: "100%" }}>
        <Accordion>
          <div
            style={{ gap: "32px", display: "flex", flexDirection: "column" }}
          >
            <div>
              <Accordion.Item className="acordion_item" eventKey="0">
                <Accordion.Header bsPrefix className="acordion">
                  <h1 className="accord_maintext">ORTHOPAEDICS</h1>
                </Accordion.Header>
                <Accordion.Body className="acordion_body">
                  <Row>
                    <Col>
                      <Row>
                        <p className="accord_subtext">
                          Discover our comprehensive orthopedic services
                          designed to help you regain mobility, reduce pain, and
                          enjoy an active life. Our experienced team specializes
                          in bone and joint health, offering cutting-edge
                          treatments and compassionate care.
                        </p>
                      </Row>
                      <Button
                        onClick={() => {
                          navigate("/orthopaedics");
                        }}
                        className="viewmore_btn"
                        variant="outline-dark"
                      >
                        View Services
                      </Button>
                    </Col>
                    <Col md={6} sm={12}>
                      <Image
                        className="centered_imag"
                        src={ortho}
                        alt="ortho"
                      />
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div>
              <Accordion.Item className="acordion_item" eventKey="1">
                <Accordion.Header bsPrefix className="acordion">
                  <h1 className="accord_maintext">OPHTHALMOLOGY</h1>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <Row>
                        <p className="accord_subtext">
                          Experience world-class eye care with our ophthalmology
                          services. From routine eye exams to advanced surgical
                          procedures, we are dedicated to preserving and
                          enhancing your vision. Your sight is our priority.
                        </p>
                      </Row>
                      <Button
                        onClick={() => {
                          navigate("/opthalmology");
                        }}
                        className="viewmore_btn"
                        variant="outline-dark"
                      >
                        View Services
                      </Button>
                    </Col>
                    <Col md={6} sm={12}>
                      <Image
                        className="centered_imag"
                        src={optha}
                        alt="ortho"
                      />
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div>
              <Accordion.Item className="acordion_item" eventKey="2">
                <Accordion.Header className="acordion">
                  <h1 className="accord_maintext">SPINE</h1>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>
                      <Row>
                        <p className="accord_subtext">
                          Your spine health is our utmost priority. Our
                          experienced team is committed to providing
                          personalized care, whether you need routine spinal
                          examinations, treatment for spine-related conditions,
                          or surgical interventions for fixations.
                        </p>
                      </Row>
                      <Button
                        onClick={() => {
                          navigate("/spine");
                        }}
                        className="viewmore_btn"
                        variant="outline-dark"
                      >
                        View Services
                      </Button>
                    </Col>
                    <Col md={6} sm={12}>
                      <Image
                        className="centered_imag"
                        src={spine}
                        alt="ortho"
                      />
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default Services;
