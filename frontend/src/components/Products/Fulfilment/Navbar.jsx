import React from "react";
import Logo2 from "../../../assets/images/products/srfLogo-1.svg";

function Navbar() {
  return (
    <>
      <nav
        className={`w-full mt-4 p-2 pb-4 bg-[#ffffffbf] backdrop-blur-xs sticky top-0 z-40  `}
      >
        <div className=" max-w-6xl mx-auto flex justify-between items-center">
          <img src={Logo2} alt="Logo" className="h-12  mt-0" />
          <ul className=" gap-5 text-primes font-semibold  overflow-auto hide-scrollbar hidden md:flex  items-center whitespace-nowrap  ">
            <li>Overview</li>
            <li>Solution</li>
            <li>Rush</li>
            <li>Price</li>
            <li>Network</li>
            <li>Channel Integeration</li>
            <li>Blog</li>
            <li>
              <button className="bg-burgundy text-lg text-white px-8 p-2 text-center rounded-md">
                Enquiry Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
