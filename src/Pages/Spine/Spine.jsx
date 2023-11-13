import React from "react";
import "./Spine.css";
import { Button, Col, Image, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import spine from "../../Assets/Images/Ortho/spine.jpg";

function Spine() {
  return (
    <>
      <div className="Spine_container">
        <div className="spine-bottom">
          <Header />
        </div>

        <Row style={{ marginBottom: "52px" }}>
          <Col xs={12} md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {" "}
              <h3 className="spine-heading">Spine</h3>
              <div>
                <section className="spine-text">
                  Back pain ranks among the most common health issues affecting
                  a significant number of individuals. Prolonged periods of
                  sitting, a lack of physical activity, and unhealthy work
                  habits are some of the leading factors contributing to back
                  pain. Typically, back pain can be managed with simple
                  medications or exercises. However, when these approaches prove
                  ineffective, and the quality of life is significantly
                  impacted, we may recommend spine surgery to address severe and
                  persistent back pain conditions. Discover the finest back pain
                  treatment options.
                </section>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={spine} alt="joint" className="spine_img" rounded />
          </Col>
        </Row>
        <Row>
          <h1 className="sec_subhead">Special Features:</h1>
        </Row>
        <Row style={{ margin: "40px 0 104px 0" }}>
          <Col>
            <div style={{ gap: "40px" }}>
              <ul>
                <li>
                  <p>Enhance your mobility and move with ease.</p>
                </li>
                <li>
                  <p>Improve your fitness and overall physical health.</p>
                </li>
                <li>
                  <p>Reduce the need for ongoing medication.</p>
                </li>

                <li>
                  <p>Boost workplace productivity and focus.</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Spine;
