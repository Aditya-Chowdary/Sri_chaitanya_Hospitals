import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import hip from "../../Assets/Images/hipjoint.png";
import arr from "../../Assets/Images/arrow_dir.png";
import jointpreserve from "../../Assets/Images/Ortho/jointpreserve.jpg";
import trauma from "../../Assets/Images/Ortho/trauma.jpg";
import spine from "../../Assets/Images/Ortho/spine.jpg";
import deformity from "../../Assets/Images/Ortho/deformity.jpg";
import illizarov from "../../Assets/Images/Ortho/illizarov.jpg";
import sports from "../../Assets/Images/Ortho/sports.jpg";
import nonunion from "../../Assets/Images/Ortho/nonunion.jpg";
import jointrepl from "../../Assets/Images/Ortho/ortho_jointreplacement.jpg";
import opthalmology from "../../Assets/Images/opthalmology.jpg";
import "./Orthopaedic.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/Header";
import { useState } from "react";
import LoadSpinner from "../Loading_Spinner/LoadSpinner";
import { Helmet } from "react-helmet";

function Orthopaedic() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);
  const navigateToOpthalmology = () => {
    setLoading(true); // Show loading component
    setTimeout(() => {
      navigate("/opthalmology"); // Simulate navigation delay
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
      <Helmet>
        <title>Orthopaedics</title>
        <link
          rel="canonical"
          href="https://visheshcountrycache.tech/orthopaedics"
        />
        <meta
          name="description"
          content="Get the best Orthopeadician for your health with Sri chaitanya hospitals."
        />
        <meta
          name="keywords"
          content="visheshcountrycache,ortho hospital, knee fracture, chaitanya hospital,best Ortho hospital in tanuku,bones,krishnareddy hospital"
        />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>
      {loading ? (
        <LoadSpinner />
      ) : (
        <>
          <div className="Orthomain_container">
            <div className="Orthoheader_cont">
              <Header />
            </div>

            <Row>
              <Col md={8}>
                <div>
                  <h1 className="ortho_heading">Orthopaedics</h1>
                  <section className="orthosec1">
                    We pride ourselves on providing extensive inpatient and
                    outpatient orthopaedic services. Our orthopaedic surgeon and
                    staff are dedicated to helping you both understand your
                    procedure and get back to your life.
                  </section>
                  <section className="orthosec2">
                    Chronic musculoskeletal conditions, such as joint pain and
                    bursitis, exert their influence on the musculoskeletal
                    system, primarily affecting the bones and joints. They have
                    the potential to induce discomfort and impaired
                    functionality, making everyday activities challenging. These
                    conditions differ from acute musculoskeletal injuries, such
                    as a shoulder dislocation or a broken bone, which are often
                    the result of sudden trauma. In contrast to accidental or
                    traumatic orthopaedic injuries, chronic conditions tend to
                    progress gradually, worsening or evolving over time. They
                    may be attributed to genetic factors, aging, or overuse.
                  </section>
                </div>
              </Col>
              <Col md={4}>
                <Image src={hip} alt="hipjoint" className="ortho_hip" />
              </Col>
            </Row>
            <Row>
              <h1 className="ortho_servicehead">Services We Offer</h1>
            </Row>
            <Row
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <Col sm={12} md={6}>
                <a href="#joint_replace">
                  <Button variant="light" className="service_buttonOrth">
                    Joint Replacement{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#joint_preserving">
                  <Button variant="light" className="service_buttonOrth">
                    Joint Preserving Surgeries{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#trauma&Accident">
                  <Button variant="light" className="service_buttonOrth">
                    Trauma & Accident{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>

                <a href="#Deformity_Correction_Surgeries">
                  <Button variant="light" className="service_buttonOrth">
                    Deformity Correction Surgeries{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>
              </Col>
              <Col sm={12} md={6}>
                <a href="#Non_Union_Surgeries">
                  <Button variant="light" className="service_buttonOrth">
                    Non-union Surgeries{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#Illizarov_Surgeries">
                  <Button variant="light" className="service_buttonOrth">
                    Illizarov Surgeries{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#Sports_Medicine&Keyhole_Services">
                  <Button variant="light" className="service_buttonOrth">
                    Sport Medicine & Arthroscope
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>
                {/* <a href="#Shoulder_Surgery">
                  {" "}
                  <Button variant="light" className="service_buttonOrth">
                    Shoulder{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a>
                <a href="#Orthoscope">
                  <Button variant="light" className="service_buttonOrth">
                    Orthoscope{" "}
                    <span style={{ float: "right" }}>
                      <Image src={arr} className="arr_ortho_icon" />
                    </span>
                  </Button>
                </a> */}
              </Col>
            </Row>
            <Row style={{ margin: "116px 0 201px 0", width: "90%" }}>
              <Col md={9}>
                <section className="orthosec2">
                  At Sri Chaitanya Ortho & Eye Hospital, we are committed to
                  helping you achieve a pain-free, active, and fulfilling life.
                  Contact us today to learn more about our orthopaedic services
                  and to schedule a consultation with our experts. Your journey
                  to orthopaedic excellence begins here.
                </section>
              </Col>
              <Col md={3}>
                <div>
                  <Button
                    onClick={() => {
                      navigate("/book_an_appointment");
                    }}
                    variant="outline-dark"
                    className="service_button1"
                  >
                    Book an Appointment
                  </Button>
                </div>
              </Col>
            </Row>
            <div id="joint_replace" className="sections_div">
              <h1 className="orthosect_heading">Joint Replacement</h1>
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
                      <section className="orthosec2">
                        We offer comprehensive joint replacement services. Our
                        facility specializes in surgical interventions for knee,
                        hip, and shoulder joint replacements. We prioritize
                        preoperative and postoperative care for patients
                        undergoing joint replacement surgeries, ensuring their
                        comfort and well-being throughout their treatment
                        journey.
                      </section>
                    </div>

                    <div>
                      <section className="orthosec2">
                        Our team includes highly skilled physiotherapists who
                        are committed to aiding patients in their rehabilitation
                        and physiotherapy needs. Our dedicated doctors work
                        closely with patients post-surgery to help them regain
                        strength and mobility, ensuring a successful recovery.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={jointrepl}
                    alt="joint"
                    className="orthocentered_img"
                    rounded
                  />
                </Col>
              </Row>
              <Row>
                <h1 className="sec_subhead">Surgeries Include:</h1>
              </Row>
              <Row style={{ margin: "40px 0 104px 0" }}>
                <Col>
                  <div style={{ gap: "40px" }}>
                    <ul>
                      <li>
                        <p>Primary Total Knee, Hip, and Shoulder Replacement</p>
                      </li>
                      <li>
                        <p>Computer Aided Hip & Knee Navigation Surgeries</p>
                      </li>
                      <li>
                        <p>Partial/Unicondylar Knee Replacements</p>
                      </li>

                      <li>
                        <p>Primary Total Hip Replacements</p>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div style={{ gap: "40px" }}>
                    <ul>
                      <li>
                        <p>Revision Joint Replacements</p>
                      </li>
                      <li>
                        <p>Revision Hip Replacements</p>
                      </li>
                      <li>
                        <p>Reverse Shoulder</p>
                      </li>
                    </ul>
                  </div>
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
                          Ensures optimal joint health, free from damage and
                          disease.
                        </p>
                      </li>
                      <li>
                        <p>Alleviates pain and enhances joint functionality.</p>
                      </li>
                      <li>
                        <p>Enhances walking and overall mobility.</p>
                      </li>

                      <li>
                        <p>
                          Provides top-notch post-operative care, minimizing the
                          risk of recurrence.
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Orthomain_container">
            <div id="joint_preserving" className="sections_div">
              <h1 className="orthosect_heading">Joint Preserving Surgeries</h1>
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
                      <section className="orthosec2">
                        Knee osteoarthritis presents significant challenges and
                        can be a disabling condition. In many cases, joint
                        replacement surgery is considered as a solution for knee
                        pain. However, we prioritize Joint Preservation
                        surgeries, particularly for active, young adults
                        experiencing knee pain. These procedures are designed to
                        preserve the integrity of the natural joint, allowing
                        patients to enjoy a full range of activities, including
                        sitting on the ground and squatting, while returning to
                        a normal and pain-free life.
                      </section>
                    </div>

                    <div>
                      <section className="orthosec2">
                        Our procedures include High Tibial Osteotomy (HTO),
                        Osteochondral Autologous Transfer Surgery (OATS), Bone
                        Marrow Aspirate Concentrate (BMAS), and Micro Fracturing
                        which not only provides effective pain relief also slows
                        down the degeneration process, enabling a healthy and
                        active lifestyle.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={jointpreserve}
                    alt="joint"
                    className="orthocentered_img"
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
                        <p>A rapidly evolving discipline within orthopedics.</p>
                      </li>
                      <li>
                        <p>
                          Effective in staving off or delaying the onset of
                          osteoarthritis.
                        </p>
                      </li>
                      <li>
                        <p>
                          Comprehensive removal of pain-inducing factors within
                          the knee.
                        </p>
                      </li>

                      <li>
                        <p>
                          Enhances a patient's range of motion in both the
                          patellofemoral and tibiofemoral joints.
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Orthomain_container">
            <div id="trauma&Accident" className="sections_div">
              <h1 className="orthosect_heading">Trauma & Accident</h1>
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
                      <section className="orthosec2">
                        We deeply comprehend the profound impact that accidents
                        and traumatic injuries can have, abruptly altering the
                        course of one's life. Our Trauma and Accident Care
                        division is not just a service but a commitment – a
                        steadfast dedication to delivering immediate and
                        comprehensive orthopedic care to individuals who have
                        faced the sudden challenges of accidents, injuries, or
                        fractures.
                      </section>
                    </div>

                    <div>
                      <section className="orthosec2">
                        With a rich legacy of over 30 years in this field, we
                        have evolved into a dependable lifeline, providing
                        unwavering support to countless patients on their
                        journey to not just regain their mobility but also
                        reclaim the quality and essence of life they cherish.
                        Our experience has taught us that in the face of
                        adversity, it's not just about mending bones; it's about
                        mending lives.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={trauma}
                    alt="joint"
                    className="orthocentered_img"
                    rounded
                  />
                </Col>
              </Row>
              <Row>
                <h1 className="sec_subhead">We Take Care of:</h1>
              </Row>
              <Row style={{ margin: "40px 0 104px 0" }}>
                <Col>
                  <div style={{ gap: "40px" }}>
                    <ul>
                      <li>
                        <p>Complex Trauma Cases.</p>
                      </li>
                      <li>
                        <p>Open injuries & Poly trauma.</p>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div style={{ gap: "40px" }}>
                    <ul>
                      <li>
                        <p>Fracture Fixations</p>
                      </li>
                      <li>
                        <p>Minimal Access Trauma Surgery</p>
                      </li>
                    </ul>
                  </div>
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
                          Immediate pre-hospital care provided by our dedicated
                          emergency services personnel.
                        </p>
                      </li>
                      <li>
                        <p>
                          Conducting a thorough Primary Survey (following ATLS
                          protocols) to swiftly assess and prioritize critical
                          needs.
                        </p>
                      </li>
                      <li>
                        <p>
                          Comprehensive Secondary Survey to ensure a detailed
                          evaluation of injuries and conditions.
                        </p>
                      </li>

                      <li>
                        <p>
                          In-depth Tertiary Survey to assess and address any
                          additional concerns, ensuring a holistic approach to
                          care.
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <hr />
          <div className="Orthomain_container">
            <div id="Deformity_Correction_Surgeries" className="sections_div">
              <h1 className="orthosect_heading">
                Deformity Correction Surgeries
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
                      <section className="orthosec2">
                        Bone deformities can result from a variety of factors,
                        including abnormal growth during childhood or
                        misalignment during the healing of fractures.
                        Frequently, these deformities involve combinations of
                        multiple components, demanding precise correction.
                      </section>
                    </div>

                    <div>
                      <section className="orthosec2">
                        We employ advanced tools like computer software-assisted
                        devices to meticulously plan and execute corrections.
                        Our approach often involves gradual adjustments using
                        minimally invasive techniques to achieve optimal
                        outcomes. One innovative method we utilize is the
                        Hexapod External Fixator, capable of simultaneously
                        correcting a majority of deformity components through a
                        six-axis correction principle. This computer-assisted
                        correction method relies on software guidance for
                        precise adjustments.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={deformity}
                    alt="joint"
                    className="orthocentered_img"
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
                          Useful in patients with post injury deformities and
                          patients with deformities present from birth
                        </p>
                      </li>
                      <li>
                        <p>
                          Our deformity correction surgeries prioritize
                          precision, ensuring that deformities are accurately
                          addressed and corrected for improved function and
                          aesthetics.
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Orthomain_container">
            <div id="Non_Union_Surgeries" className="sections_div">
              <h1 className="orthosect_heading">Non-Union Surgeries</h1>
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
                      <section className="orthosec2">
                        Fractured bones can encounter issues related to healing,
                        alignment, or infection.
                      </section>
                    </div>

                    <div>
                      <section className="orthosec2">
                        Non-union refers to a situation where the bone fails to
                        heal correctly, resulting in persistent pain and
                        instability. In such intricate cases, solutions
                        involving reconstruction and limb lengthening are
                        considered, often utilizing advanced techniques such as
                        the Illizarov method, as well as fixators like LRS (Limb
                        Reconstruction System) and the Hexapod fixator—a
                        versatile computer-assisted system capable of six-axis
                        correction.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={nonunion}
                    alt="joint"
                    className="orthocentered_img"
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
                          Nonunion differs from delayed union, requiring
                          distinct considerations.
                        </p>
                      </li>
                      <li>
                        <p>
                          Surgical interventions are determined based on the
                          specific type of nonunion observed in each case,
                          ensuring a tailored treatment approach.
                        </p>
                      </li>
                      <li>
                        <p>
                          Nonunion often occurs due to factors like insufficient
                          nutrition, compromised blood supply, and instability
                          at the fracture site.
                        </p>
                      </li>
                      <li>
                        <p>
                          The primary goal is to restore stability at the
                          fracture site, facilitating successful bone healing.
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Orthomain_container">
            <div id="Illizarov_Surgeries" className="sections_div">
              <h1 className="orthosect_heading">Illizarov Surgeries</h1>
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
                      <section className="orthosec2">
                        The Illizarov fixator or the ring fixator is an
                        apparatus applied externally so that the bone ends can
                        be moved and adjusted from outside as and when required.
                      </section>
                    </div>

                    <div>
                      <section className="orthosec2">
                        The flexibility of the Illizarov technique is its
                        biggest advantage and ensures the desired result. A
                        better understanding of the principles of Illizarov
                        technique made us use other options of using fixators
                        like other than the ring fixator e.g. Dynamic Uniplanar
                        Fixators – Orthofix, LRS (Limb Reconstruction System),
                        Hexapod fixator (the versatile computer aided six-axis
                        correction system). The method of fixation, the type of
                        fixator their advantages & disadvantages, clinical
                        condition, personal needs, and aspirations are kept in
                        mind before deciding on surgery. We believe in designing
                        individualized solution for every patient in these
                        complex situations.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={illizarov}
                    alt="joint"
                    className="orthocentered_img"
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
                          Preserves essential osteogenic elements within the
                          limb.
                        </p>
                      </li>
                      <li>
                        <p>
                          Stimulates bone growth via distraction osteogenesis.
                        </p>
                      </li>
                      <li>
                        <p>
                          Applied in cases of congenital deformities, joint or
                          bone infection, and trauma.
                        </p>
                      </li>
                      <li>
                        <p>
                          Utilizes a tissue-preserving cortical
                          osteotomy-osteoclasis technique.
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <div className="Orthomain_container">
            <div id="Sports_Medicine&Keyhole_Services" className="sections_div">
              <h1 className="orthosect_heading">
                Sports Medicine and Arthroscope (Keyhole Services)
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
                      <section className="orthosec2">
                        Specializing in preventing and managing sports-related
                        injuries, our service caters to diverse clients, from
                        elite athletes to active individuals. Our focus is on a
                        swift return to sports, with a dedicated team addressing
                        musculoskeletal injuries. Operating in a
                        multidisciplinary framework, our team includes sports
                        doctors, physiotherapists, and nurse clinicians,
                        ensuring tailored treatment aligned with individual
                        needs.
                      </section>
                    </div>

                    <div>
                      <section className="orthosec2">
                        Your shoulder, comprised of the humerus, scapula, and
                        clavicle, faces potential issues due to its mobility.
                        The rotator cuff, a combination of muscles and tendons,
                        maintains stability but can lead to pain. Whether during
                        movement or persistently, this pain may be temporary or
                        require medical attention.
                      </section>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <Image
                    src={sports}
                    alt="joint"
                    className="orthocentered_img"
                    rounded
                  />
                </Col>
              </Row>
              <Row>
                <h1 className="sec_subhead">We Take Care of:</h1>
              </Row>
              <Row style={{ margin: "40px 0 104px 0" }}>
                <Col>
                  <div style={{ gap: "40px" }}>
                    <ul>
                      <li>
                        <p>Meniscus Surgery</p>
                      </li>
                      <li>
                        <p>Ligament Reconstructions (ACL, PCL, MCL, and LCL)</p>
                      </li>
                      <li>
                        <p>Shoulder Arthroscopic Bankarts Repair </p>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div style={{ gap: "40px" }}>
                    <ul>
                      <li>
                        <p>Arthroscopic Slap Repair </p>
                      </li>
                      <li>
                        <p>Remplissage </p>
                      </li>
                      <li>
                        <p>Latarjet</p>
                      </li>
                    </ul>
                  </div>
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
                          Utilized for the restoration of injured cartilage and
                          ligaments.
                        </p>
                      </li>
                      <li>
                        <p>
                          Most procedures are minimally invasive and typically
                          straightforward, with minimal time required.
                        </p>
                      </li>
                      <li>
                        <p>
                          However, more severe and intricate injuries may
                          necessitate extended treatment.
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className="Orthomain_container">
            <div className="Otherspecs">
              <h1 className="orthospect_heading">Explore Other Specialties</h1>
              <Row style={{ marginBottom: "52px" }}>
                <Col sm={12} md={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    <div>
                      <Image
                        src={opthalmology}
                        alt="joint"
                        className="orthocentered_img"
                        rounded
                      />
                    </div>

                    <div>
                      <h1 className="orthosect_heading">Ophthalmology</h1>
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
                        onClick={navigateToOpthalmology}
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
                    <div>
                      <Image
                        src={spine}
                        alt="joint"
                        className="orthocentered_img"
                        rounded
                      />
                    </div>

                    <div>
                      <h1 className="orthosect_heading">Spine</h1>
                      <section className="orthosec2">
                      Your spine health is our utmost priority. Our
                        experienced team is committed to providing personalized
                        care, whether you need routine spinal examinations,
                        treatment for spine-related conditions, or surgical
                        interventions for fixations. Trust us for best spine
                        care tailored to your individual needs and focused on
                          enhancing your overall well-being
                      </section>
                    </div>
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

export default Orthopaedic;
