import React from 'react';
import features from './Unlockdata.js';

export const UnlockCard = () => {
  return (
    <div>
      {features.map((data, index) => (
        <div 
          key={index} 
          className="my-4 px-6 py-6 w-full mx-auto md:w-[630px] lg:w-[400px] rounded-xl bg-white border border-gray-200 
                     shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.5)] 
                     transition-transform duration-300 ease-in-out 
                     hover:scale-105 hover:shadow-[0px_10px_20px_rgba(0,0,0,0.2)] active:scale-95"
        >
          <h1 className="font-semibold text-xl text-[#0b0757]">{data.category}</h1>
          <div className="mt-4 flex flex-col space-y-1">
            {data.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-x-3">
                <img src={item.icon} alt="tick" className="w-4 h-4" />
                <p className="text-gray-500 font-Manrope">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
