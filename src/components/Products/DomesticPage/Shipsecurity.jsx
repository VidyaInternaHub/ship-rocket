import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import securityImage from "../../../assets/images/Domestic/securitybg.webp"; // Replace with the actual path

export const Shipsecurity = () => {
  return (
    <div className="max-w-full mx-8 pt-6">
      {/* Content Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center mt-6 mb-8 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-xl px-8 lg:px-14 pt-12 pb-4 shadow-lg">
        
        {/* Image Section - Left */}
        <div className="order-2 sm:order-2 md:order-1 flex justify-center md:justify-start">
          <img
            className="w-full md:w-[350px] lg:w-[450px] h-auto rounded-lg"
            src={securityImage}
            alt="Secure Shipping Protection"
          />
        </div>

        {/* Content Section - Right */}
        <div className="order-1 sm:order-1 md:order-2 space-y-4">
          <h1 className="text-3xl lg:text-5xl text-[#0B0757] font-bold">
            Hassle-Free Shipment Protection
          </h1>
          <p className="text-gray-700 text-lg tracking-tight py-2 mx-2 font-TWKLausanne">
            Ensure your shipments are covered with advanced security measures, 
            AI-driven tracking, and automated claim processing to safeguard your deliveries.
          </p>
          <div className="mt-6">
            <Link className="text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 px-6 py-2 rounded-lg inline-flex items-center gap-x-2 hover:shadow-lg transition">
              Learn More
              <GoArrowUpRight className="text-xl" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
