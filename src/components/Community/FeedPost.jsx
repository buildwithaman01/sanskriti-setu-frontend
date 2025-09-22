/**
 * FeedPost.jsx
 * Description: Individual post component for the community feed.
 * - Displays user info, content, and engagement buttons.
 * - All interactions trigger coming soon modals.
 */

import React from "react";

const FeedPost = ({ post, onComingSoon }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gradient-to-br from-[#E98A19] to-[#D6791A] rounded-full flex items-center justify-center text-white text-lg">
          {post.userAvatar}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{post.username}</h4>
          <p className="text-sm text-gray-500">{post.timestamp}</p>
        </div>
        <div className="ml-auto">
          <span className="inline-block bg-[#E98A19] text-white text-xs px-2 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>

      {/* Engagement Buttons */}
      <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
        <button
          onClick={() => onComingSoon("Like functionality will be available in the full version!")}
          className="flex items-center gap-2 text-gray-600 hover:text-[#E98A19] transition-colors"
        >
          <span>❤️</span>
          <span className="text-sm">{post.likes}</span>
        </button>
        <button
          onClick={() => onComingSoon("Comment functionality will be available in the full version!")}
          className="flex items-center gap-2 text-gray-600 hover:text-[#E98A19] transition-colors"
        >
          <span>💬</span>
          <span className="text-sm">{post.comments}</span>
        </button>
        <button
          onClick={() => onComingSoon("Share functionality will be available in the full version!")}
          className="flex items-center gap-2 text-gray-600 hover:text-[#E98A19] transition-colors ml-auto"
        >
          <span>📤</span>
          <span className="text-sm">Share</span>
        </button>
      </div>
    </div>
  );
};

export default FeedPost;
