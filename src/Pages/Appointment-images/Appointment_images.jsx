import React, { useState, useEffect } from "react";
import image1 from "../../Assets/Images/final-pics/contact1.png";
import image2 from "../../Assets/Images/contact/_DSC7378.jpg";

const Appointment_images = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2]; // Replace with your image URLs

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current image index
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Change image every 2 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <div>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        style={{ width: "100%", height: "100%",objectFit:'fill' }}

      />
    </div>
  );
};

export default Appointment_images;
