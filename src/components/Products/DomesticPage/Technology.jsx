import React from "react";
import { TechCard } from "./TechCard";

export const Technology = () => {
  return (
    <div className="mx-8">
      <div className="pl-4">
        <h1 className="text-blue-600 text-xl">Powered by Innovation</h1>

        <h2 className="text-4xl lg:text-5xl font-semibold mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-500">
            Advanced Logistics Solutions
          </span>{" "}
          <span className="text-[#0B0757]">
            to simplify <br /> your shipping process
          </span>
        </h2>
      </div>
      {/* Tech Cards Section */}
      <TechCard />
    </div>
  );
};