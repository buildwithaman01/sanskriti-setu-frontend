import React, { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import hamburgerIcon from "../../assets/icons/hamburger.svg";
import searchIcon from "../../assets/icons/search.svg";
import topbarHomeBg from "../../assets/backgrounds/topbar_home.png";
import radioIcon from "../../assets/icons/radio.svg";
import profileIcon from "../../assets/icons/profile.svg";
import SideDrawer from "../SideDrawer/SideDrawer";
import { motion, AnimatePresence } from "framer-motion";
import RadioPopup from "../Modals/RadioPopup";

const TopBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [radioOpen, setRadioOpen] = useState(false);

  const handleSearch = () => {
    if (searchValue.trim()) {
      alert(`Searching for: ${searchValue}`);
    }
  };

  return (
    <>
      <div
        className="relative z-20 flex items-center justify-between h-16 md:h-20 px-3 md:px-6 py-2 shadow-md"
        style={{
          backgroundImage: `url(${topbarHomeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left: Hamburger */}
        <img
          src={hamburgerIcon}
          alt="menu"
          className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 cursor-pointer hover:scale-110 touch-manipulation"
          onClick={() => setDrawerOpen(true)}
        />

        {/* Center: Logo */}
        <div className="flex items-center space-x-2 animate-fade-in">
          <img src={logo} alt="Sanskriti Setu Logo" className="h-auto w-10 md:w-14" />
        </div>

        {/* Right: Icons */}
        <div className="relative flex items-center space-x-2 md:space-x-4">
          {/* Search Icon / Expanding Input */}
          <div className="flex items-center">
            {!showSearch && (
              <img
                src={searchIcon}
                alt="search"
                className="w-5 h-5 md:w-6 md:h-6 transition-transform cursor-pointer hover:scale-110 touch-manipulation"
                onClick={() => setShowSearch(true)}
              />
            )}

            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 150, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center ml-2 overflow-hidden bg-white border border-gray-400 rounded-full"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="flex-grow px-2 md:px-3 py-1 text-xs md:text-sm outline-none"
                  />
                  <img
                    src={searchIcon}
                    alt="search"
                    className="w-4 h-4 md:w-5 md:h-5 mx-2 cursor-pointer hover:scale-110 touch-manipulation"
                    onClick={handleSearch}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Radio */}
          <img
            src={radioIcon}
            alt="radio"
            className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:scale-110 touch-manipulation"
            onClick={() => setRadioOpen(true)}
          />

          {/* Profile */}
          <img
            src={profileIcon}
            alt="profile"
            className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:scale-110 touch-manipulation"
            onClick={() => (window.location.href = "/login")}
          />
        </div>
      </div>

      {/* Side Drawer */}
      <SideDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Radio Modal */}
      <RadioPopup isOpen={radioOpen} onClose={() => setRadioOpen(false)} />
    </>
  );
};

export default TopBar;
