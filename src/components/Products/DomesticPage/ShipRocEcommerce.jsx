import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import businessimg from "../../../assets/images/Domestic/businessimg.webp";

export const ShipRocEcommerce = () => {
  return (
    <div className="mx-8 mt-6">
      {/* Main Heading */}
      <h1 className="text-4xl lg:text-5xl font-semibold mb-12">
        <span className="text-[#0B0757]">
          Empower your eCommerce <br />
          business with{" "}
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-500">
          AI-driven growth
        </span>
      </h1>

      <div className="max-w-full pt-6 mt-12 bg-gradient-to-r from-blue-50 via-green-50 to-purple-50 px-8 py-3 rounded-lg shadow-lg">
        {/* Content Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center my-8">
          {/* Left Section */}
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-5xl text-[#0B0757] font-bold">
              Smart Inventory Management
            </h1>
            <p className="text-gray-700 text-lg tracking-tight py-2 mx-2 font-TWKLausanne">
              Optimize stock levels, reduce waste, and automate inventory sync
              with AI-powered insights.
            </p>
            <div className="mt-6">
              <Link className="text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 px-6 py-2 rounded-lg inline-flex items-center gap-x-2 hover:shadow-lg transition">
                Explore Growth
                <GoArrowUpRight className="text-xl" />
              </Link>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="flex justify-center md:justify-end">
            <img
              className="w-full md:w-[350px] lg:w-[450px] h-auto rounded-lg"
              src={businessimg}
              alt="AI-powered Business Insights"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
