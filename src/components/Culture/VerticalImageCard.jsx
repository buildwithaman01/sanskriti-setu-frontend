// src/components/Culture/VerticalImageCard.jsx
import React from "react";
import vertical1 from "../../assets/culture/vertical1.png";
import vertical2 from "../../assets/culture/vertical2.png";
import vertical3 from "../../assets/culture/vertical3.png";
import vertical4 from "../../assets/culture/vertical4.png";

export default function VerticalImageCard({ rows = 2, onImageClick }) {
  const cardHeight = rows === 2 ? "h-[760px]" : "h-[360px]";
  const images = [vertical1, vertical2, vertical3, vertical4];

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 flex flex-col gap-4 ${cardHeight}`}
    >
      <div className="grid h-full grid-cols-2 grid-rows-2 gap-2">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => onImageClick?.(idx)}
            className="relative w-full h-full overflow-hidden transition-transform duration-300 transform rounded-md cursor-pointer hover:scale-105 hover:shadow-lg"
          >
            <img
              src={img}
              alt={`Cultural image ${idx + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
