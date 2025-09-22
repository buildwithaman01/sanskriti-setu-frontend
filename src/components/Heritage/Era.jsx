import React from "react";
import pillarIcon from "../../assets/icons/pillar.svg";
import fortIcon from "../../assets/icons/fort.svg";

// Match your sitesData era fields
const eras = [
  { name: "Maurya", icon: pillarIcon },
  { name: "Gupta", icon: pillarIcon },
  { name: "Mughal", icon: fortIcon },
  { name: "Colonial", icon: fortIcon },
];

const Era = ({ selectedEra, setSelectedEra }) => {
  return (
    <div className="p-6 border shadow-lg rounded-xl backdrop-blur-lg bg-white/20 border-white/30">
      <h3 className="text-lg font-semibold mb-4 text-[#3B2F2F]">Era</h3>
      <div className="grid grid-cols-2 gap-4">
        {eras.map((era) => (
          <button
            key={era.name}
            onClick={() =>
              setSelectedEra(selectedEra === era.name ? null : era.name)
            }
            className={`flex items-center gap-2 p-3 rounded-lg transition-all ${
              selectedEra === era.name
                ? "bg-[#9E3B3B] text-white"
                : "bg-white/30 text-[#3B2F2F] hover:bg-white/40"
            }`}
          >
            <img src={era.icon} alt={era.name} className="w-6 h-6" />
            <span>{era.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Era;
