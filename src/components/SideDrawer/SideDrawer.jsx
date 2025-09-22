import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import profileIcon from "../../assets/icons/profile.svg";
import radioIcon from "../../assets/icons/radio.svg";

export default function SideDrawer({ isOpen, onClose }) {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/home" },
    { name: "Culture", path: "/culture" },
    { name: "Heritage", path: "/heritage" },
    { name: "Community", path: "/community" },
    { name: "Traditions", path: "/traditions" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 left-0 h-full w-64 bg-[#D0C5B5] shadow-lg z-50 p-6 flex flex-col"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#E1A65D]">Menu</h2>
              <button
                onClick={onClose}
                className="text-2xl font-bold text-gray-700"
              >
                ×
              </button>
            </div>

            {/* Profile & Radio */}
            <div className="flex items-center gap-4 mb-6">
              <img src={profileIcon} alt="Profile" className="w-8 h-8" />
              <img src={radioIcon} alt="Radio" className="w-8 h-8" />
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-4">
              {links.map((link) => {
                const isActive = location.pathname.startsWith(link.path);

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={onClose}
                    className={`px-2 py-1 rounded hover:bg-[#E1A65D]/20 transition-colors ${
                      isActive ? "bg-[#E1A65D]/30 font-semibold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </>
  );
}
