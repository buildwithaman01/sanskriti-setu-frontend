/**
 * Marketplace.jsx
 * Description: Artisan Marketplace page showcasing cultural crafts and products.
 * - Features hero banner, product cards, artisan spotlight, and category filters.
 * - All interactive elements show "Coming Soon!" modals for demo purposes.
 * - Background: Cultural pattern with warm marketplace theme.
 */

import React, { useState } from "react";
import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/Marketplace/HeroBanner";
import ProductCard from "../components/Marketplace/ProductCard";
import ArtisanSpotlight from "../components/Marketplace/ArtisanSpotlight";
import CategoryFilter from "../components/Marketplace/CategoryFilter";
import Modal from "../components/Modal";

// Cultural marketplace background
import marketplaceBg from "../assets/backgrounds/culture_bg.png";

const Marketplace = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleComingSoon = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  // Sample artisan products
  const products = [
    {
      id: 1,
      name: "Hand-Painted Durga Idol",
      price: "₹ 2,500",
      description: "Handmade by local artisans from Bengal, supporting traditional crafts.",
      image: "/src/assets/carousel/durga.png"
    },
    {
      id: 2,
      name: "Traditional Madhubani Art",
      price: "₹ 1,800",
      description: "Authentic Madhubani painting showcasing cultural heritage.",
      image: "/src/assets/culture/vertical1.png"
    },
    {
      id: 3,
      name: "Tribal Jewelry Set",
      price: "₹ 3,200",
      description: "Handcrafted silver jewelry from indigenous tribal communities.",
      image: "/src/assets/culture/vertical2.png"
    },
    {
      id: 4,
      name: "Pottery Vase",
      price: "₹ 950",
      description: "Traditional clay pottery with intricate cultural designs.",
      image: "/src/assets/culture/vertical3.png"
    },
    {
      id: 5,
      name: "Handwoven Textile",
      price: "₹ 4,500",
      description: "Premium handwoven fabric with traditional motifs.",
      image: "/src/assets/culture/vertical4.png"
    }
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${marketplaceBg})` }}
    >
      {/* Top Header */}
      <TopBar />

      {/* Navigation */}
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner />

      {/* Category Filters */}
      <CategoryFilter onComingSoon={handleComingSoon} />

      {/* Main Content */}
      <div className="container mx-auto px-3 md:px-4 py-6 md:py-8">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onComingSoon={handleComingSoon}
            />
          ))}
        </div>

        {/* Artisan Spotlight */}
        <ArtisanSpotlight onComingSoon={handleComingSoon} />
      </div>

      {/* Coming Soon Modal */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="text-center p-6">
            <h2 className="text-2xl font-bold text-[#E98A19] mb-4">Coming Soon!</h2>
            <p className="text-gray-700 mb-4">{modalMessage}</p>
            <p className="text-sm text-gray-500">
              This feature will be available in the full version of SanskritiSetu.
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Marketplace;
