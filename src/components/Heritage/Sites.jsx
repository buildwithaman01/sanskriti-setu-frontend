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
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <h2 className="mb-6 text-3xl font-bold text-center">Sites</h2>

      {/* Sites Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredSites.length > 0 ? (
          filteredSites.map((site, idx) => (
            <div
              key={site.site_name || idx}
              className="overflow-hidden transition bg-white shadow-lg cursor-pointer rounded-xl hover:shadow-2xl"
              onClick={() => setSelectedSite(site)}
            >
              <img
                src={site.primary_images?.[0]}
                alt={site.site_name}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{site.site_name}</h3>
                <p className="text-sm text-gray-600">{site.tagline}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No sites match the selected filters.
          </p>
        )}
      </div>

      {/* Modal */}
      {selectedSite && (
        <Modal
          onClose={() => setSelectedSite(null)}
          ariaLabel={selectedSite.site_name}
        >
          <h2 className="mb-2 text-2xl font-bold">{selectedSite.site_name}</h2>
          <p className="mb-4 italic">{selectedSite.tagline}</p>

          <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
            {selectedSite.primary_images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${selectedSite.site_name} ${idx + 1}`}
                className="object-cover w-full h-48 rounded-lg"
              />
            ))}
          </div>

          <p className="mb-4">{selectedSite.description}</p>

          {selectedSite.plan_your_visit && (
            <>
              <h3 className="mb-2 text-xl font-semibold">Plan Your Visit</h3>
              <p>
                <strong>How to Reach:</strong>{" "}
                {selectedSite.plan_your_visit.how_to_reach}
              </p>
              <p>
                <strong>Where to Stay:</strong>{" "}
                {selectedSite.plan_your_visit.where_to_stay}
              </p>
              <p>
                <strong>Must Try Food:</strong>{" "}
                {selectedSite.plan_your_visit.must_try_food}
              </p>
            </>
          )}

          {selectedSite.bot_story && (
            <p className="mt-4">{selectedSite.bot_story}</p>
          )}

          {selectedSite.explore_more_link && (
            <a
              href={selectedSite.explore_more_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 mt-4 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Explore More
            </a>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Sites;
