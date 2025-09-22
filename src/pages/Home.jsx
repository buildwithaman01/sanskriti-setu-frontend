/**
 * Home.jsx
 * Description: The main landing page of Sanskriti Setu.
 * - Displays TopBar, Navbar, Hero Carousel, and 3 primary content cards.
 * - Background image: home_bg.png (unique per page).
 * - Layout: Single-column, responsive.
 * - Animations: Smooth entrance of carousel and cards using fade/slide effects.
 * - Styling: Semi-transparent frosted glass cards, culturally inspired warm palette.
 */

import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import CulturalQuizCard from "../components/Cards/CulturalQuizCard";
import TodaysMomentCard from "../components/Cards/TodaysMomentCard";
import QuickNavCard from "../components/Cards/QuickNavCard";

// Tailwind CSS + background image via inline style for per-page unique background
import homeBg from "../assets/backgrounds/home_bg.png";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      {/* Top Header */}
      <TopBar />

      {/* Navigation */}
      <Navbar />

      {/* Hero Carousel */}
      <div className="animate-fadeIn">
        <Carousel />
      </div>

      {/* Main Content Cards */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 my-12 px-4 animate-slideUp">
        <CulturalQuizCard />
        <TodaysMomentCard />
        <QuickNavCard />
      </div>
    </div>
  );
};

export default Home;
