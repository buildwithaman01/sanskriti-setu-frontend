// src/pages/Traditions.jsx
import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";

import homeBg from "../assets/backgrounds/home_bg.png";

import baulData from "../data/baul.json";
import phulaichData from "../data/phulaich.json";

import baulPrimary from "../assets/traditions/baul_primary.jpg";
import baul1 from "../assets/traditions/baul_1.jpg";
import baul2 from "../assets/traditions/baul_2.jpg";

import phulaichPrimary from "../assets/traditions/phulaich_primary.jpg";
import phulaich1 from "../assets/traditions/phulaich_1.jpg";
import phulaich2 from "../assets/traditions/phulaich_2.jpg";

const traditions = [baulData, phulaichData];

const imageMap = {
  baul_primary: baulPrimary,
  baul_1: baul1,
  baul_2: baul2,
  phulaich_primary: phulaichPrimary,
  phulaich_1: phulaich1,
  phulaich_2: phulaich2,
};

const Traditions = () => {
  return (
    <div
      className="min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <TopBar />
      <Navbar />

      <main className="max-w-6xl p-6 mx-auto">
        <h1 className="text-4xl font-bold text-[#E1A65D] mb-8 text-center">
          Traditions & Festivals
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {traditions.map((t) => (
            <Link
              key={t.id}
              to={`/traditions/${t.id}`}
              className="overflow-hidden transition-transform duration-300 transform shadow-lg rounded-xl hover:scale-105"
            >
              <img
                src={imageMap[t.primary_image]}
                alt={t.festival_name}
                className="object-cover w-full h-48"
              />
              <div className="p-4 bg-[#EBCB7B]/80 backdrop-blur-md">
                <h2 className="text-xl font-bold text-[#333]">
                  {t.festival_name}
                </h2>
                <p className="mt-1 text-gray-700">{t.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Traditions;
