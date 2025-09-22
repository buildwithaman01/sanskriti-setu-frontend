// src/components/shared/VedicBotButton.jsx
import React from "react";

export default function VedicBotButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 z-50 bg-[#E55A43] text-white px-4 py-2 rounded-full shadow-lg font-semibold"
    >
      VedicBot
    </button>
  );
}
