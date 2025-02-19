import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import newMapImg from "../../../assets/images/Domestic/newmapbg.webp"; 

export const Shipping_Map = () => {
  return (
    <div className="max-w-full mx-8 pt-6 mt-30 bg-[#F6FAFE] px-8 py-6 rounded-lg shadow-lg">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center my-8 gap-6">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug">
            <span className="text-[#0B0757]">One shipping platform </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-500">
              to connect worldwide
            </span>
          </h1>
          <p className="text-gray-700 text-lg tracking-tight py-3 mx-2 font-medium">
            Deliver across 24000+ locations with ease. Our advanced logistics network ensures faster, 
            affordable, and seamless shipping solutions for your business.
          </p>
          <h1 className="text-2xl mt-4">
            <span>Start shipping at just </span>
            <span className="font-bold text-blue-600">₹19/500gm </span>
            <span>— super affordable rates!</span>
          </h1>
          <div className="text-blue-600 text-lg mt-6 font-semibold">
            <Link className="inline-flex items-center gap-x-1 hover:underline">
              View Plans
              <GoArrowUpRight className="text-xl" />
            </Link>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            className="w-full max-w-[450px] md:max-w-[380px] lg:max-w-[500px] rounded-xl shadow-md"
            src={newMapImg}
            alt="Global Shipping Map"
          />
        </div>
      </div>
    </div>
  );
};
