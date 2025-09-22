/**
 * FeedPost.jsx
 * Description: Individual post component for the community feed.
 * - Displays user info, content, and engagement buttons.
 * - All interactions trigger coming soon modals.
 */

import React from "react";

const FeedPost = ({ post, onComingSoon }) => {
  return (
    <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm border border-gray-100">
      {/* User Info */}
      <div className="flex items-center gap-2 md:gap-3 mb-3">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#E98A19] to-[#D6791A] rounded-full flex items-center justify-center text-white text-base md:text-lg">
          {post.userAvatar}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-800 text-sm md:text-base">{post.username}</h4>
          <p className="text-xs md:text-sm text-gray-500">{post.timestamp}</p>
        </div>
        <div className="flex-shrink-0">
          <span className="inline-block bg-[#E98A19] text-white text-xs px-2 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-3 md:mb-4">
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">{post.content}</p>
      </div>

      {/* Engagement Buttons */}
      <div className="flex items-center gap-3 md:gap-4 pt-2 md:pt-3 border-t border-gray-100">
        <button
          onClick={() => onComingSoon("Like functionality will be available in the full version!")}
          className="flex items-center gap-1 md:gap-2 text-gray-600 hover:text-[#E98A19] transition-colors touch-manipulation"
        >
          <span className="text-base md:text-lg">❤️</span>
          <span className="text-xs md:text-sm">{post.likes}</span>
        </button>
        <button
          onClick={() => onComingSoon("Comment functionality will be available in the full version!")}
          className="flex items-center gap-1 md:gap-2 text-gray-600 hover:text-[#E98A19] transition-colors touch-manipulation"
        >
          <span className="text-base md:text-lg">💬</span>
          <span className="text-xs md:text-sm">{post.comments}</span>
        </button>
        <button
          onClick={() => onComingSoon("Share functionality will be available in the full version!")}
          className="flex items-center gap-1 md:gap-2 text-gray-600 hover:text-[#E98A19] transition-colors touch-manipulation ml-auto"
        >
          <span className="text-base md:text-lg">📤</span>
          <span className="text-xs md:text-sm">Share</span>
        </button>
      </div>
    </div>
  );
};

export default FeedPost;
