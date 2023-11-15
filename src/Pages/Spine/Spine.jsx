import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Spine.css";
import { Button, Col, Image, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import spine from "../../Assets/Images/Ortho/spine.jpg";
import ortho from "../../Assets/Images/Ortho/shoulder.jpg";
import opth from "../../Assets/Images/opthalmology.jpg";
import LoadSpinner from "../Loading_Spinner/LoadSpinner";

function Spine() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);
  const navigateToOrthopaedics = () => {
    setLoading(true); // Show loading component
    setTimeout(() => {
      navigate("/orthopaedics"); // Simulate navigation delay
      setLoading(false); // Hide loading component after navigation
    }, 2000); // Adjust the delay as needed
  };
  const navigateToOphthalmology = () => {
    setLoading(true); // Show loading component
    setTimeout(() => {
      navigate("/opthalmology"); // Simulate navigation delay
      setLoading(false); // Hide loading component after navigation
    }, 2000); // Adjust the delay as needed
  };
  return (
  <>
      {loading ? (<LoadSpinner />) : (
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
          <div className="Orthomain_container">
            <div className="Otherspecs">
              <h1 className="spect_heading">Explore Other Specialties</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col sm={12} md={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div style={{ height: "520px", overflow: "hidden" }}>
                      <Image
                        src={ortho}
                        alt="joint"
                        className="centered_img"
                        rounded
                      />
                    </div>
  
                    <div>
                      <h1 className="sect_heading">Orthopaedics</h1>
                      <section className="orthosec2">
                        We prioritize your musculoskeletal health, offering
                        exceptional orthopaedic care. Our skilled team is
                        dedicated to preserving and enhancing your bone and joint
                        well-being, providing tailored services, from routine
                        assessments to advanced interventions and surgeries
                      </section>
                    </div>
                    <div>
                      <Button
                        onClick={navigateToOrthopaedics}
                        className="service_button1"
                        variant="outline-dark"
                      >
                        View More
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div style={{ height: "520px", overflow: "hidden" }}>
                      <Image
                        src={opth}
                        alt="joint"
                        className="centered_img"
                        rounded
                      />
                    </div>
  
                    <div>
                      <h1 className="sect_heading">Ophthalmology</h1>
                      <section className="orthosec2">
                        Your vision is our priority, and we are dedicated to
                        providing you with world-class eye care services. Our team
                        of highly skilled ophthalmologist and staff is committed
                        to preserving and enhancing your eye health. Whether you
                        require routine eye examinations, treatment for eye
                        conditions, or surgical interventions, we are here to
                        deliver exceptional care tailored to your individual
                        needs.
                      </section>
                      <div>
                        <Button
                          onClick={navigateToOphthalmology}
                          className="service_button1"
                          variant="outline-dark"
                        >
                          View More
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
              </div>
              </div> </>
     )}
        
      
        <Footer />
   </>
   
  )
}

export default Spine;
