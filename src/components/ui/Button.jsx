import React from "react";

function Button({ className = "", buttonName }) {
  return (
    <button
      className={`border border-sky-500 hover:bg-sky-500 hover:text-white text-sky-500 font-bold py-3 px-4 md:w-44 rounded-lg text-center ${className}`}
    >
      {buttonName}
    </button>
  );
}

export default Button;
