import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import varun from "../../Assets/Images/varun.png";
import alekhya from "../../Assets/Images/alekhya.png";
import "./Doctors.css";

function Doctors() {
  const doctorsData = [
    {
      name: "Dr.S.Varun Reddy",
      specialization: "M.S(Orthopaedics)",
      image: varun,
      hoverText: (
        <ul>
          <li>
            A highly skilled orthopedic surgeon boasting extensive global
            experience, has dedicated four years to delivering specialized
            services at our Tanuku hospital.
          </li>

          <li>
            Having acquired expertise in shoulder surgery at the renowned
            Cleveland Clinic in the USA, has become a distinguished professional
            in the field.
          </li>

          <li>
            In France's L'IRCOS Hospital, Dr. S. Varun Reddy gained expertise in
            Arthroscopy for shoulders and knees, as well as joint replacement
            surgery.
          </li>

          <li>
            With over 2000 knee and hip replacements and arthroscopic procedures
            performed to international standards, our hospital provides modern
            care in laminar flow theaters, ensuring a quick recovery with
            minimal physiotherapy.
          </li>
        </ul>
      ),
    },
    {
      name: "Dr. S. Alekhya",
      specialization: "M.S. (Ophthalmology)",
      image: alekhya,
      hoverText: (
        <ul>
          <li>
            Dr. S. Alekhya has contributed significantly to the esteemed Aravind
            Eye Hospital in Madurai, where she immersed herself in diverse
            ophthalmological practices, enhancing her skills and understanding.
          </li>

          <li>
            Holding the esteemed title of Fellow in PHACO (FICO), Dr. S. Alekhya
            has devoted herself to advancing her expertise in
            phacoemulsification. This credential not only reflects theoretical
            knowledge but also hands-on experience, placing her at the forefront
            of contemporary practices in ophthalmology.
          </li>
        </ul>
      ),
    },
    // Add more doctors as needed
  ];

  return (
    <div className="doctors_container">
      <div>
        <h1 className="doct_maintext">Meet Our Doctors</h1>
      </div>

      <Row style={{ padding: "15px" }}>
        {doctorsData.map((doctor, index) => (
          <Col md={6} key={index}>
            <div className="card1" data-text={doctor.hoverText}>
              <div className="img_doccont">
                <Image
                  className="centered_imags"
                  src={doctor.image}
                  alt={doctor.name}
                />
                <div className="image-overlay">{doctor.hoverText}</div>
              </div>
            </div>

            <div className="centered_text">
              <h4 className="doct_name">
                {doctor.name} <span>{doctor.specialization}</span>
              </h4>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Doctors;
