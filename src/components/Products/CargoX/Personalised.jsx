import React from "react";
import arrow from '../../../assets/images/CargoX/curlyArrow.png';

export const Personalised = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#1D103F] px-6 py-20 gap-6">
      {/* Left Section */}
      <div className="space-y-4 my-12">
        <h1 className="text-5xl pt-10 relative">
          <span className="text-white">Get your </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-sky-200">
            personalised quote
          </span>
          <img src={arrow} alt="arrow" className="absolute right-6 -top-4" />
        </h1>
        <p className="text-white w-3/4">
          Request and receive a customised estimate instantaneously in just 3-4
          working hours.
        </p>
      </div>

      {/* Right Section (Form) */}
      <div className="border bg-white p-6 rounded-lg shadow-lg text-gray-700">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col space-y-2 md:col-span-1">
            <label htmlFor="Fname" className="font-medium">Full Name</label>
            <input 
              type="text" 
              id="Fname" 
              placeholder="Full Name*" 
              className="w-full border border-gray-200 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-2 md:col-span-1">
            <label htmlFor="Email" className="font-medium">Email</label>
            <input 
              type="email" 
              id="Email" 
              placeholder="Email*" 
              className="w-full border border-gray-200 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col space-y-2 md:col-span-1">
            <label htmlFor="number" className="font-medium">Phone Number</label>
            <input 
              type="text" 
              id="number" 
              placeholder="Phone Number*" 
              className="w-full border border-gray-200 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col space-y-2 md:col-span-1">
            <label htmlFor="cname" className="font-medium">Company Name</label>
            <input 
              type="text" 
              id="cname" 
              placeholder="Company Name*" 
              className="w-full border px-3 py-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Select Orders */}
          <div className="flex flex-col space-y-2 md:col-span-1">
            <label htmlFor="order" className="font-medium">Select Orders</label>
            <select 
              id="order" 
              className="w-full border border-gray-200 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Select Orders*">Select Orders*</option>
              <option value="I have few personal shipments">I have few personal shipments</option>
              <option value="Less than 10">Less than 10</option>
              <option value="10-50">10-50</option>
              <option value="51-150">51-150</option>
              <option value="151-500">151-500</option>
              <option value="501-1000">501-1000</option>
              <option value="Above 1000">Above 1000</option>
            </select>
          </div>

          {/* Type of Shipment */}
          <div className="flex flex-col space-y-2 md:col-span-1">
            <label htmlFor="shipment" className="font-medium">Type of Shipment</label>
            <select 
              id="shipment" 
              className="w-full border border-gray-200 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Please Select*">Please Select*</option>
              <option value="Fba">Fba</option>
              <option value="Walmart">Walmart</option>
              <option value="Retail">Retail</option>
              <option value="Final Customer">Final Customer</option>
              <option value="Warehouse">Warehouse</option>
              <option value="Port to Port">Port to Port</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <input 
              className="bg-purple-600 text-white w-full py-2 rounded-lg cursor-pointer hover:bg-purple-700 transition duration-200" 
              type="submit" 
              value="Contact Us" 
            />
          </div>
        </form>
      </div>
    </div>
  );
};
