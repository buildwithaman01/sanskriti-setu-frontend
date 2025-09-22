/**
 * CommunityFeed.jsx
 * Description: Mock community feed component showing sample user posts.
 * - Displays 3-4 fake user posts with cultural stories.
 * - Includes usernames, profile pictures, and engagement buttons.
 * - All interactions trigger coming soon modals.
 */

import React from "react";
import FeedPost from "./FeedPost";

const CommunityFeed = ({ onComingSoon }) => {
  const samplePosts = [
    {
      id: 1,
      username: "Ananya G.",
      userAvatar: "👩‍🎨",
      timestamp: "2 hours ago",
      content: "Just finished creating a beautiful rangoli for Diwali! The colors and patterns remind me of my grandmother's stories about how she used to make them with natural dyes. Each design tells a story of our family's heritage. 🪔✨",
      likes: 24,
      comments: 8,
      category: "Festivals & Celebrations"
    },
    {
      id: 2,
      username: "Rajesh P.",
      userAvatar: "👨‍🍳",
      timestamp: "5 hours ago",
      content: "Made my grandmother's special masala chai recipe today! The aroma takes me back to childhood mornings in Kerala. Food is such a beautiful way to preserve our cultural memories. Anyone else have family recipes they cherish? ☕🌿",
      likes: 31,
      comments: 12,
      category: "Food & Recipes"
    },
    {
      id: 3,
      username: "Priya M.",
      userAvatar: "👩‍🎭",
      timestamp: "1 day ago",
      content: "Attended a classical dance performance last evening - Kathak has always fascinated me! The precision, the expressions, the stories told through movement... it's like poetry in motion. Our traditional arts need more appreciation! 💃🎭",
      likes: 45,
      comments: 15,
      category: "Art & Crafts"
    },
    {
      id: 4,
      username: "Arjun S.",
      userAvatar: "👨‍🏫",
      timestamp: "2 days ago",
      content: "Visited the ancient temple in our village today. My grandfather used to tell me stories about how our family has been the caretakers for generations. These places hold so much history and meaning for our community. 🕉️🏛️",
      likes: 19,
      comments: 6,
      category: "Heritage Stories"
    }
  ];

  return (
    <div className="space-y-6 max-h-96 overflow-y-auto">
      {samplePosts.map((post) => (
        <FeedPost
          key={post.id}
          post={post}
          onComingSoon={onComingSoon}
        />
      ))}

      {/* Load More Button */}
      <div className="text-center pt-4">
        <button
          onClick={() => onComingSoon("Loading more stories will be available in the full version!")}
          className="bg-[#E98A19] text-white py-2 px-6 rounded-lg font-medium hover:bg-[#D6791A] transition-colors"
        >
          Load More Stories
        </button>
      </div>
    </div>
  );
};

export default CommunityFeed;
