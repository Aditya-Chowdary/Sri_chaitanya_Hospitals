import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Image } from "react-bootstrap";
import check3 from "../../Assets/Images/check1.jpg";
import check1 from "../../Assets/Images/final-pics/scroll-text1.JPG";
import check2 from "../../Assets/Images/final-pics/scroll-text2.JPG";

import "./ScrollText.css";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function ScrollText() {
const textRef = useRef();
  useLayoutEffect(() => {
    const text = document.querySelector('.text');

    // Split the text into individual letters
    const letters = text.innerText.split('');

    // Create a timeline for the animation
    const ts = gsap.timeline({
      scrollTrigger: {
        trigger: '.text',
        start: 'top center', // Adjust as needed
        end: 'bottom center', // Adjust as needed
        scrub: 1,
        toggleActions: 'play none none none',
      },
    });

    // Empty the text container
    text.innerText = '';

    // Rebuild the text with spans for each letter
    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.innerText = letter;
      span.style.color = '#fff'; // Initial color
      span.style.transition = 'color 0.2s ease'; // Adjust the animation duration and delay

      text.appendChild(span);

      ts.to(span, {
        color: 'black', // Change to the desired color
        duration: 1, // Duration of the color change animation for each letter
        start: `+=${index * 0.001}`, // Delay each letter slightly
         ease: "none",
      });
    });
   
  }, []);
  return (
    <>
      <div className="scroll_textCont">
        <section className="text" ref={textRef}>CARE. TRUST. HEALTH</section>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ marginBottom: "0px" }}>
            <Image
              src={check1}
              rounded
              className="img-fluid"
              style={{
                height: "400px",
                width: "400px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="grid_2">
            <Image
              src={check3}
              rounded
              className="img-fluid"
              style={{
                height: "300px",
                width: "300px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center", // Center items horizontally
            justifyContent: "flex-start ",
            height: "386px",
          }}
        >
          <div className="grid_3">
            <Image
              src={check2}
              rounded
              className="img-fluid"
              style={{
                height: "350px",
                width: "350px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="test_cont">
            <p className="testimonial_p1">
              With an unwavering commitment to innovation and heartfelt
              compassion, we carve a unique path towards wellness.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScrollText;
