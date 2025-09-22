/**
 * ProductCard.jsx
 * Description: Individual product card component for the marketplace.
 * - Displays product image, name, price, and description.
 * - Includes "Add to Cart" and "View Details" buttons that trigger coming soon modals.
 */

import React from "react";

const ProductCard = ({ product, onComingSoon }) => {
  return (
    <div className="frosted-card overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = "/src/assets/culture/vertical1.png"; // Fallback image
          }}
        />
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-[#E98A19] text-white px-3 py-1 rounded-full text-sm font-bold">
          {product.price}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => onComingSoon("Add to Cart functionality will be available in the full version!")}
            className="flex-1 bg-[#E98A19] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#D6791A] transition-colors text-sm"
          >
            Add to Cart
          </button>
          <button
            onClick={() => onComingSoon("Product details page will be available in the full version!")}
            className="flex-1 border border-[#E98A19] text-[#E98A19] py-2 px-4 rounded-lg font-medium hover:bg-[#E98A19] hover:text-white transition-colors text-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
