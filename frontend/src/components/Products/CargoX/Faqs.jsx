import { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { data } from "./faqdata.js";

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-sky-100 px-6 pt-10 pb-14">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b0757] mb-6 pt-12 ">Frequently Asked Questions</h2>
      <div className="space-y-4 max-w">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="w-full bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className=" w-full text-left p-5 font-semibold text-lg flex justify-between items-center bg-white hover:bg-gray-100 transition duration-300 rounded-lg"
            >
              <span className="text-base md:text-xl text-[#0b0757]">{item.title}</span>
              <IoMdArrowDropdownCircle
                className={` text-3xl text-[#0b0757] transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96 p-4 opacity-100" : "max-h-0 p-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
