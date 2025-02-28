import React from "react";

function Button({ className = "", children }) {
  return (
    <button
      className={`${className} border border-sky-500 hover:bg-sky-500 hover:text-white text-sky-500 font-bold py-3 px-4 md:w-44 rounded-lg text-center `}
    >
      {children}
    </button>
  );
}

export default Button;
