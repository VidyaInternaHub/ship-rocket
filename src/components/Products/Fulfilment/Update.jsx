import React from "react";

export const Update = () => {
  return (
    <>
      <div className="relative mb-10 py-14 bg-gradient-to-r from-blue-500 to-sky-300 rounded-lg flex justify-center items-center space-y-16 px-4 md:px-20 lg:px-28 mx-4 overflow-hidden ">
        <div className="flex flex-col justify-center items-center text-center space-y-4 w-full max-w-3xl">
          <div className="text-4xl md:text-5xl font-bold text-white">
            <h1>Never miss an update</h1>
          </div>
          <div className="xs:text-xl lg:text-basic font-manrope text-white">
            <p>
              Always stay in the know about our new product releases and feature
              updates. Enter your e-mail address
            </p>
          </div>
          <div className="bg-white w-full max-w-lg rounded-lg text-xl flex justify-between items-center p-2">
            <input
              className="pl-2 flex-1 rounded-lg outline-none"
              type="email"
              placeholder="Enter your e-mail address"
            />
            <button className="bg-purple-400 text-white w-40 py-2 ml-2 rounded-lg">
              I'm in
            </button>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 flex justify-evenly items-center animate-slideup">
          <div className="opacity-20 bg-gray-100 h-70 w-70 rounded-full"></div>
          <div className="opacity-20 bg-gray-100 h-40 w-40 rounded-full"></div>
        </div>
      </div>
    </>
  );
};