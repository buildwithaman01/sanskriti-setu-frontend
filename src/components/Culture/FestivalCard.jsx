// src/components/Culture/FestivalCard.jsx
import React from "react";
import festivalImg from "../../assets/culture/festival.png";

export default function FestivalCard({ className }) {
  return (
    <div
      className={`relative rounded-xl shadow-md overflow-hidden ${className}`}
    >
      <img
        src={festivalImg}
        alt="Krishna deity with peacock feather and festive decorations"
        className="object-cover w-full h-48 rounded-lg md:h-full"
      />
      <div className="absolute inset-0 bg-black rounded-lg bg-opacity-20"></div>
      <div className="absolute top-4 left-4">
        
      </div>
      <button className="absolute bottom-4 right-4 bg-[#ff6b35] text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600">
        Celebrate Now
      </button>
    </div>
  );
}
