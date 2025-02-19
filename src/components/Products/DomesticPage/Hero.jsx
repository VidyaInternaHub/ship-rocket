import React from "react";
import bgimg from "../../../assets/images/Domestic/bgimg.webp";

export const Hero = () => {
  return (
    <div className="grid sm:grid-row md:grid-cols-2 items-center px-8 my-28">
      <div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-10">
          <span>Effortless </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-500">
            Shipping
          </span>
          <span className="text-[#0B0757]"> for Your Online Store</span>
        </h1>

        <p className="text-gray-600 text-lg tracking-tight py-2 mx-2 font-TWKLausanne">
          Automate & optimize your eCommerce shipping with our seamless  
          platform—saving time, reducing costs, and enhancing delivery speed.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 space-y-2 gap-x-4 mt-4">
          <button className="bg-blue-500 hover:bg-white hover:text-blue-600 border hover:border-blue-600 transition duration-300 text-white rounded-md py-2 px-6 w-full h-[40px]">
            Start Shipping
          </button>
          <button className="bg-white text-blue-500 border-blue-500 border rounded-md py-2 px-6 w-full h-[40px] hover:bg-blue-50">
            View Demo
          </button>
        </div>
      </div>
      
      <div className="flex justify-end">
        <img className="w-[500px] h-[320px]" src={bgimg} alt="Shipping Process" />
      </div>
    </div>
  );
};
