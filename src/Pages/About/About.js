import React, { useEffect } from "react";
import "./About.css";
import hosp from "../../Assets/Images/final-pics/hospital.JPG";
import krish1 from "../../Assets/Images/About/krishnareddy1.jpg";
import krish2 from "../../Assets/Images/About/krishnareddy2.jpg";
import qual from "../../Assets/Images/About/quality.png";
import { RiCloseLine } from "react-icons/ri";
import { RxPlus } from "react-icons/rx";
import Testmonial from "../Testmonials/Testmonial";
import {
  Accordion,
  AccordionContext,
  Card,
  Col,
  Image,
  Row,
  useAccordionButton,
} from "react-bootstrap";
import { useContext } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";

function About() {
  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);

  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <div
        style={{
          padding: "0px",
          border: "none",
          cursor: "pointer",
          display: "flex",
          margin: "0 35px 0 0",
          backgroundColor: "none",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={decoratedOnClick}
      >
        {isCurrentEventKey ? (
          <RiCloseLine size={36} color="#FAFBFC" />
        ) : (
          <RxPlus size={36} color="#FAFBFC" />
        )}
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>About Us</title>
        <link rel="canonical" href="https://visheshcountrycache.tech/about" />
        <meta
          name="description"
          content="Get the best Orthopeadician for your health with Sri chaitanya hospitals."
        />
        <meta
          name="keywords"
          content="visheshcountrycache,ortho hospital, bone fracture, chaitanya hospital,best Insurance provided by hospital in tanuku,About,Contact"
        />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>
      <div className="about_container">
        <Header />
        <div className="about1_cont">
          <Row>
            <Col sm={12} md={8}>
              <h1 className="about_head1">We are Building Better Healthcare</h1>
            </Col>
            <Col>
              <p className="about1_text_p">
                At Sri Chaitanya Ortho & Eye Hospital, we envision a future
                where healthcare is not just about treating illness but also
                about promoting wellness. It is to be a trusted beacon of health
                and happiness, leading the way in compassionate care and patient
                empowerment.
              </p>
            </Col>
          </Row>
        </div>
        <div>
          <Image className="about_img_cont" src={hosp} alt="hospital" />
        </div>
        <h1 className="about_head2">
          We hold the belief that this represents one of most crucial and
          formidable challenges
        </h1>
        <div className="about3_cont">
          <Row>
            <Col sm={12} md={6}>
              <Row>
                <Col sm={12} md={6} className="image1_abt">
                  <Image
                    fluid
                    src={krish2}
                    alt="doctor Krishnareddy"
                    style={{ zIndex: 2 }} // Adjust the zIndex to control the image stacking
                  />
                </Col>
                <Col sm={12} md={6} className="image2_abt">
                  <Image
                    src={krish1}
                    fluid
                    alt="doctor Krishnareddy"
                    style={{ zIndex: 1, width: "500px" }} // Adjust the zIndex to control the image stacking
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <h1 className="about3_head">Who Are We</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                }}
              >
                <div>
                  <p className="about3_p_text">
                    Founded in 1989 by the visionary Dr. S. Krishna Reddy, a
                    pioneering figure in the medical field. His unwavering
                    dedication to providing exceptional healthcare services laid
                    the foundation for what would become a renowned institution.
                  </p>
                </div>
                <div>
                  <p className="about3_p_text">
                    Over the past three decades, Sri Chaitanya Ortho & Eye
                    Hospital has grown from its modest beginnings into a beacon
                    of hope and healing in the region. Dr. S. Krishna Reddy's
                    commitment to delivering compassionate care, coupled with a
                    relentless pursuit of excellence, set the hospital on a
                    trajectory of success.
                  </p>
                </div>
                <div>
                  <p className="about3_p_text">
                    Today, we proudly carry forward Dr. S. Krishna Reddy's
                    legacy under the capable leadership of Dr. S. Varun Reddy, a
                    dedicated Orthopaedic and visionary leader. Our journey has
                    been marked by continuous growth, evolution, and innovation
                    as we strive to meet the ever-evolving healthcare needs of
                    our community.
                  </p>
                </div>
                <div>
                  <p className="about3_p_text">
                    As we reflect on our journey, we are immensely proud of the
                    milestones we have achieved and the lives we have touched.
                    Our history is a testament to our commitment to excellence
                    and our dedication to providing healthcare that goes beyond
                    treatment—it's about fostering wellness and inspiring hope.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="about4_cont">
          <Row>
            <Col sm={12} md={6}>
              <h1 className="about_head1">Elements that Form Our Hospital</h1>
            </Col>
            <Col md={5} sm={12} className="about-scroll">
              <Row>
                <Col md={2}>
                  {" "}
                  <Image
                    className="img-fluid"
                    src={qual}
                    alt="chaitanya hospital"
                  />
                </Col>
                <Col md={10}>
                  {" "}
                  <h2 className="about4_sub_text"> We focus on Quality</h2>
                  <p className="about4_sub_text_p">
                    Quality is our utmost priority. We are dedicated to
                    delivering the highest standard of healthcare services,
                    ensuring that every aspect of your care reflects our
                    unwavering commitment to excellence.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                  {" "}
                  <Image
                    className="img-fluid"
                    src={qual}
                    alt="chaitanya hospital"
                  />
                </Col>
                <Col md={10}>
                  {" "}
                  <h2 className="about4_sub_text"> We are Specialists</h2>
                  <p className="about4_sub_text_p">
                    We specialize in Orthopaedics, Ophthalmology, and Spine. Our
                    hospital is equipped with a team of experts who are deeply
                    knowledgeable and experienced in these fields.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                  {" "}
                  <Image
                    className="img-fluid"
                    src={qual}
                    alt="chaitanya hospital"
                  />
                </Col>
                <Col md={10}>
                  {" "}
                  <h2 className="about4_sub_text"> We are Patient-centric</h2>
                  <p className="about4_sub_text_p">
                    Our hospital revolves around you, the patient. We believe in
                    patient-centric care, tailoring our services to your
                    individual needs. Your comfort and well-being are at the
                    forefront of every decision we make.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className="about5_cont">
        <div className="about_container">
          <Accordion defaultActiveKey="0">
            <Card.Header
              style={{
                backgroundColor: "#3E3E3E",
                borderBottom: "1px solid var(--neutral-100, #FAFBFC)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: "20px 0 27px 0",
                }}
              >
                <h1 className="about_accord_heading">Our Vision</h1>
                <ContextAwareToggle eventKey="0"></ContextAwareToggle>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="about_accord_body">
                Our mission is to empower our community through exceptional
                healthcare, delivering compassionate, patient-centric care in
                orthopaedics, ophthalmology, and neurology. We uphold high
                standards of excellence, foster innovation, and actively engage
                to improve lives.
              </Card.Body>
            </Accordion.Collapse>

            <Card.Header
              style={{
                backgroundColor: "#3E3E3E",
                borderBottom: "1px solid var(--neutral-100, #FAFBFC)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: "20px 0 27px 0",
                }}
              >
                <h1 className="about_accord_heading">Our Mission</h1>
                <ContextAwareToggle eventKey="1"></ContextAwareToggle>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="about_accord_body">
                Our vision extends beyond healthcare; it encompasses an entire
                community transformed into a bastion of health and happiness. We
                aspire to pave the way for a future where every individual,
                regardless of circumstance, enjoys access to compassionate,
                patient-centered care.
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </div>
      </div>
      <div className="about_container">
        <Testmonial />
      </div>

      <Footer />
    </>
  );
}

export default About;
