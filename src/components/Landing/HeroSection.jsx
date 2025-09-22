// src/components/Landing/HeroSection.jsx
import React, { useEffect, useState } from "react";
import LandingBackground from "./LandingBackground.jsx";
import LandingButton from "./LandingButton";
import namaskarIcon from "../../assets/landing/namaskar_icon.svg";
import namaskarText from "../../assets/landing/namaskar_text.svg";
import logo from "../../assets/logo/logo.svg";

const HeroSection = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showLogo, setShowLogo] = useState(false);



  const [showButton, setShowButton] = useState(false);

useEffect(() => {
  setShowIcon(true);
  const timers = [
    setTimeout(() => setShowText(true), 600),
    setTimeout(() => setShowWelcome(true), 1200),
    setTimeout(() => setShowLogo(true), 1800),

    setTimeout(() => setShowButton(true), 3600),
  ];
  

   return () => timers.forEach((t) => clearTimeout(t));
 }, []);


  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <LandingBackground />

      {/* Central Content */}
      <div className="relative z-20 flex flex-col items-center space-y-2">
        {/* Namaskar Icon */}
        <img
          src={namaskarIcon}
          alt="Namaskar Icon"
          className={`w-24 md:w-32 transition-transform duration-700 ${
            showIcon ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />

        {/* Namaskar Text */}
        <img
          src={namaskarText}
          alt="Namaste Text"
          className={`w-48 md:w-64 transition-opacity duration-700 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Welcome to */}
        <h2
          className={`text-2xl md:text-4xl font-light text-[#FFD700] transition-opacity duration-700 ${
            showWelcome ? "opacity-100 animate-glow" : "opacity-0"
          }`}
        >
          Welcome to
        </h2>

        {/* Logo - with Rotating Glow*/}
        <div className="relative w-36 md:w-40 h-36 md:h-40 flex items-center justify-center">
          {/* Golden Glow */}
          {showLogo && (
            <div className="logo-glow relative w-40 md:w-40 h-40 md:h-40 flex items-center justify-center"></div>
          )}

          {/* Sparkles */}
          {showLogo && (
            <div className="logo-sparkles">
              {Array.from({ length: 10 }).map((_, idx) => (
                <span
                  key={idx}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                ></span>
              ))}
            </div>
          )}

          {/* Logo */}
          <img
            src={logo}
            alt="Sanskriti Setu Logo"
            className={`relative w-full h-full transition-opacity duration-700 ${
              showLogo ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* CTA Button */}
        <div
          className={`${
            showButton ? "opacity-100" : "opacity-0"
          } transition-opacity duration-700`}
        >
          <LandingButton />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
