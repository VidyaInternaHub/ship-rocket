import React from "react";
import shipX from "../../../assets/images/shipx/ShipX.svg";
import cargoX from "../../../assets/images/shipx/CargoX.svg";
import launchX from "../../../assets/images/shipx/LaunchX.svg";

const experiences = [
  {
    image: shipX,
    desc: "Ship your international orders to over 220+ countries and territories with India’s leading cross border shipping solution",
  },
  {
    image: cargoX,
    desc: "Access transparent door-to-door B2B deliveries via air from India to anywhere, with no weight restrictions",
  },
  {
    image: launchX,
    desc: "Take your brand global and start selling to international customers with minimum investment risk via our fully managed enablement solutions",
  },
];

function OneWorld() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <h1 className="text-blue-950 text-2xl md:text-4xl font-bold my-4 leading-tight text-left">
        <span className="bg-gradient-to-r from-blue-300 to bg-green-200 bg-clip-text text-transparent font-bold">
          One world, many solutions: <br />
        </span>
        Discover the shipping advantage
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {experiences.map((experience, index) => (
          <div key={index} className="max-w-sm bg-gradient-to-r from-sky-50 to-white w-80 h-64 px-8 text-left border border-zinc-100 rounded-2xl">
            <div className="w-full border-b border-zinc-100">
              <img
                className="w-24 h-16"
                src={experience.image}
                alt={`Experience ${index + 1}`}
              />
            </div>
            <p className="text-zinc-400 mt-4 mb-4">{experience.desc}</p>
            <button className="text-blue-500 cursor-pointer">
              Know More <span>&#x2192;</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OneWorld;
