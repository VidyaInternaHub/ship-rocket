import React from "react";
// import Logo from "../assets/Domestic/shiprocket_logo.svg";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function Nav1() {
  return (
    <nav
      className={`border-b-2  border-dotted border-gray-400 w-full mb-3 
      `}
    >
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              className="w-40 h-10"
              src="https://sr-website.shiprocket.in/wp-content/uploads/2023/01/shiprocket_logo.svg"
              alt="ShipRocket Logo"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-x-4 hidden lg:flex ">
          <div className="space-x-3 flex items-center text-gray-800 font-Manrop">
            <div className="flex items-center"> <Link to="/domestic">Products </Link><IoIosArrowDown/></div>
           
            <div className="flex items-center"> <Link to="/domestic">platform </Link><IoIosArrowDown/></div>
            <div> <Link to="/domestic">pricing </Link></div>
            <div className="flex items-center"> <Link to="/domestic">partner </Link><IoIosArrowDown/></div>
            <div className="flex items-center"> <Link to="/domestic">Track order </Link><IoIosArrowDown/></div>
            <div className="flex items-center"> <Link to="/domestic">Resources </Link><IoIosArrowDown/></div>
            <Link to="/home" className="text-blue-500">
              Quick
            </Link>
          </div>

          {/* Buttons */}
  <div className="space-x-3">
    <button className="border border-blue-600 w-24 text-blue-600 p-2 rounded-full">
      Log In
    </button>
    <button className="border w-24 p-2 bg-blue-600 rounded-full text-white">
      Try for free
    </button>
  </div>


        </div>
      </div>
    </nav>
  );
}

export default Nav1;
