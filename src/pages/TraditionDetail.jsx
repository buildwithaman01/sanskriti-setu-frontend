// src/pages/TraditionDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";

import cultureBg from "../assets/backgrounds/culture_bg.png";

import baulData from "../data/baul.json";
import phulaichData from "../data/phulaich.json";

import baulPrimary from "../assets/traditions/baul_primary.jpg";
import baul1 from "../assets/traditions/baul_1.jpg";
import baul2 from "../assets/traditions/baul_2.jpg";

import phulaichPrimary from "../assets/traditions/phulaich_primary.jpg";
import phulaich1 from "../assets/traditions/phulaich_1.jpg";
import phulaich2 from "../assets/traditions/phulaich_2.jpg";

const traditions = {
  "baul-tradition-of-bengal": baulData,
  "phulaich-festival": phulaichData,
};

const imageMap = {
  baul_primary: baulPrimary,
  baul_1: baul1,
  baul_2: baul2,
  phulaich_primary: phulaichPrimary,
  phulaich_1: phulaich1,
  phulaich_2: phulaich2,
};

const TraditionDetail = () => {
  const { id } = useParams();
  const data = traditions[id];

  if (!data) return <div className="min-h-screen p-8">Tradition not found</div>;

  return (
    <div
      className="min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${cultureBg})` }}
    >
      <TopBar />
      <Navbar />

      <main className="max-w-5xl p-6 mx-auto space-y-8">
        {/* Hero Image */}
        <div className="overflow-hidden shadow-lg rounded-xl">
          <img
            src={imageMap[data.primary_image]}
            alt={data.festival_name}
            className="object-cover w-full h-64 md:h-96"
          />
        </div>

        {/* Title & Tagline */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#E1A65D] mb-2">
            {data.festival_name}
          </h1>
          <p className="text-lg text-gray-700">{data.tagline}</p>
        </div>

        {/* Description */}
        <section className="space-y-4">
          {data.description.map((para, idx) => (
            <p key={idx} className="leading-relaxed text-gray-800">
              {para}
            </p>
          ))}
        </section>

        {/* Significance */}
        <section className="p-6 bg-[#EBCB7B]/80 backdrop-blur-md rounded-xl shadow-lg space-y-3">
          <h2 className="text-2xl font-bold text-[#333] mb-2">Significance</h2>
          {data.significance.map((para, idx) => (
            <p key={idx} className="leading-relaxed text-gray-800">
              {para}
            </p>
          ))}
        </section>

        {/* Key Dates & Location */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="p-4 shadow-lg bg-white/80 backdrop-blur-md rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-[#E1A65D]">Key Dates</h3>
            <ul className="text-gray-800 list-disc list-inside">
              {data.key_dates.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.event}:</strong> {item.month}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 shadow-lg bg-white/80 backdrop-blur-md rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-[#E1A65D]">Location</h3>
            <p className="text-gray-800">{data.location}</p>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h3 className="text-2xl font-bold text-[#E1A65D] mb-4">Gallery</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {data.image_gallery.map((imgKey, idx) => (
              <div
                key={idx}
                className="overflow-hidden transition-transform transform rounded-lg shadow-lg hover:scale-105"
              >
                <img
                  src={imageMap[imgKey]}
                  alt={`Gallery ${idx + 1}`}
                  className="object-cover w-full h-40"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Explore More */}
        <section className="text-center">
          <a
            href={data.explore_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-[#E1A65D] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d19c49] transition-colors"
          >
            Explore More
          </a>
        </section>
      </main>
    </div>
  );
};

export default TraditionDetail;
