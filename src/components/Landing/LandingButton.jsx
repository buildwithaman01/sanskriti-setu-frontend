import React from "react";
import ctaButton from "../../assets/landing/cta_button.svg";
import { useNavigate } from "react-router-dom";

const LandingButton = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-max mx-auto mt-8 cursor-pointer">
      <img
        src={ctaButton}
        alt="CTA Button"
        className="w-64 h-auto"
        onClick={() => navigate("/home")}
      />
      <span className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-lg select-none pointer-events-none text-center">
        <span>Begin your cultural</span>
        <span>journey</span>
      </span>
    </div>
  );
};

export default LandingButton;
