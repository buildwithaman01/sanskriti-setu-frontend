import React, { useState } from "react";
import hamburgerIcon from "../../assets/icons/hamburger.svg";
import searchIcon from "../../assets/icons/search.svg";
import radioIcon from "../../assets/icons/radio.svg";
import profileIcon from "../../assets/icons/profile.svg";
import cultureTopBarBg from "../../assets/backgrounds/culture_topbar_bg.png";
import SideDrawer from "../SideDrawer/SideDrawer";
import { motion, AnimatePresence } from "framer-motion";
import RadioPopup from "../Modals/RadioPopup";

export default function TopBarCulture({ title = "Culture - Living Traditions" }) {
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
      <header
        className="flex items-center justify-between w-full px-6 py-6 md:py-8"
        style={{
          backgroundImage: `url(${cultureTopBarBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hamburger */}
        <img
          src={hamburgerIcon}
          alt="Menu"
          className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
          onClick={() => setDrawerOpen(true)}
        />

        {/* Title */}
        <h1 className="text-[#E1A65D] font-serif font-bold text-2xl md:text-4xl text-center">
          {title}
        </h1>

        {/* Right-side icons */}
        <div className="relative flex items-center gap-4 md:gap-6">
          {/* Search */}
          {!showSearch && (
            <img
              src={searchIcon}
              alt="Search"
              className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
              onClick={() => setShowSearch(true)}
            />
          )}
          <AnimatePresence>
            {showSearch && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 200, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center overflow-hidden bg-white border border-gray-400 rounded-full"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="flex-grow px-3 py-1 text-sm outline-none"
                />
                <img
                  src={searchIcon}
                  alt="search"
                  className="w-5 h-5 mx-2 cursor-pointer hover:scale-110"
                  onClick={handleSearch}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Radio */}
          <img
            src={radioIcon}
            alt="Radio"
            className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
            onClick={() => setRadioOpen(true)}
          />

          {/* Profile */}
          <img
            src={profileIcon}
            alt="Profile"
            className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
            onClick={() => (window.location.href = "/login")}
          />
        </div>
      </header>

      {/* Side Drawer */}
      <SideDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Radio Modal */}
      <RadioPopup isOpen={radioOpen} onClose={() => setRadioOpen(false)} />
    </>
  );
}
