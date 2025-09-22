// src/components/Culture/SanskritiInsightCard.jsx
import React from "react";
import sanskritiIcon from "../../assets/culture/sanskriti_icon.svg";

export default function SanskritiInsightCard() {
  return (
    <div className="bg-[#f0f4f8] rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
      <div>
        <h4 className="text-[#2c4a6b] font-medium text-lg mb-2 uppercase">
          SANSKRITI INSIGHT
        </h4>
        <blockquote className="text-[#2c4a6b] text-base italic">
          Dharma is not just duty, it is harmony between self and society.
        </blockquote>
      </div>
      {/* Icon at bottom */}
      <div className="flex justify-center mt-4">
        <img
          src={sanskritiIcon}
          alt="Sanskriti Icon"
          className="object-contain w-10 h-10"
        />
      </div>
    </div>
  );
}
