/**
 * Community.jsx
 * Description: Community page featuring story submission and social feed.
 * - Includes story submission form and mock community feed.
 * - Showcases the vision for user-generated cultural content.
 * - Background: Warm community theme with cultural elements.
 */

import React, { useState } from "react";
import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import CommunityFeed from "../components/Community/CommunityFeed";
import Modal from "../components/Modal";

// Community background
import communityBg from "../assets/backgrounds/culture_bg.png";

const Community = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [storyText, setStoryText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleComingSoon = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const handleStorySubmit = (e) => {
    e.preventDefault();
    if (storyText.trim()) {
      setModalMessage("Thank you for sharing your story! This feature will be fully functional in the complete version.");
      setShowModal(true);
      setStoryText("");
      setSelectedCategory("");
    }
  };

  const categories = [
    "Festivals & Celebrations",
    "Family Traditions",
    "Cultural Memories",
    "Art & Crafts",
    "Food & Recipes",
    "Heritage Stories"
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${communityBg})` }}
    >
      {/* Top Header */}
      <TopBar />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Story Submission Section */}
          <div className="frosted-card p-6">
            <h2 className="text-2xl font-bold text-[#E98A19] mb-6 text-center">
              Share Your Story
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Share your connection to our rich heritage and culture with the community.
            </p>

            <form onSubmit={handleStorySubmit} className="space-y-4">
              {/* Category Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose a category:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`p-2 text-xs rounded-lg border transition-all ${
                        selectedCategory === category
                          ? "bg-[#E98A19] text-white border-[#E98A19]"
                          : "bg-white text-gray-700 border-gray-300 hover:border-[#E98A19]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Story Text Area */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Story:
                </label>
                <textarea
                  value={storyText}
                  onChange={(e) => setStoryText(e.target.value)}
                  placeholder="Share a memory about your favorite festival, a family tradition, or your connection to Indian culture..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E98A19] focus:border-transparent resize-none"
                  rows={6}
                  required
                />
              </div>

              {/* Upload Image (UI Only) */}
              <div>
                <button
                  type="button"
                  onClick={() => handleComingSoon("Image upload feature will be available in the full version!")}
                  className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-[#E98A19] hover:text-[#E98A19] transition-colors"
                >
                  📷 Upload Image (Coming Soon)
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#E98A19] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#D6791A] transition-colors"
              >
                Share Your Story
              </button>
            </form>
          </div>

          {/* Community Feed Section */}
          <div className="frosted-card p-6">
            <h2 className="text-2xl font-bold text-[#E98A19] mb-6 text-center">
              Community Feed
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Discover stories from our cultural community.
            </p>

            <CommunityFeed onComingSoon={handleComingSoon} />
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="text-center p-6">
            <h2 className="text-2xl font-bold text-[#E98A19] mb-4">
              {modalMessage.includes("Thank you") ? "Story Submitted!" : "Coming Soon!"}
            </h2>
            <p className="text-gray-700 mb-4">{modalMessage}</p>
            <p className="text-sm text-gray-500">
              This feature will be fully functional in the complete version of SanskritiSetu.
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Community;
