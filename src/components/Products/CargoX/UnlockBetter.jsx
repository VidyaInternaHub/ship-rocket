import React from "react";
import { Link } from "react-router-dom";
import unlockbg from '../../../assets/images/CargoX/unlockbg.webp'
import { UnlockCard } from "./UnlockCard";

export const UnlockBetter = () => {
  return (
    <>
      <div className="mt-8 px-4">
        {/* Heading Section with 3D Text Effect */}
        <div className="flex-row space-y-5 lg:flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-5xl font-semibold ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-sky-300">
                Unlock the better,
              </span>
              <br />
              <span className="text-[#0B0757]">bulkier advantage</span>
            </h1>
            <p className="md:text-xl text-gray-500 font-Manrope shadow-lg p-2 rounded-lg">
              Get your bulk shipments moving with efficient and reliable global{" "}
              <br /> logistics operations
            </p>
          </div>

          {/* Button with 3D Hover Effect */}
          <div>
            <Link
              className="bg-purple-600 text-white px-10 py-3 rounded-lg shadow-lg 
                        transition-transform transform hover:scale-105 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)] 
                        active:scale-95"
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Grid Section with UnlockCard and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div>
            <UnlockCard />
          </div>
          <div className=" pt-0 lg:pt-30">
            <img
              src={unlockbg}
              alt="unlockbg"
              className="transition-transform mx-auto w-[450px]  lg:w-[500px] hover:scale-105 "
            />
          </div>
        </div>
      </div>
    </>
  );
};
