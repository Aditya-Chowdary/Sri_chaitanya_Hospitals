import React, { useState, useEffect } from "react";
import image1 from "../../Assets/Images/final-pics/contact1.png";
import image2 from "../../Assets/Images/contact/transition2.jpeg";

const Appointment_images = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <div>
      <img
        src={images[currentImageIndex]}
        alt={`${currentImageIndex + 1}`}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Appointment_images;
