// src/pages/Culture.jsx
import React from "react";
import TopBarCulture from "../components/TopBar/TopBarCulture";
import NavbarCulture from "../components/Navbar/NavbarCulture";
import CultureGrid from "../components/Culture/CultureGrid";
import cultureBg from "../assets/backgrounds/culture_bg.png";

export default function Culture() {
  return (
    <div
      className="min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${cultureBg})` }}
    >
      {/* TopBar */}
      <TopBarCulture />

      {/* SubNavbar */}
      <NavbarCulture />

      {/* Main Content */}
      <main className="p-6 md:p-10">
        <CultureGrid />
      </main>
    </div>
  );
}
