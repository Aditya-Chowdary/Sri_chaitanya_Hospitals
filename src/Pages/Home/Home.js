import React, { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import dnalogo from "../../Assets/Images/muscleman.png";
import "./Home.css";
import Contact from "../Contact/Contact";
import Intro from "../Intro/Intro";
import Services from "../Services/Services";
import Doctors from "../Doctors/Doctors";
import Facilities from "../Facilities/Facilities";
import Footer from "../Footer/Footer";

import ScrollText from "../ScrollText/ScrollText";
import Testmonial from "../Testmonials/Testmonial";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";
import { lazy } from "react";
import { Suspense } from "react";
const Scroll = lazy(() => import("../ScrollScreen/Scroll"));

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://visheshcountrycache.tech/home" />
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
      <div className="main_container">
        <Row>
          <Header />
        </Row>
        <Container fluid>
          <Row>
            <Col md={8}>
              <div className="hero_cont_m">
                <h1 className="main_heading">
                  Compassionate Care, Exceptional Results
                </h1>
                <p className="main_text">
                  Empowering You with Resilient Bones and Vision Clarity Beyond
                  Limits
                </p>
                <Button
                  variant="dark"
                  onClick={() => {
                    navigate("/book_an_appointment");
                  }}
                  className="main_Btn"
                >
                  Book an Appointment
                </Button>
              </div>
            </Col>
            <Col md={4}>
              <Image
                className="heros"
                src={dnalogo}
                alt="dr.varun tanuku"
                cover="true"
              />
            </Col>
          </Row>
          <Row>
            <Contact />
          </Row>
          <Row>
            <Intro />
          </Row>
          <Row>
            <Services />
          </Row>
          <Doctors />
        </Container>
        <Facilities />
      </div>

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Scroll />
        </Suspense>
      </div>
      <div>
     
        <ScrollText />
       
      </div>

      <div className="main_container">
        <Testmonial />
      </div>

      <Footer />
    </>
  );
}

export default Home;
