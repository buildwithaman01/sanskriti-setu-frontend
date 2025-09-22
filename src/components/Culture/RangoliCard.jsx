// src/components/Culture/RangoliCard.jsx
import React from "react";
import rangoli from "../../assets/culture/rangoli.svg";

export default function RangoliCard({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center p-4 transition-transform duration-300 transform bg-white rounded-lg shadow-md cursor-pointer hover:scale-105 hover:shadow-xl"
    >
      <h3 className="text-[#4a4a4a] font-medium text-lg mb-2">
        Build your Rangoli
      </h3>
      <img
        src={rangoli}
        alt="Rangoli pattern"
        className="object-contain mb-2 w-36 h-36"
      />
      <div className="flex gap-2">
        <span className="w-5 h-5 bg-pink-500 rounded-full"></span>
        <span className="w-5 h-5 bg-red-800 rounded-full"></span>
        <span className="w-5 h-5 bg-green-600 rounded-full"></span>
        <span className="w-5 h-5 bg-blue-800 rounded-full"></span>
        <span className="w-5 h-5 bg-yellow-800 rounded-full"></span>
      </div>
    </div>
  );
}
