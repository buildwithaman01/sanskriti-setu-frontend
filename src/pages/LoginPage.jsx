import React from "react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#E1A65D]/40 to-[#D0C5B5]/40">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center text-[#E1A65D]">
          Welcome
        </h1>
        <p className="text-center text-gray-600">
          Sign in or create an account
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1A65D]"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1A65D]"
        />

        <button className="w-full py-2 bg-[#E1A65D] text-white rounded-lg font-semibold hover:bg-[#c68d4a]">
          Sign In
        </button>

        <p className="text-sm text-center text-gray-500">or</p>

        <button className="flex items-center justify-center w-full gap-2 py-2 border rounded-lg hover:bg-gray-100">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <span className="text-[#E1A65D] cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
}
