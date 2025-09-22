import React, { useState } from "react";
import FestivalCard from "./FestivalCard";
import RangoliCard from "./RangoliCard";
import VerticalImageCard from "./VerticalImageCard";
import ThematicScrolls from "./ThematicScrolls";
import MehendiDesignerCard from "./MehendiDesignerCard";
import SanskritiInsightCard from "./SanskritiInsightCard";
import Modal from "../Modal";

// Import JSON data
import kathakData from "../../data/culture/kathak.json";
import classicalData from "../../data/culture/classical_dance.json";

export default function CultureGrid() {
  const [selectedData, setSelectedData] = useState(null);

  const handleImageClick = (idx) => {
    if (idx === 0) setSelectedData(kathakData); // vertical1 -> Kathak
    else if (idx === 2)
      setSelectedData(classicalData); // vertical3 -> Classical Dance
    else setSelectedData(null);
  };

  const closeModal = () => setSelectedData(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-6">
          <FestivalCard />
          <div className="flex flex-col gap-6">
            <ThematicScrolls />
            <SanskritiInsightCard />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <RangoliCard />
          <MehendiDesignerCard />
        </div>

        <div className="flex flex-col gap-6">
          <VerticalImageCard rows={2} onImageClick={handleImageClick} />
        </div>
      </div>

      {selectedData && (
        <Modal onClose={closeModal}>
          <h2 className="mb-2 text-2xl font-bold">{selectedData.title}</h2>
          <p className="mb-4 whitespace-pre-line">{selectedData.description}</p>
          <a
            href={selectedData.explore_more_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E1A65D] text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
          >
            Explore More
          </a>
        </Modal>
      )}
    </>
  );
}
