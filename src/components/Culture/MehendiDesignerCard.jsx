// src/components/Culture/MehendiDesignerCard.jsx
import React from "react";
import mehendiLeft from "../../assets/culture/mehendi_left.svg";
import mehendiRight from "../../assets/culture/mehendi_right.svg";

export default function MehendiDesignerCard({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-4 transition-transform duration-300 transform bg-white rounded-lg shadow-md cursor-pointer hover:scale-105 hover:shadow-xl"
    >
      <h3 className="text-[#4a4a4a] font-medium text-lg mb-3">
        Virtual Mehendi Designer
      </h3>
      <div className="flex gap-3">
        <img
          src={mehendiLeft}
          alt="Line mehendi design"
          className="object-contain w-1/2 h-40"
        />
        <img
          src={mehendiRight}
          alt="Filled mehendi design"
          className="object-contain w-1/2 h-40"
        />
      </div>
    </div>
  );
}
