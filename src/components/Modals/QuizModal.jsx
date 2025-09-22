// src/components/Modals/QuizModal.jsx
import React from "react";

export default function QuizModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md p-6 space-y-4 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-[#E1A65D]">Join the Quiz!</h2>
        <p className="text-gray-700">
          Test your knowledge about Indian culture. Click "Start Quiz" to begin.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => alert("Quiz started! 🎉")}
            className="px-4 py-2 bg-[#E1A65D] text-white rounded hover:bg-[#d6a853]"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
