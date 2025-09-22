// src/components/Landing/LandingBackground.jsx
import React from "react";
import welcomeBg from "../../assets/landing/welcome_bg.png";
import welcomeMandala from "../../assets/landing/welcome_bg_mandala.svg";

const LandingBackground = () => {
  return (
    <>
      {/* Gradient + Image */}
      <img
        src={welcomeBg}
        alt="Welcome Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      {/* Mandala Decorations */}
      <img
        src={welcomeMandala}
        alt="Mandala Decorations"
        className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-50"
      />
    </>
  );
};

export default LandingBackground;
