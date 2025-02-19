import React from "react";
import { Data } from "./Techdata";
import { GoArrowUpRight } from "react-icons/go";

export const TechCard = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 mb-5">
      {Data.map((data, i) => {
        return (
          <div key={i} className="p-5 bg-white shadow-lg rounded-lg h-full flex flex-col space-y-4">
            <img className="w-16 h-16 object-contain" src={data.icon} alt="Feature Icon" />
            <h2 className="text-[#0B0757] font-semibold text-xl">{data.facility}</h2>
            <p className="text-gray-700 text-md flex-grow">{data.desc}</p>
            <div className="text-blue-600 text-lg">
              <button className="cursor-pointer inline-flex items-center gap-x-1">
                Learn More <GoArrowUpRight />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
