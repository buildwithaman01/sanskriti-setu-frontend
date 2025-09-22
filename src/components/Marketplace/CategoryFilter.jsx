/**
 * CategoryFilter.jsx
 * Description: Category and filter UI component for the marketplace.
 * - Provides visual elements for browsing categories and filters.
 * - All buttons trigger coming soon modals for demo purposes.
 */

import React from "react";

const CategoryFilter = ({ onComingSoon }) => {
  const categories = [
    { name: "Pottery", icon: "🏺", count: 45 },
    { name: "Textiles", icon: "🧵", count: 32 },
    { name: "Jewelry", icon: "💍", count: 28 },
    { name: "Paintings", icon: "🎨", count: 67 },
    { name: "Sculptures", icon: "🗿", count: 23 },
    { name: "Home Decor", icon: "🏠", count: 41 }
  ];

  const filters = [
    { name: "Under ₹1,000", range: "₹0 - ₹1,000" },
    { name: "₹1,000 - ₹5,000", range: "₹1,000 - ₹5,000" },
    { name: "Above ₹5,000", range: "₹5,000+" },
    { name: "New Arrivals", range: "Latest" },
    { name: "Best Sellers", range: "Popular" },
    { name: "Handmade Only", range: "Authentic" }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-bold text-[#E98A19] mb-6 text-center">
        Browse Categories & Filters
      </h2>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onComingSoon(`${category.name} category browsing will be available in the full version!`)}
              className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-[#E98A19] hover:bg-[#E98A19] hover:text-white transition-all group"
            >
              <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {category.icon}
              </span>
              <span className="font-medium text-sm">{category.name}</span>
              <span className="text-xs text-gray-500 group-hover:text-white/80">
                {category.count} items
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => onComingSoon(`${filter.name} filter will be available in the full version!`)}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-[#E98A19] hover:bg-[#E98A19] hover:text-white transition-all"
            >
              <span className="font-medium">{filter.name}</span>
              <span className="text-sm text-gray-500 hover:text-white/80">
                {filter.range}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search for products, artisans, or categories..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E98A19] focus:border-transparent"
            onClick={() => onComingSoon("Search functionality will be available in the full version!")}
            readOnly
          />
          <button
            onClick={() => onComingSoon("Advanced search will be available in the full version!")}
            className="bg-[#E98A19] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#D6791A] transition-colors"
          >
            🔍 Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
