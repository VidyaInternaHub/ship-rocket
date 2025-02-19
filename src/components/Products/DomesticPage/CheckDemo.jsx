import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

export const CheckDemo = () => {
  return (
    <div className="px-8 hidden md:flex rounded-lg justify-center items-center gap-4 bg-gradient-to-r from-blue-500 via-indigo-300 to-pink-300 py-3 shadow-lg mx-8">
      <div>
        <img
          className="w-10"
          src="https://cdn-icons-png.flaticon.com/128/2995/2995463.png" // AI Automation Icon
          alt="AI Automation"
        />
      </div>
      <div>
        <p className="text-sm text-[#1A1A40] font-bold font-manrope">
          Discover the future of logistics with{" "}
          <span className="text-[#1A1A40] font-extrabold">
            AI-powered shipping automation.
          </span>{" "}
          Optimize deliveries and cut costs effortlessly!
        </p>
      </div>
      <div className="text-purple-600">
        <Link className="text-white bg-purple-500 px-6 py-2 rounded-lg inline-flex items-center gap-x-2 hover:bg-purple-600 transition">
          Try AI Automation
          <GoArrowUpRight className="text-xl" />
        </Link>
      </div>
    </div>
  );
};
