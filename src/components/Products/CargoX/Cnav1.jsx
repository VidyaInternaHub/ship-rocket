import React from "react";
// import Logo from "../assets/Domestic/shiprocket_logo.svg";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function Cnav1() {
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
          <div className="space-x-4 flex items-center text-gray-800 font-Manrop">
            <div className="flex items-center"> <Link to="/domestic">Products </Link><IoIosArrowDown/></div>
           
            <div className="flex items-center"> <Link to="/domestic">platform </Link><IoIosArrowDown/></div>
            <div> <Link to="/domestic">pricing </Link></div>
            <div className="flex items-center"> <Link to="/domestic">partner </Link><IoIosArrowDown/></div>
            <div> <Link to="/domestic">Track order </Link></div>
            <div className="flex items-center"> <Link to="/domestic">Resources </Link><IoIosArrowDown/></div>
            <Link to="/home" className="text-blue-500">
              Quick
            </Link>
          </div>

         
        </div>
      </div>
    </nav>
  );
}

export default Cnav1;
