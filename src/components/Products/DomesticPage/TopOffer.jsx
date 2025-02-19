import React from "react";

export const TopOffer = () => {
  return (
    <div className="px-8 hidden md:flex md:text-sm lg:text-base rounded-lg justify-center items-center gap-3 bg-gradient-to-r from-blue-500 via-indigo-300 to-pink-300 py-2 shadow-lg">
      <div>
      <img
  className="w-8 h-8"
  src="https://cdn-icons-png.flaticon.com/128/483/483124.png"
  alt="Offer Announcement"
/>
      </div>
      <div>
        <p className="text-sm text-[#1A1A40] font-bold font-manrope">
          Recharge Now & Get an Extra
          <span className="text-[#1A1A40] font-extrabold"> ₹1500 </span>in Your Wallet
          on Your First Recharge of
          <span className="text-[#1A1A40] font-extrabold"> ₹900* </span>.
          Use Code:
          <span className="text-[#1A1A40] font-extrabold"> EXTRA600 </span> |
          Limited Time Deal – Hurry Up!
        </p>
      </div>
      <div className="space-x-2 space-y-2 lg:space-y-0 text-sm">
        <button className=" space-x-1 text-[#1A1A40] underline">
          *T&C Apply
        </button>
        <button className="bg-white border border-blue-700 px-2 py-1 rounded-lg hover:bg-blue-100 transition">
          Claim Now
        </button>
      </div>
    </div>
  );
};
