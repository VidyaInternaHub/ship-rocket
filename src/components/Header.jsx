import React from "react";
import Logo from "../assets/images/brands/shiprocket_logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex bg-white p-4 w-full">
      <ul className="flex gap-4 w-full items-center">
        <li>
          <Link to="/home">
            <img src={Logo} alt="Logo" className="w-40" />
          </Link>
        </li>
        <li>
          <Link to="/home">Products</Link>
        </li>
        <li>
          <Link to="/home">Platform</Link>
        </li>
        <li>
          <Link to="/home">Pricing</Link>
        </li>
        <li>
          <Link to="/home">Partners</Link>
        </li>
        <li>
          <Link to="/home">Track Order</Link>
        </li>
        <li>
          <Link to="/home">Resources</Link>
        </li>
        <li>
          <Link to="/home" className="text-blue-500">
            Quick
          </Link>
        </li>
      </ul>
      <div className="flex gap-2">
        <button className="border border-blue-600 w-24 text-blue-600 p-2 rounded-full">Log In</button>
        <button className="border w-24 p-2 bg-blue-600 rounded-full text-white">Try for free</button>
      </div>
    </nav>
  );
}

export default Header;
