// src/components/Culture/ThematicScrolls.jsx
import React from "react";
import scrollImg from "../../assets/culture/scroll.svg";

const trails = ["Dance of the North", "Art of the South", "Music of the East"];

export default function ThematicScrolls({ onClick }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-[#2c4a6b] font-semibold text-lg mb-2">
        Thematic Trails
      </h4>
      <div className="flex justify-center gap-3">
        {trails.map((trail, idx) => (
          <div
            key={idx}
            onClick={() => onClick?.(trail)}
            className="relative h-24 overflow-hidden transition-transform duration-300 transform rounded-lg shadow-md cursor-pointer w-36 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={scrollImg}
              alt={`${trail} scroll`}
              className="absolute inset-0 object-cover w-full h-full opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center px-2 text-center">
              <span className="text-sm font-medium text-black">{trail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
