import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "../../assets/images/brands/shiprocket_logo.svg";

function FixedHeader() {
  
  const { scrollY } = useScroll();

  // Map the scroll position to a transform value for smooth animation
  const y = useTransform(scrollY, [0, 200], [-100, 0]); // When scrolling, move header from top (-100) to 0
  const opacity = useTransform(scrollY, [0, 200], [0, 1]); // Fade in as you scroll

  return (
    <motion.nav
      style={{ y, opacity }}
      className="hidden md:flex md: bg-white fixed top-2 left-1/2 transform  -translate-x-1/2 p-4 w-4/5 rounded-full shadow-lg items-center justify-center z-50"
    >
      <ul className="flex gap-4 items-center justify-center w-full">
        <li>
          <Link to="/home">
            <img src={Logo} alt="Logo" className="w-40" />
          </Link>
        </li>
        <li>
          <Link to="/home" className="text-gray-700 hover:text-blue-500">
            Products
          </Link>
        </li>
        <li>
          <Link to="/home" className="text-gray-700 hover:text-blue-500">
            Platform
          </Link>
        </li>
        <li>
          <Link to="/home" className="text-gray-700 hover:text-blue-500">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/home" className="text-gray-700 hover:text-blue-500">
            Partners
          </Link>
        </li>
        <li>
          <Link to="/home" className="text-gray-700 hover:text-blue-500">
            Track Order
          </Link>
        </li>
        <li>
          <Link to="/home" className="text-gray-700 hover:text-blue-500">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/home" className="text-blue-500 hover:text-blue-700">
            Quick
          </Link>
        </li>
      </ul>
      <div className="flex gap-2">
        <button className="border border-blue-600 w-24 text-blue-600 p-2 rounded-full">
          Log In
        </button>
        <button className="border w-24 p-2 bg-blue-600 rounded-full text-white">
          Try for free
        </button>
      </div>
    </motion.nav>
  );
}

export default FixedHeader;
