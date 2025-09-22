import React, { useState } from "react";
import Modal from "./Modal";
import Filter from "./Filter";

// Import images - Cache refresh
import basgo1 from "../../assets/heritage/basgo_primary1.jpg";
import basgo2 from "../../assets/heritage/basgo_primary2.jpg";
import basgo3 from "../../assets/heritage/basgo_primary3.jpg";

import anegundi1 from "../../assets/heritage/anegundi_primary1.jpeg";
import anegundi2 from "../../assets/heritage/anegundi_primary2.jpeg";
import anegundi3 from "../../assets/heritage/anegundi_primary3.jpeg";

import rabdentse1 from "../../assets/heritage/rabdentse_primary1.jpeg";
import rabdentse2 from "../../assets/heritage/rabdentse_primary2.jpeg";
import rabdentse3 from "../../assets/heritage/rabdentse_primary3.jpeg";

// Import JSON data
import basgoData from "../../data/basgo.json";
import anegundiData from "../../data/anegundi.json";
import rabdentseData from "../../data/rabdentse.json";

const sitesData = [
  { ...basgoData, primary_images: [basgo1, basgo2, basgo3] },
  { ...anegundiData, primary_images: [anegundi1, anegundi2, anegundi3] },
  { ...rabdentseData, primary_images: [rabdentse1, rabdentse2, rabdentse3] },
];

const Sites = ({ selectedEra, selectedType }) => {
  const [selectedSite, setSelectedSite] = useState(null);

  const filteredSites = sitesData.filter((site) => {
    const matchesEra = selectedEra ? site.era === selectedEra : true;
    const matchesType = selectedType ? site.type === selectedType : true;
    return matchesEra && matchesType;
  });

  return (
    <div className="px-2 md:px-4 py-6 md:py-8 mx-auto max-w-7xl">
      <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-bold text-center">Sites</h2>

      {/* Sites Grid - Enhanced for Mobile */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {filteredSites.length > 0 ? (
          filteredSites.map((site, idx) => (
            <div
              key={site.site_name || idx}
              className="overflow-hidden transition bg-white shadow-lg cursor-pointer rounded-xl hover:shadow-2xl touch-manipulation"
              onClick={() => setSelectedSite(site)}
            >
              <img
                src={site.primary_images?.[0]}
                alt={site.site_name}
                className="object-cover w-full h-40 md:h-48"
                loading="lazy"
              />
              <div className="p-3 md:p-4">
                <h3 className="mb-2 text-lg md:text-xl font-semibold line-clamp-2">{site.site_name}</h3>
                <p className="text-sm md:text-base text-gray-600 line-clamp-2">{site.tagline}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full py-8">
            No sites match the selected filters.
          </p>
        )}
      </div>

      {/* Enhanced Modal for Mobile */}
      {selectedSite && (
        <Modal
          onClose={() => setSelectedSite(null)}
          ariaLabel={selectedSite.site_name}
        >
          <div className="max-h-[80vh] overflow-y-auto">
            <h2 className="mb-2 text-xl md:text-2xl font-bold">{selectedSite.site_name}</h2>
            <p className="mb-4 italic text-sm md:text-base">{selectedSite.tagline}</p>

            <div className="grid grid-cols-1 gap-3 mb-4 sm:grid-cols-2">
              {selectedSite.primary_images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${selectedSite.site_name} ${idx + 1}`}
                  className="object-cover w-full h-32 md:h-48 rounded-lg"
                />
              ))}
            </div>

            <p className="mb-4 text-sm md:text-base leading-relaxed">{selectedSite.description}</p>

            {selectedSite.plan_your_visit && (
              <>
                <h3 className="mb-2 text-lg md:text-xl font-semibold">Plan Your Visit</h3>
                <div className="space-y-2 text-sm md:text-base">
                  <p><strong>How to Reach:</strong> {selectedSite.plan_your_visit.how_to_reach}</p>
                  <p><strong>Where to Stay:</strong> {selectedSite.plan_your_visit.where_to_stay}</p>
                  <p><strong>Must Try Food:</strong> {selectedSite.plan_your_visit.must_try_food}</p>
                </div>
              </>
            )}

            {selectedSite.bot_story && (
              <p className="mt-4 text-sm md:text-base">{selectedSite.bot_story}</p>
            )}

            {selectedSite.explore_more_link && (
              <a
                href={selectedSite.explore_more_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 md:px-6 py-2 md:py-3 mt-4 text-sm md:text-base text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 touch-manipulation"
              >
                Explore More
              </a>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Sites;
