import React from "react";
import templeIcon from "../../assets/icons/temple.svg";
import caveIcon from "../../assets/icons/cave.svg";
import palaceIcon from "../../assets/icons/palace.svg";
import museumIcon from "../../assets/icons/museum.svg";

// Match your sitesData type fields
const types = [
  { name: "Temple", icon: templeIcon },
  { name: "Cave", icon: caveIcon },
  { name: "Palace", icon: palaceIcon },
  { name: "Museum", icon: museumIcon },
];

const Type = ({ selectedType, setSelectedType }) => {
  return (
    <div className="p-6 border shadow-lg rounded-xl backdrop-blur-lg bg-white/20 border-white/30">
      <h3 className="text-lg font-semibold mb-4 text-[#3B2F2F]">Type</h3>
      <div className="grid grid-cols-2 gap-4">
        {types.map((type) => (
          <button
            key={type.name}
            onClick={() =>
              setSelectedType(selectedType === type.name ? null : type.name)
            }
            className={`flex items-center gap-2 p-3 rounded-lg transition-all ${
              selectedType === type.name
                ? "bg-[#9E3B3B] text-white"
                : "bg-white/30 text-[#3B2F2F] hover:bg-white/40"
            }`}
          >
            <img src={type.icon} alt={type.name} className="w-6 h-6" />
            <span>{type.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Type;
