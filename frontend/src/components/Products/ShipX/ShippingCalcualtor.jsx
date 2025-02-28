import { useState } from "react";

function ShippingCalculator() {
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("United States");
  const [weight, setWeight] = useState("0.5");
  const [dimensions, setDimensions] = useState({
    length: "",
    width: "",
    height: "",
  });

  const handleInputChange = (e) => {
    setDimensions({ ...dimensions, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full items-center justify-between bg-blue-50 p-8 rounded-lg  mx-auto">
      {/* Left Section */}
      <div className="lg:w-1/2 text-left space-y-4">
        <h1 className="text-blue-950 text-2xl md:text-4xl font-bold leading-tight">
          Stay within the boundaries of your budget with ShiprocketX
        </h1>
        <p className="text-gray-600">
          Grow your business across boundaries at affordable shipping costs.
        </p>
        <div className="bg-blue-100 text-blue-900 px-4 text-xl py-2 inline-block rounded-md font-semibold">
          Rates starting at{" "}
          <span className="text-blue-700 font-bold">₹306/500gm</span> only
        </div>
      </div>

      {/* Right Section - Calculator Form */}
      <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-blue-950 text-2xl font-bold mb-4">
          Calculate your shipping cost
        </h2>

        {/* Pickup Pincode & Country */}
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter 6 digit Pickup Area Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="w-1/2 p-3 border border-gray-300 rounded-md"
          />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-1/2 p-3 border border-gray-300 rounded-md"
          >
            <option value="United States">United States</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        {/* Weight */}
        <div className="relative mb-4">
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <span className="absolute right-3 top-3 text-gray-600">kg</span>
        </div>

        {/* Dimensions */}
        <div className="flex gap-2 items-center mb-6">
          <input
            type="text"
            name="length"
            placeholder="Length"
            value={dimensions.length}
            onChange={handleInputChange}
            className="w-1/3 p-3 border border-gray-300 rounded-md"
          />
          <span className="text-gray-600">X</span>
          <input
            type="text"
            name="width"
            placeholder="Width"
            value={dimensions.width}
            onChange={handleInputChange}
            className="w-1/3 p-3 border border-gray-300 rounded-md"
          />
          <span className="text-gray-600">X</span>
          <input
            type="text"
            name="height"
            placeholder="Height"
            value={dimensions.height}
            onChange={handleInputChange}
            className="w-1/3 p-3 border border-gray-300 rounded-md"
          />
          <span className="p-3 bg-gray-100 border border-gray-300 rounded-md">
            CM
          </span>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-purple-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-purple-700">
          Calculate
        </button>
      </div>
    </div>
  );
}

export default ShippingCalculator;
