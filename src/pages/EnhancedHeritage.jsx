// src/pages/EnhancedHeritage.jsx
import React, { useState, useMemo } from "react";
import TopBarCulture from "../components/TopBar/TopBarCulture";
import NavbarCulture from "../components/Navbar/NavbarCulture";
import Filter from "../components/Heritage/Filter";
import EnhancedMapSection from "../components/Heritage/EnhancedMapSection";
import Sites from "../components/Heritage/Sites";

// Import heritage site data
import basgoData from "../data/basgo.json";
import anegundiData from "../data/anegundi.json";
import rabdentseData from "../data/rabdentse.json";

// Import heritage background
import heritageBg from "../assets/backgrounds/heritage_bg.png";

const allSitesData = [basgoData, anegundiData, rabdentseData];

export default function EnhancedHeritage() {
  const [selectedEra, setSelectedEra] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  // Filter sites based on selected filters
  const filteredSites = useMemo(() => {
    return allSitesData.filter((site) => {
      const matchesEra = selectedEra ? site.era === selectedEra : true;
      const matchesType = selectedType ? site.type === selectedType : true;
      return matchesEra && matchesType;
    });
  }, [selectedEra, selectedType]);

  return (
    <div
      className="min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${heritageBg})` }}
    >
      {/* Top bar and navbar */}
      <TopBarCulture title="Heritage" />
      <NavbarCulture />

      {/* Page content */}
      <div className="p-6 md:p-10">
        <h1 className="mb-8 text-4xl font-bold text-center text-[#3B2F2F] animate-fadeIn">
          Explore India's Heritage Sites
        </h1>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Sidebar: Filter + Map */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <div className="frosted-card p-6 animate-slideUp">
              <Filter
                selectedEra={selectedEra}
                setSelectedEra={setSelectedEra}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
              />
            </div>

            <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <EnhancedMapSection sites={filteredSites} />
            </div>
          </div>

          {/* Sites Grid */}
          <div className="flex-1 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <Sites
              sites={filteredSites}
              selectedEra={selectedEra}
              selectedType={selectedType}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
