import React from "react";

export default function RadioPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  const sounds = ["Bhajans", "Mantras", "Classical Music", "Folk Songs"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-[400px] shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-[#E1A65D]">
          🎶 Enter the World of Sounds
        </h2>
        <p className="text-gray-600">Explore India’s rich musical heritage</p>

        <div className="flex flex-col gap-2">
          {sounds.map((sound, idx) => (
            <button
              key={idx}
              className="px-4 py-2 bg-[#E1A65D]/20 rounded hover:bg-[#E1A65D]/40 transition-colors text-left"
            >
              {sound}
            </button>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
