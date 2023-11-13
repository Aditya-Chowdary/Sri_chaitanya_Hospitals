import React, { useEffect, useState } from "react";

import check from "../../Assets/Images/final-pics/contact1.png";
import hall from "../../Assets/Images/final-pics/contact2.png";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import "./Appointment.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";

function Appointment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    specialty: "", // Set a default value
    message: "",
  });

  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);
  // Handle form input changes
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any actions here, e.g., sending the data to a server
    console.log(formData); // Display the form data in the console
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      specialty: "",
      message: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>Book an Appointment</title>
        <link
          rel="canonical"
          href="https://Visheshcountrycache.tech/book_an_appointment"
        />
        <meta
          name="description"
          content="Get the best Orthopeadician for your health with Sri chaitanya hospitals."
        />
        <meta
          name="keywords"
          content="visheshcountrycache,ortho hospital, Eye check, chaitanya hospital,best Eye hospital in tanuku,About,Contact"
        />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>
      <div className="appointment_container">
        <Header />
        <h1 className="app_heading">Contact Us</h1>
        <div className="app_sub_p">
          <p className="app_text_p">
            Reach out to us today to schedule an appointment, inquire about our
            services, or simply get in touch. Our friendly team is here to
            assist you promptly.
          </p>
        </div>

        <Container fluid>
          <Row style={{ padding: "12px" }}>
            <Col sm={12} md={6} style={{ marginRight: "50px" }}>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md controlId="formGridFirstName">
                    <Form.Label className="label">First Name</Form.Label>
                    <Form.Control
                      className="Control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter First Name"
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md controlId="formGridLastName">
                    <Form.Label className="label">Last Name</Form.Label>
                    <Form.Control
                      className="Control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter Last Name"
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md controlId="formGridPhone">
                    <Form.Label className="label">Phone</Form.Label>
                    <Form.Control
                      className="Control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="+91 "
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md controlId="formGridEmail">
                    <Form.Label className="label">E-mail</Form.Label>
                    <Form.Control
                      className="Control"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="Enter Email"
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md controlId="formGridDate">
                    <Form.Label className="label">Date</Form.Label>
                    <Form.Control
                      className="Control"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      type="date"
                      placeholder="DD/MM/YYYY"
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} md controlId="formGridTime">
                    <Form.Label className="label">Time</Form.Label>
                    <Form.Control
                      className="Control"
                      type="time"
                      name="time"
                      onChange={handleInputChange}
                      value={formData.time}
                      placeholder="00:00 AM"
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Select
                      className="Control"
                      name="speciality"
                      value={formData.specialty}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="orthopaedics">orthopaedics</option>
                      <option value="opthalmology">opthalmology</option>
                      <option value="neurology">neurology</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridMessage">
                  <Form.Label className="label">Message</Form.Label>
                  <Form.Control
                    className="Control"
                    as="textarea"
                    rows={8}
                    placeholder="Type here..."
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{ height: "300px" }}
                  />
                </Form.Group>
                <Button className="Control1" variant="dark" type="submit">
                  submit
                </Button>
              </Form>
            </Col>
            <Col
              style={{
                objectFit: "cover",
                height: "auto",
                overflow: "hidden",
                margin: "0px",
              }}
              sm={12}
              md={5}
            >
              <Image
                className="img-fluid"
                src={check}
                alt="varun ortho"
                style={{ borderRadius: "32px", maxHeight: "973px" }}
              />
            </Col>
          </Row>
          <div className="app_card">
            <Row>
              <Col sm={12} md={8} className="app_card_map1">
                <Row>
                  <Col>
                    <h1 className="app_addr_h">Contact Numbers</h1>
                    <p className="app_addr_p">08819 - 229585</p>
                    <p className="app_addr_p">08819 - 229586</p>
                  </Col>
                  <Col>
                    <h1 className="app_addr_h">Email</h1>
                    <p className="app_addr_p">Chaitanyaortho1989@gmail.com</p>
                  </Col>
                </Row>
                <Row>
                  <h1 className="app_addr_h">Address</h1>
                  <p className="app_addr_p">
                    Opp: S.M.V.M Polytechnic College, Vinnakota Vari Street,
                    Sajjapuram, Tanuku, West Godavari District, Andhra Pradesh -
                    534211
                  </p>
                </Row>
              </Col>
              <Col sm={12} md={4}>
                <div className="app_card_map2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.398909398748!2d81.67487247515075!3d16.756817684026867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b7ef9d5faf79%3A0xfbb872df9b28c5a!2sSri%20Chaitanya%20Orthopaedic%20%26%20Eye%20Hospital%20(Formerly%20Dr.%20Krishna%20Reddy%20Hospital)!5e0!3m2!1sen!2sin!4v1698836357529!5m2!1sen!2sin"
                    width="400"
                    height="300"
                    style={{
                      borderRadius: "24px",
                      border: "1px solid var(--neutral-1000, #A1A4AC)",
                    }}
                    title="Google Map of Sri Chaitanya hospitals"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="hallimage-container">
        <Image src={hall} fluid className="centered-img" />
        <div className="centered-text">
          <h2 className="hall_text">Our Commitment to Quality</h2>
          <p className="hall_text_p">
            With a team of dedicated healthcare professionals, wellness experts,
            and passionate individuals, we are committed to providing top-tier
            services and resources that cater to your unique needs.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Appointment;
