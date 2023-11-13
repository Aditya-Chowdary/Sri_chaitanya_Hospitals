import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import logo from "../../Assets/Images/Logo.png";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setMobile(false);
  };

  const specialtiesDropdown = (
    <ul className="specialties-dropdown" onClick={closeMobileMenu}>
      <Link to="/orthopaedics" className="specialty-link">
        <li className="dropdown-li">Orthopaedics</li>
      </Link>
      <Link to="/opthalmology" className="specialty-link">
        <li className="dropdown-li">Ophthalmology</li>
      </Link>
      <Link to="/spine" className="specialty-link">
        <li className="dropdown-li">Spine</li>
      </Link>
    </ul>
  );

  return (
    <>
      <div className="navbar">
        <img
          alt="sri chaitanya hospitals"
          src={logo}
          onClick={() => navigate("/home")}
          className="logo"
          style={{ maxWidth: "160px", maxHeight: "121px", cursor: "pointer" }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          {Mobile && (
            <ul
              className={Mobile ? "nav-links-mobile" : "nav-links"}
              onClick={closeMobileMenu}
            >
              <Link to="/about" className="about">
                <li className="normal-li">About</li>
              </Link>
              <Link to="/insurance" className="insurance">
                <li className="normal-li">Insurance</li>
              </Link>

              <div className="specialties-dropdown-container">
                <Link onClick={toggleDropdown} className="specialities">
                  <li className="speciality normal-li">
                    Specialities
                    <MdOutlineArrowDropDown />
                  </li>
                </Link>
                {isOpen && specialtiesDropdown}
              </div>

              <Link to="/book_an_appointment" className="home">
                <li className="normal-li">Appointment</li>
              </Link>
            </ul>
          )}
          <div style={{ display: "flex", marginTop: "2vh" }}>
            <button
              className="mobile-menu-icon"
              onClick={() => setMobile(!Mobile)}
            >
              {Mobile ? (
                <TfiClose size={30} className="close-icon" />
              ) : (
                <RxHamburgerMenu size={30} className="ham-icon" />
              )}
            </button>
            <button
              variant="dark"
              className="btn-app"
              onClick={() => {
                navigate('/book_an_appointment');
              }}
            >
              Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;