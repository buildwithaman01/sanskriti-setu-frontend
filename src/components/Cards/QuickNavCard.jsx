import React from "react";
import festivals from "../../assets/cards/QuickNav/festivals.png";
import artCrafts from "../../assets/cards/QuickNav/art_crafts.png";
import cuisine from "../../assets/cards/QuickNav/cuisine.png";

const QuickNavCard = () => {
  const items = [
    { label: "Festivals", icon: festivals },
    { label: "Art & Crafts", icon: artCrafts },
    { label: "Cuisine", icon: cuisine },
  ];

  return (
    <div className="w-[300px] h-[250px] p-6 bg-[#EBCB7B]/80 backdrop-blur-md rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <h2 className="text-xl font-semibold text-[#333333] mb-4 text-center">
        Quick Navigation
      </h2>

      <div className="flex justify-around">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-2 transition-transform duration-300 cursor-pointer hover:-translate-y-1"
          >
            <div className="w-20 h-20 overflow-hidden rounded-lg shadow-md hover:shadow-lg">
              <img
                src={item.icon}
                alt={item.label}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-sm font-medium text-center text-gray-800">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickNavCard;
