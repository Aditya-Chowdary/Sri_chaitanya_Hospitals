import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import varun from "../../Assets/Images/varun.png";
import alekhya from "../../Assets/Images/alekhya.png";
import "./Doctors.css";

function Doctors() {
  return (
    <div className="doctors_container">
      <div>
        <h1 className="doct_maintext">Meet Our Doctors</h1>
      </div>

      <Row style={{ padding: "15px" }}>
        <Col md={6}>
          <Card className="card1">
            <div className="img_doccont">
              <Image
                className="centered_imags"
                src={varun}
                alt="Doctor Varun"
              />
            </div>
          </Card>

          <div className="centered_text">
            <h4 className="doct_name">
              Dr.S.Varun Reddy <span>M.S(Orthopaedics)</span>
            </h4>
            <p>Trauma, Arthroscopy and Joint Replacement Surgeon</p>
            <p>
              Fellow in Joint Replacement Surgery, Sunshine Hospitals, Hyderabad
            </p>
            <p>Fellow in Shoulder and Knee Surgery, LIRCOS, France</p>
            <p>Shoulder Surgery, Cleveland Clinic, U.S.A</p>
          </div>
        </Col>
        <Col md={6}>
          <Card className="card1">
            <div className="img_doccont">
              <Image
                className="centered_imags"
                src={alekhya}
                alt="Doctor Alekhya"
              />
            </div>
          </Card>

          <div className="centered_text">
            <h2 className="doct_name">
              Dr. S. Alekhya <span>M.S. (Ophthalmology)</span>
            </h2>
            <p>FICO, Fellow IN PHACO</p>

            <p>(Aravind Eye Hospital, Madurai)</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Doctors;
