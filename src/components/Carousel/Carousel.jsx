/*
  Carousel.jsx
  Description:
    - Hero carousel for Sanskriti Setu Home Page
    - Shows 3 images at a time: left, center (popped forward), right
    - Smooth, seamless series-loop animation
    - Manual arrows pause auto-slide for 3 seconds
*/

import React, { useState, useEffect, useRef } from "react";
import ganesha from "../../assets/carousel/ganesha.png";
import durga from "../../assets/carousel/durga.png";
import diyas from "../../assets/carousel/diyas.png";
import viswakarma from "../../assets/carousel/viswakarma.png";

const images = [ganesha, durga, diyas, viswakarma];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();

  const imageWidth = 460; // px
  const imageHeight = 310; // px
  const centerScale = 1.2;

  // Auto-slide
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const handleManualSlide = (direction) => {
    clearInterval(intervalRef.current);
    if (direction === "prev") {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    } else {
      setCurrent((prev) => (prev + 1) % images.length);
    }
    setTimeout(() => startAutoSlide(), 3000);
  };

  const getLeftIndex = () => (current - 1 + images.length) % images.length;
  const getRightIndex = () => (current + 1) % images.length;

  return (
    <div className="relative w-full h-[360px] md:h-[400px] flex justify-center items-center overflow-hidden px-2 md:px-4">
      {images.map((img, idx) => {
        // default (hidden offscreen)
        let translateX = 1000;
        let scale = 0.8;
        let zIndex = 0;
        let opacity = 0;

        if (idx === current) {
          // center
          translateX = 0;
          scale = centerScale;
          zIndex = 10;
          opacity = 1;
        } else if (idx === getLeftIndex()) {
          // left
          translateX = -imageWidth * 0.9;
          scale = 1;
          zIndex = 5;
          opacity = 1;
        } else if (idx === getRightIndex()) {
          // right
          translateX = imageWidth * 0.9;
          scale = 1;
          zIndex = 5;
          opacity = 1;
        }

        return (
          <img
            key={idx}
            src={img}
            alt={`carousel-${idx}`}
            className="absolute rounded-xl transition-all duration-700 ease-in-out"
            style={{
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
              transform: `translateX(${translateX}px) scale(${scale})`,
              zIndex,
              opacity,
              boxShadow:
                idx === current
                  ? "0 0 20px rgba(0,0,0,0.3),0 0 40px rgba(0,0,0,0.2)"
                  : "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
        );
      })}

      {/* Arrows */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-500/30 text-white p-3 rounded-full z-20 hover:bg-gray-500/50 hover:scale-110 transition-all duration-300"
        onClick={() => handleManualSlide("prev")}
      >
        &#10094;
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-500/30 text-white p-3 rounded-full z-20 hover:bg-gray-500/50 hover:scale-110 transition-all duration-300"
        onClick={() => handleManualSlide("next")}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
