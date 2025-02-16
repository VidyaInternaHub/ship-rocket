import React from "react";
import Button from "../../ui/Button";
import imgUrl from "../../../assets/images/shipx/map-globe-1.svg";

function CalculateNow() {
  return (
    <div
      className="relative h-36 flex items-center justify-between px-8 shadow-2xl"
      style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-blue-600 opacity-50"></div>
      <h1 className="text-3xl text-white z-10">
        Maximise profits by estimating costs beforehand
      </h1>
      <Button className="bg-white z-10">Calculate Now</Button>
    </div>
  );
}

export default CalculateNow;
