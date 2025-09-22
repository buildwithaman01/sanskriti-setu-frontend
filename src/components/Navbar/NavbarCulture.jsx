import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Home", path: "/home" },
  { name: "Culture", path: "/culture" },
  { name: "Heritage", path: "/heritage" },
  { name: "Community", path: "/community" },
  { name: "Traditions", path: "/traditions" },
];

export default function NavbarCulture() {
  const location = useLocation();

  return (
    <div className="w-full bg-[#D0C5B5] border-b-2 border-[#E1A65D]">
      <nav className="flex justify-center py-3">
        {links.map((link) => {
          const isActive = location.pathname.startsWith(link.path);

          return (
            <Link key={link.name} to={link.path}>
              <span
                className={`mx-6 text-lg md:text-xl font-medium cursor-pointer transition-colors duration-300
                  ${
                    isActive
                      ? "text-[#E1A65D] border-b-2 border-[#E1A65D]"
                      : "text-[#C2B29A] hover:text-[#E1A65D]"
                  }`}
              >
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
