import React from "react";
import expertImg from "./../../../assets/images/products/img2-1.webp";


function OurExpert() {
  return (
    <div className="h-[310px] bg-gradient-to-r from-purple-500 to-sky-500 rounded-2xl mb-8 mx-4">
      <div className="h-[290px] mt-28 bg-blue-950 flex justify-between items-center px-16 rounded-t-2xl">
        <div>
          <h1 className="text-5xl text-left font-black text-white mb-8">
            Want to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent font-thin">
              know more?
            </span>
          </h1>
          <button className="text-lg bg-white px-20 py-4 font-bold rounded-lg">Talk to an expert</button>
        </div>
        <img className="h-88 w-80 -mt-5" src={expertImg} alt="expert image" />
      </div>
    </div>
  );
}

export default OurExpert;
