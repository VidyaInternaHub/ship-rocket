import React from "react";
import shipplabg from "../../../assets/images/CargoX/shipplanbg.webp";

export const ShippingPlan = () => {
  return (
    <div className="max-w-full mx-8">
      {/* Responsive Grid Layout */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center mt-16 bg-[#F6FAFE] rounded-xl px-8 lg:px-14 pt-12 pb-14">
        
        {/* Content Section - Appears First on all screen sizes */}
        <div className="order-1 space-y-4">
          <h1 className="text-3xl lg:text-5xl">Tailor-Made Shipping Plans</h1>
          <p className="text-gray-400 text-lg tracking-tight py-2 mx-2 font-TWKLausanne">
          With flexible courier services at your fingertips, ship at a timeline of your choice within your budget to any global destination
          </p>
         
        </div>

        {/* Image Section - Appears Second on all screen sizes */}
        <div className="order-2 flex justify-center md:justify-end">
          <img
            className="w-full md:w-[350px] lg:w-[450px] h-auto"
            src={shipplabg}
            alt="Pickup Background"
          />
        </div>

      </div>
    </div>
  );
};
