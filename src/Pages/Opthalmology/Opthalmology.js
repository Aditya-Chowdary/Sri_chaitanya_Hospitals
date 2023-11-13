import React from "react";
import { useEffect } from "react";
import arr from "../../Assets/Images/arrow_dir.png";
import spects from "../../Assets/Images/Optha/spects.png";
import cataract from "../../Assets/Images/Optha/cataract.jpg";
import paceoem from "../../Assets/Images/Optha/phacoemulsification.jpg";
import lasik from "../../Assets/Images/Optha/lasik.jpg";
import icl from "../../Assets/Images/Optha/icls.jpg";
import pytergium from "../../Assets/Images/Optha/pytegrium.jpg";
import retinalinj from "../../Assets/Images/Optha/retinal_inj.png";
import botox from "../../Assets/Images/Optha/botox.jpg";
import clc from "../../Assets/Images/Optha/contact_lens.jpg";
import ortho from "../../Assets/Images/Ortho/shoulder.jpg";
import spine from "../../Assets/Images/Ortho/spine.jpg";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Opthalmology.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useState } from "react";
import LoadSpinner from "../Loading_Spinner/LoadSpinner";
import { Helmet } from "react-helmet";

function Opthalmology() {
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
  const navigateToSpine = () => {
    setLoading(true); // Show loading component
    setTimeout(() => {
      navigate("/spine"); // Simulate navigation delay
      setLoading(false); // Hide loading component after navigation
    }, 2000); // Adjust the delay as needed
  };
  return (
    <>
      {loading ? (
        <LoadSpinner />
      ) : (
        <>
          <Helmet>
            <title>Opthalmology</title>
            <link
              rel="canonical"
              href="https://visheshcountrycache.tech/opthalmology"
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
          <div className="Opthamain_container">
            <div className="Opthoheader_cont">
              <Header />
            </div>
            <Row>
              <Col md={8}>
                <div>
                  <h1 className="optha_heading">Ophthalmology</h1>
                  <section className="opthasec1">
                    Welcome to the Ophthalmology Department at Sri Chaitanya
                    Ortho & Eye Hospital. Your vision is our priority, and we
                    are dedicated to providing you with world-class eye care
                    services. Our team of highly skilled ophthalmologist and
                    staff is committed to preserving and enhancing your eye
                    health. Whether you require routine eye examinations,
                    treatment for eye conditions, or surgical interventions, we
                    are here to deliver exceptional care tailored to your
                    individual needs. Explore our comprehensive ophthalmology
                    services and discover how we can help you achieve and
                    maintain optimal eye health and vision. Your journey to
                    clear, healthy vision starts here.
                  </section>
                </div>
              </Col>
              <Col md={4}>
                <Image
                  src={spects}
                  alt="spectacles"
                  fluid
                  className="optha_spects"
                />
              </Col>
            </Row>
            <Row>
              <h1 className="optha_servicehead">Services We Offer</h1>
            </Row>
            <Row
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <Col xs={12} md={6}>
                <a href="#Cataract_Surgery">
                  <Button variant="light" className="service_buttonOpt">
                    Cataract Surgery{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#Phacoemulsification">
                  <Button variant="light" className="service_buttonOpt">
                    Phacoemulsification{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#LASIK">
                  <Button variant="light" className="service_buttonOpt">
                    LASIK{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#icls">
                  {" "}
                  <Button variant="light" className="service_buttonOpt">
                    Implantable Collamer Lens (ICL){" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
              </Col>
              <Col xs={12} md={6}>
                <a href="#Pterygium">
                  <Button variant="light" className="service_buttonOpt">
                    Pterygium{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#Retinal_Injection">
                  <Button variant="light" className="service_buttonOpt">
                    Retinal Injection{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#Botox_Treatments">
                  <Button variant="light" className="service_buttonOpt">
                    Botox Treatments{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#Contact_Lens_Clinic">
                  {" "}
                  <Button variant="light" className="service_buttonOpt">
                    Contact Lens Clinic{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_optha_icon" />
                    </span>
                  </Button>
                </a>
              </Col>
            </Row>
            <Row style={{ margin: "116px 0 201px 0", width: "90%" }}>
              <Col md={9}>
                <section className="opthasec2">
                  At Sri Chaitanya Ortho & Eye Hospital, our unwavering
                  commitment is to assist you in achieving a life filled with
                  clear vision, free from discomfort and limitations. Reach out
                  to us today to explore our comprehensive ophthalmology
                  services and to arrange a consultation with our expert
                  ophthalmologist. Your path to visual clarity and eye health
                  starts right here.
                </section>
              </Col>
              <Col md={3}>
                <div style={{ marginTop: "15px" }}>
                  <Button
                    onClick={() => {
                      navigate("/book_an_appointment");
                    }}
                    variant="outline-dark"
                    className="service_buttonOpt1"
                  >
                    Book an Appointment
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="Cataract_Surgery" className="sections_divoptha">
              <h1 className="sect_heading">Cataract Surgery</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div>
                      <section className="opthasec2">
                        Cataracts can cloud your vision and impact your quality
                        of life, but there is a solution. Our experienced
                        ophthalmologists specialize in cataract surgery, a safe
                        and highly effective procedure that can restore clear
                        vision.
                      </section>
                    </div>

                    <div>
                      <section className="opthasec2">
                        Whether you're experiencing vision changes or have been
                        diagnosed with cataracts, we are here to guide you
                        through the process. Our state-of-the-art facilities and
                        dedicated medical team ensure that your journey to
                        improved vision is smooth and comfortable. Learn more
                        about cataract surgery at Sri Chaitanya Ortho & Eye
                        Hospital and take the first step toward regaining the
                        world in sharp focus.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={cataract}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="Phacoemulsification" className="sections_divoptha">
              <h1 className="sect_heading">Phacoemulsification</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div>
                      <section className="opthasec2">
                        At Sri Chaitanya Ortho & Eye Hospital, we offer
                        cutting-edge Phacoemulsification services as part of our
                        comprehensive ophthalmology specialty.
                        Phacoemulsification is a state-of-the-art surgical
                        technique used to remove cataracts, restoring clarity to
                        your vision and improving your overall eye health.
                      </section>
                    </div>

                    <div>
                      <section className="opthasec2">
                        Phacoemulsification stands at the forefront of modern
                        surgical techniques, redefining the way we treat
                        cataracts and enhance visual clarity. Cataracts can
                        obscure your world, causing discomfort and hindering
                        your daily activities.
                      </section>
                    </div>
                    <div>
                      <section className="opthasec2">
                        Our highly skilled ophthalmologist perform this
                        minimally invasive procedure with precision, using
                        advanced technology and techniques to ensure the best
                        possible outcomes.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={paceoem}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
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
                        <p>
                          We invest in the latest Phacoemulsification equipment
                          and technology, allowing for precise and efficient
                          removal of cataracts. This technology ensures a safer
                          and more accurate procedure.
                        </p>
                      </li>
                      <li>
                        <p>
                          We understand that every patient is unique. Our
                          ophthalmologists tailor Phacoemulsification treatment
                          plans to meet your individual needs, ensuring you
                          receive the highest level of care.
                        </p>
                      </li>
                      <li>
                        <p>
                          Our commitment to your eye health extends beyond
                          surgery. We provide comprehensive post-operative care
                          to monitor your progress and address any concerns,
                          ensuring optimal results.
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="LASIK" className="sections_divoptha">
              <h1 className="sect_heading">LASIK</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div>
                      <section className="opthasec2">
                        Laser-assisted in situ keratomileusis (LASIK) is a
                        renowned and widely practiced laser refractive surgery
                        designed to address various vision impairments
                        effectively. This procedure offers a liberating
                        alternative to the reliance on glasses or contact
                        lenses.
                      </section>
                    </div>

                    <div>
                      <section className="opthasec2">
                        During the LASIK surgical process, a specialized cutting
                        laser is employed to reshape the cornea, the
                        transparent, dome-shaped tissue located at the front of
                        the eye.
                      </section>
                    </div>
                    <div>
                      <section className="opthasec2">
                        LASIK surgery goes a step further by reshaping the
                        cornea itself. This reshaping not only provides the
                        necessary refraction for vision correction but also
                        offers individuals greater freedom from their optical
                        aids.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={lasik}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="icls" className="sections_divoptha">
              <h1 className="sect_heading">
                Implantable Collamer Lenses (ICLs)
              </h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div>
                      <section className="opthasec2">
                        Implantable Collamer® Lens (ICL) surgery means that a
                        lens implant in your eye goes between your iris and your
                        natural lens. It can treat refractive errors, so you’ll
                        no longer need contact lenses or glasses. Your surgeon
                        will need to examine you and measure your eyes to see if
                        you’re eligible for ICL surgery.
                      </section>
                    </div>

                    <div>
                      <section className="opthasec2">
                        Collamer lenses, a blend of plastic and collagen, offer
                        a lightweight, hydrophilic option that promotes optimal
                        eye health by allowing gases and nutrients to pass
                        through efficiently. The EVO Implantable Collamer Lens
                        eliminates the need for a pre-surgery laser iridotomy,
                        thanks to its built-in central hole, ensuring a
                        smoother, hassle-free procedure.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={icl}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="Pterygium" className="sections_divoptha">
              <h1 className="sect_heading">Pterygium Surgery</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div>
                      <section className="opthasec2">
                        Pterygium, a pink, fleshy growth on the eye's surface,
                        can cause discomfort and vision issues. Our skilled
                        ophthalmologists at Sri Chaitanya Ortho & Eye Hospital
                        specialize in pterygium surgery, a procedure designed to
                        relieve these symptoms and restore eye health.
                      </section>
                    </div>

                    <div>
                      <section className="opthasec2">
                        Our surgical approach involves the precise removal of
                        the pterygium while minimizing disruption to the
                        surrounding tissue. This outpatient procedure ensures
                        minimal inconvenience for you. To prevent recurrence, we
                        employ techniques such as tissue grafting.
                      </section>
                    </div>
                    <div>
                      <section className="opthasec2">
                        We prioritize your comfort and vision throughout the
                        process, offering comprehensive pre-operative and
                        post-operative care. With pterygium surgery at our
                        hospital, you can look forward to improved eye health
                        and clearer vision.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={pytergium}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="Retinal_Injection" className="sections_divoptha">
              <h1 className="sect_heading">Retinal Injection</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div>
                      <section className="opthasec2">
                        Retinal injections, a vital component of our
                        ophthalmology services at Sri Chaitanya Ortho & Eye
                        Hospital, offer a precise and effective treatment option
                        for a range of retinal conditions. These injections are
                        administered by our skilled ophthalmologists to address
                        issues such as age-related macular degeneration (AMD),
                        diabetic retinopathy, and retinal vein occlusions.
                      </section>
                    </div>

                    <div>
                      <section className="opthasec2">
                        Our retinal injections precisely deliver medication to
                        the affected area, minimizing side effects and
                        maximizing therapeutic benefits. Patient comfort and
                        safety are our top priorities, supported by thorough
                        pre-injection evaluations and post-injection care. We're
                        dedicated to preserving and enhancing your vision,
                        promoting overall eye health.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={retinalinj}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="Botox_Treatments" className="sections_divoptha">
              <h1 className="sect_heading">Botox Treatment</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div>
                      <section className="opthasec2">
                        Our Eye Botox Treatment at Sri Chaitanya Ortho & Eye
                        Hospital offers a rejuvenating solution for various
                        eye-related concerns. This specialized procedure
                        involves the targeted application of Botox injections
                        around the eyes to address issues such as eyelid spasms,
                        crow's feet, and excessive blinking.
                      </section>
                    </div>
                    <div>
                      <section className="opthasec2">
                        By utilizing the precision of Botox injections, our
                        skilled ophthalmologist can relax the muscles
                        responsible for these concerns, resulting in smoother
                        and more youthful-looking eye areas. This treatment not
                        only enhances your appearance but also provides relief
                        from discomfort caused by spasms and excessive blinking.
                      </section>
                    </div>
                    <div>
                      <section className="opthasec2">
                        Patient safety and comfort are paramount during the Eye
                        Botox Treatment process. Our experienced medical team
                        ensures comprehensive pre-treatment evaluations and
                        offers post-treatment care to optimize results.
                        Rediscover the vibrancy of your eyes with our Eye Botox
                        Treatment, designed to refresh your look and boost your
                        confidence.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={botox}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Opthamain_container">
            <div id="Contact_Lens_Clinic" className="sections_divoptha">
              <h1 className="sect_heading">Contact Lens Clinic</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col xs={12} md={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div>
                      <section className="opthasec2">
                        Discover clear, comfortable vision at our Contact Lens
                        Clinic at Sri Chaitanya Ortho & Eye Hospital. Our
                        specialized clinic offers a wide range of contact lens
                        options to suit your specific vision needs, from
                        nearsightedness to astigmatism and more. Our experienced
                        optometrist conduct thorough examinations to ensure the
                        right fit and provide expert guidance on lens selection
                        and care. We're here to make your transition to contact
                        lenses seamless and ensure your visual well-being.
                        Experience the freedom of clear vision with personalized
                        care at our Contact Lens Clinic.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={clc}
                    alt="joint"
                    className="centered_img"
                    rounded
                  />
                </Col>
              </Row>
            </div>
          </div>
          <hr />
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
                        Your vision is our priority, and we are dedicated to
                        providing you with world-class eye care services. Our
                        team of highly skilled ophthalmologist and staff is
                        committed to preserving and enhancing your eye health.
                        Whether you require routine eye examinations, treatment
                        for eye conditions, or surgical interventions, we are
                        here to deliver exceptional care tailored to your
                        individual needs.
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
                        src={spine}
                        alt="joint"
                        className="centered_img"
                        rounded
                      />
                    </div>

                    <div>
                      <h1 className="sect_heading">Spine</h1>
                      <section className="orthosec2">
                        Your spine health is our utmost priority. Our
                        experienced team is committed to providing personalized
                        care, whether you need routine spinal examinations,
                        treatment for spine-related conditions, or surgical
                        interventions for fixations. Trust us for best spine
                        care tailored to your individual needs and focused on
                        enhancing your overall well-being
                      </section>
                      <div>
                        <Button
                          onClick={navigateToSpine}
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
        </>
      )}
      <Footer />
    </>
  );
}

export default Opthalmology;
