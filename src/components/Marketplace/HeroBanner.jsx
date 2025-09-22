/**
 * HeroBanner.jsx
 * Description: Hero banner component for the Artisan Marketplace page.
 * - Features compelling imagery and messaging about supporting local artisans.
 * - Uses cultural background and warm color scheme.
 */

import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative py-16 px-4 text-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-[#E98A19] to-[#D6791A]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-glow">
          Artisan Marketplace
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-6">
          Discover authentic Indian crafts and support local artisans
        </p>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Connect with traditional craftsmanship and bring home pieces of cultural heritage,
          while empowering the communities that create them.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border-2 border-white/20 rounded-full"></div>
      <div className="absolute bottom-4 left-8 w-20 h-20 border-2 border-white/20 rounded-full"></div>
      <div className="absolute bottom-8 right-4 w-14 h-14 border-2 border-white/20 rounded-full"></div>
    </div>
  );
};

export default HeroBanner;
