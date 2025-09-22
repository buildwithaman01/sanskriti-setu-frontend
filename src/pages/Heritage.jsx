// src/pages/Heritage.jsx
import React, { useState } from "react";
import TopBarCulture from "../components/TopBar/TopBarCulture"; // or Heritage-specific if exists
import NavbarCulture from "../components/Navbar/NavbarCulture";
import Filter from "../components/Heritage/Filter";
import MapSection from "../components/Heritage/MapSection";
import Sites from "../components/Heritage/Sites";

export default function Heritage() {
  const [selectedEra, setSelectedEra] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar and navbar */}
      <TopBarCulture title="Heritage" />
      <NavbarCulture />

      {/* Page content */}
      <div className="p-6 md:p-10">
        <h1 className="mb-8 text-4xl font-bold text-center text-[#3B2F2F]"></h1>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Sidebar: Filter + Map */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <Filter
              selectedEra={selectedEra}
              setSelectedEra={setSelectedEra}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
            />

            <MapSection selectedEra={selectedEra} selectedType={selectedType} />
          </div>

          {/* Sites Grid */}
          <div className="flex-1">
            <Sites selectedEra={selectedEra} selectedType={selectedType} />
          </div>
        </div>
      </div>
    </div>
  );
}
