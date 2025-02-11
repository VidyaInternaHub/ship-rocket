import React from "react";
import herobg from "../../../assets/CargoX/herobg.png";

export const B2BShipment = () => {
  return (
    <div className="grid sm:grid-row lg:grid-cols-2 items-center  my-28 ">
      <div>
        <h1 className=" text-5xl md:text-6xl lg:text-6xl  mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-green-300  to-sky-300">
            Cross-border B2B{" "}
          </span>
          <span className="text-green-300">shipments</span>
          <span className="text-[#0B0757]">
            {" "}
            in a <br /> click
          </span>
        </h1>

        <p className="text-gray-600 text-lg  py-2 mx-2 font-TWKLausanne">
          Experience the seamless mix of operational ease and expertise with
          CargoX . Think of us as an extension of your operations team,
          relieving you from the intricacies of international air cargo
          shipping, making the process effortlessly smooth for you
        </p>
        <div className=" space-y-2 gap-x-4 md:mt-3">
          <button className="text-white bg-purple-500 rounded-md border w-1/3 h-[45px]">
            Get a qoute
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <img className="sm:mx-auto lg:m-0 w-[520px] h-[500px]" src={herobg} alt="" />
      </div>
    </div>
  );
};
