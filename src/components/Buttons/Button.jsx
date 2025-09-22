/*
  Button.jsx
  Description: Reusable Button Component
  - Rounded pill shape (border-radius: 9999px)
  - Vibrant saffron background (#E98A19)
  - Smooth hover animation with slight scale and color change
  - Suitable for Take the Quiz or any call-to-action button
*/

import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-[#E98A19] 
        text-white 
        font-semibold 
        px-6 py-2 
        rounded-full 
        shadow-md 
        hover:bg-[#d97a12] 
        hover:scale-105 
        transition-all 
        duration-300
      "
    >
      {text}
    </button>
  );
};

export default Button;
