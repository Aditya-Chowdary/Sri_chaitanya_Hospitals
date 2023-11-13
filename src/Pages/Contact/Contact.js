import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import lord1 from "../../Assets/Images/locatioin_con.png";
import lord2 from "../../Assets/Images/timings_icon.png";
import lord3 from "../../Assets/Images/call_icon.png";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <Row className="card_container">
        <Col md={4} >
          <Card className="card_contact">
          <Row className="icon_contact">
              <div className="img_back">
            <Image className="centeraed_imgs" src={lord1} alt='varun'/>
            </div>
            </Row>
            <Row className="contact_group">
              <h2 className="contact_h2">Visit Us</h2>
              <div className="contact_content">
                <p className="contact_content">Opp: S.M.V.M Polytechnic College, </p>
                <p className="contact_content">Vinnakota Vari Street,Sajjapuram</p>
                <p className="contact_content">Tanuku, Andhra Pradesh</p>
              </div>
              <p className="contact_link">View on google map</p>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card_contact">
            <Row className="icon_contact">
              <div className="img_back">
            <Image className="centeraed_imgs" src={lord3} alt='varun'/>
            </div>
            </Row>
            <Row className="contact_group">
              <h2 className="contact_h2">Contact Us</h2>
              <div className="contact_content">
                <section className="contact_content">08819 - 229585</section>
                <p className="contact_content">08819 - 229586</p>
              </div>
              <label className="contact_label">E-mail:</label>
              <p className="contact_links">chaitanyaortho1989@gmail.com</p>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card_contact">
          <Row className="icon_contact">
              <div className="img_back">
            <Image className="centeraed_imgs" src={lord2} alt='varun'/>
            </div>
            </Row>
            <Row className="contact_group">
              <h2 className="contact_h2">Working Hours</h2>
              <div className="contact_content">
                <section className="contact_content">Monday-Saturday</section>
                <section className="contact_content">9:00 AM - 2:00 PM</section>
                <p className="contact_content">5:00 PM - 8:00 PM</p>
              </div>
              <p className="contact_links">24/7 Emergency Services</p>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
