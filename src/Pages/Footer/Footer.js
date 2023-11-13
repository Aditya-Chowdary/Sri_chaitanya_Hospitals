import React from "react";
import { Container, Image } from "react-bootstrap";
import "./Footer.css";
import insta from "../../Assets/Images/insta.png";
import watsapp from "../../Assets/Images/watsapp.png";
import fb from "../../Assets/Images/fb.png";
import email from "../../Assets/Images/email.png";
import phone from "../../Assets/Images/phone.png";
import { FiArrowUpRight } from 'react-icons/fi';

function Footer() {
  return (
    <div className="footer_container">
      <Container fluid>
        <div className="stylingCon">
          <div className="fir_div">
            <div className="get_touch_cont">
              <h3 className="get_toch">Get in Touch</h3>{" "}
              <span>
                <FiArrowUpRight className="arrow_img" size={105}/>
              </span>
            </div>
            <div style={{ marginTop: "44px" }}>
              <h3 className="footer_subtext">
                Sri Chaitanya Ortho & Eye Hospital
              </h3>
              <p id="p">Opp: S.M.V.M Polytechnic College,</p>
              <p id="p"> Vinnakota Vari Street, Sajjapuram</p>
              <p id="p">Tanuku, Andhra Pradesh</p>
            </div>
          </div>
          <div className="sec_div">
            <div style={{ display: "flex", justifyContent: "space-between",width:"60%" }}>
              <div>
                <Image style={{ marginTop: "50px" }} src={fb} alt="facebook" />
              </div>
              <div>
                <Image style={{ marginTop: "50px" }} src={insta} alt="instagram" />
              </div>
              <div>
                <Image
                  style={{ marginTop: "50px" }}
                  src={watsapp}
                  alt="whatsapp"
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "23px",
                    height: "32px",
                    marginRight: "30px",
                  }}
                >
                  <Image src={phone} alt="WhatsApp" />
                </div>
                <div>
                  <p id="p">08819-229585</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "23px",
                    height: "23px",
                    marginRight: "30px",
                  }}
                ></div>
                <div>
                  {" "}
                  <p id="p"> 08819-229586</p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "23px",
                  height: "23px",
                  marginRight: "30px",
                }}
              >
                {" "}
                <Image src={email} alt="Email" />
              </div>
              <div>
                {" "}
                <p id="p">chaitanyaortho1989@gmail.com</p>
              </div>
            </div>

            <p id="p1">@2023 All Rights Reserved</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
