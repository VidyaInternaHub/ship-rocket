import React from "react";
import compliabg from "../../../assets/images/CargoX/compliancebg.png";

export const Unmatch = () => {
  return (
    <div className="mx-8 mt-12">
       {/* Main Heading */}
       <h1 className=" text-5xl font-semibold drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-sky-300">
              Unmatched features
              </span>
              
              <span className="text-[#0B0757]"> for seamless operations</span>
            </h1>

    <div className="max-w-full pt-6 mt-12 bg-orange-100 px-8 py-3 rounded-lg">
     

      {/* Content Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center my-8">
        {/* Left Section */}
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-5xl">High SLA Compliance</h1>
          <p className="text-gray-400 text-lg tracking-tight py-2 mx-2 font-TWKLausanne">
          Plan your delivery schedules with confidence. We ensure your cargo reaches its destination promptly, 90% of the time.
          </p>
        
        </div>

        {/* Right Section (Image) */}
        <div className="flex justify-center md:justify-end">
          <img
            className="w-full md:w-[350px] lg:w-[450px] h-auto"
            src={compliabg}
            alt="Business Background"
          />
        </div>
      </div>
    </div>
    </div>
  );
};
