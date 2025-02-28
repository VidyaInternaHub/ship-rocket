import React from "react";
import Button from "../../ui/Button";
import { BsArrowRight } from "react-icons/bs";

const global = [
  "Ship from India to Australia",
  "Ship from India to UAE",
  "Ship from India to United Kingdom",
  "Ship from India to Singapore",
  "Ship from India to Canada",
  "Ship from India to USA",
];

function LocalGlobal() {
  return (
    <div className="p-4 bg-blue-50">
      <h1 className="text-blue-950 text-2xl md:text-5xl font-bold my-4 leading-tight text-left">
        Go from{" "}
        <span className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent font-bold">
          local{" "}
        </span>
        to{" "}
        <span className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent font-bold">
          global
        </span>
      </h1>
      <div className="grid md:grid-cols-3 gap-4 justify-center items-center mx-auto">
        {global.map((item, index) => (
          <Button
            key={index}
            className="group w-full md:w-auto my-2 shadow-2xl flex items-center justify-between py-5"
          >
            <span>{item}</span>
            <BsArrowRight className="transition-all group-hover:-rotate-45 " />
          </Button>
        ))}
      </div>
    </div>
  );
}

export default LocalGlobal;
