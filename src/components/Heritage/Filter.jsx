// src/components/Heritage/Filter.jsx
import React from "react";
import Era from "./Era";
import Type from "./Type";

const Filter = ({
  selectedEra,
  setSelectedEra,
  selectedType,
  setSelectedType,
}) => {
  return (
    <div className="flex flex-col w-full gap-6 p-4 mx-auto shadow-lg md:w-3/4 lg:w-2/3 bg-white/20 backdrop-blur-lg rounded-xl">
      <h2 className="text-2xl font-bold text-[#3B2F2F] mb-4 text-center">
        Filter
      </h2>

      {/* Era Section */}
      <Era selectedEra={selectedEra} setSelectedEra={setSelectedEra} />

      {/* Type Section */}
      <Type selectedType={selectedType} setSelectedType={setSelectedType} />
    </div>
  );
};

export default Filter;
