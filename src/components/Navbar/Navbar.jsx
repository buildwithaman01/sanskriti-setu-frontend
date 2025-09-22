import React from "react";
import { Link, useLocation } from "react-router-dom";
import navbarHomeBg from "../../assets/backgrounds/navbar_home.png";

const links = [
  { name: "Home", path: "/home" },
  { name: "Culture", path: "/culture" },
  { name: "Heritage", path: "/heritage" },
  { name: "Community", path: "/community" },
  { name: "Traditions", path: "/traditions" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className="flex justify-center py-3 border-b border-[#ddd] relative z-10"
      style={{
        backgroundImage: `url(${navbarHomeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {links.map((link) => {
        const isActive = location.pathname.startsWith(link.path);

        return (
          <Link key={link.name} to={link.path}>
            <span
              className={`relative text-black font-medium text-lg cursor-pointer mx-4 transition-all duration-300
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
    </nav>
  );
};

export default Navbar;
