import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navbarHomeBg from "../../assets/backgrounds/navbar_home.png";

const links = [
  { name: "Home", path: "/home" },
  { name: "Culture", path: "/culture" },
  { name: "Heritage", path: "/heritage" },
  { name: "Marketplace", path: "/marketplace" },
  { name: "Community", path: "/community" },
  { name: "Traditions", path: "/traditions" },
];

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="relative z-10 border-b border-[#ddd]"
      style={{
        backgroundImage: `url(${navbarHomeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center py-3">
        {links.map((link) => {
          const isActive = location.pathname.startsWith(link.path);
          return (
            <Link key={link.name} to={link.path}>
              <span
                className={`relative text-black font-medium text-lg cursor-pointer mx-6 transition-all duration-300
                  ${isActive ? "text-[#E98A19]" : "hover:text-[#E98A19]"}
                `}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#E98A19] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                ></span>
              </span>
            </Link>
          );
        })}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="flex justify-between items-center py-3 px-4">
          <h2 className="text-xl font-bold text-[#E98A19]">Sanskriti Setu</h2>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-black hover:text-[#E98A19] transition-colors touch-manipulation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-b">
            {links.map((link) => {
              const isActive = location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-black font-medium border-b border-gray-100 hover:bg-gray-50 mobile-nav-link"
                >
                  <span className={isActive ? "text-[#E98A19]" : ""}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
