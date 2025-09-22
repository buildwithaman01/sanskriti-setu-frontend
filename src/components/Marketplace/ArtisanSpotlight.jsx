/**
 * ArtisanSpotlight.jsx
 * Description: Featured artisan section highlighting a fictional artisan.
 * - Includes artisan photo, story, and call-to-action.
 * - Showcases the human element behind the crafts.
 */

import React from "react";

const ArtisanSpotlight = ({ onComingSoon }) => {
  return (
    <div className="frosted-card p-8 text-center">
      <h2 className="text-3xl font-bold text-[#E98A19] mb-6">
        Meet Our Artisans
      </h2>

      {/* Artisan Profile */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        {/* Artisan Image Placeholder */}
        <div className="w-32 h-32 bg-gradient-to-br from-[#E98A19] to-[#D6791A] rounded-full flex items-center justify-center text-white text-4xl font-bold">
          👨‍🎨
        </div>

        {/* Artisan Info */}
        <div className="flex-1 text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Rajesh Kumar
          </h3>
          <p className="text-[#E98A19] font-medium mb-3">
            Master Potter • Bengal, India
          </p>
          <p className="text-gray-600 leading-relaxed">
            "For three generations, my family has been keeping the tradition of handcrafted pottery alive.
            Each piece tells a story of our cultural heritage and the skilled hands that create it.
            When you buy from us, you're not just getting a beautiful item –
            you're supporting a community and preserving a craft."
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => onComingSoon("Artisan profiles and stories will be available in the full version!")}
          className="bg-[#E98A19] text-white py-3 px-8 rounded-lg font-medium hover:bg-[#D6791A] transition-colors"
        >
          Learn More About Artisans
        </button>
        <button
          onClick={() => onComingSoon("Artisan collaboration features will be available in the full version!")}
          className="border border-[#E98A19] text-[#E98A19] py-3 px-8 rounded-lg font-medium hover:bg-[#E98A19] hover:text-white transition-colors"
        >
          Support Local Artisans
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
        <div>
          <div className="text-2xl font-bold text-[#E98A19]">500+</div>
          <div className="text-sm text-gray-600">Artisans Supported</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-[#E98A19]">50+</div>
          <div className="text-sm text-gray-600">Craft Traditions</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-[#E98A19]">1000+</div>
          <div className="text-sm text-gray-600">Happy Customers</div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanSpotlight;
