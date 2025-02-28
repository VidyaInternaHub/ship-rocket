import React, { useState } from "react";
import clientUser from "../../../assets/images/shipx/client-icon.svg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const experiences = [
  {
    name: "Yogesh Chavan",
    designation: "Silver Stars Gems And Jewellery",
    desc: "All thanks to offerings like 100% shipment trackability, 24/7 account support, competitive prices, and improved profit margins, we saw an increase in business growth",
  },
  {
    name: "Abhay",
    designation: "Founder, The Platnum",
    desc: "I have been using ShiprocketX services to ship to the USA and UK. The user-friendly interface made it simple for me to generate shipping labels, track shipments, and manage orders effortlessly. Their integration with major e-commerce platforms was a time-saver",
  },
  {
    name: "Ritesh Agarawal",
    designation: "Owner, Shree Jaipur Silver",
    desc: "What truly sets ShiprocketX apart is its commitment to providing cost-effective and efficient international shipping solutions. I was pleasantly surprised by the competitive rates they offered for both USA and UK",
  },{
    name:"Urooj Nizami",
    designation:"Owner, Universal Trading Company",
    desc:"ShiprocketX’s user friendly interface made it simple for us to generate and manage the orders. Their integration with major e-commerce platform is time saver and it ease our day today booking experience."
  },
  {
    name: "Khushagra",
    designation: "Owner, The Pouring Affair",
    desc: "Partnering with ShiprocketX has been a game-changer for my eCommerce business. Their reliable and efficient delivery services have not only boosted our operational efficiency but also significantly enhanced our customer satisfaction. Our products now reach our customers faster and in pristine condition.",
  },
  {
    name: "Maximum Choices",
    designation: "Owner, Maximum Choices",
    desc: "ShiprocketX is our go-to for all of our shipment needs, it fullfills our logistics needs. Without it,work would be much more hectic, expenses would increase a lot, customers wouldn’t be as satisfied neither with the higher shipping charges nor with slower delivery as a result our sales would drop too!",
  },
  {
    name: "Gaman",
    designation: "Owner, Bhagsu Brands",
    desc: "Joining hands with ShiprocketX has tremendously increased our orders by reducing our delivery time and also providing tracking for the packages.",
  },
  {
    name: "Yusuf",
    designation: "Owner, Yusuf Gems",
    desc: "The regular support we have received from Shiprocket is unmatched. With ShiprocketX, it’s easy to ship and track orders around the globe with complete transparency.",
  },
  {
    name: "Gaurang Rathi",
    designation: "Owner, Amayra Creations",
    desc: "ShiprocketX services have been a game-changer for my business. I have been solely using only their services since a few months to ship products to both the USA and the UK. Thank you once again for your exceptional service",
  },
  {
    name: "Abhishek",
    designation: "Owner, Jwell Exports",
    desc: "ShiprocketX has become our stable and partner helping in growth of our international business. Our business has increased almost 1.5 times after joining with ShiprocketX.",
  },
  {
    name: "Vijay Dixit",
    designation: "Owner, Satyam Overseas",
    desc: "After choosing ShiprocketX, its reliable service and fast delivery makes a positive impact to my buyers. This results in repeatable orders for my store. Also it’s very cost effective.",
  },
];

function OurClient() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col gap-8 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-blue-950 text-3xl md:text-7xl font-bold my-4 leading-tight text-left">
          Our Client{" "}
          <span className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent font-bold">
            Experiences
          </span>
        </h1>
        <div className="flex justify-center gap-4 my-4">
          <button
            className="p-2 bg-gray-200 rounded-full"
            onClick={handlePrevious}
          >
            <BsChevronLeft />
          </button>
          <button className="p-2 bg-gray-200 rounded-full" onClick={handleNext}>
            <BsChevronRight />
          </button>
        </div>
      </div>
      <div className="flex gap-8 overflow-hidden">
        {experiences
          .slice(currentIndex, currentIndex + 3)
          .map((experience, index) => (
            <div
              key={index}
              className="max-w-sm bg-white w-96 h-80 px-8 py-6 text-left border border-zinc-200 rounded-2xl mb-6"
            >
              <img
                className="w-8 h-8 mb-4"
                src={clientUser}
                alt="client user"
              />
              <div className="font-bold">{experience.name}</div>
              <div className="text-sm text-zinc-500 mb-4">
                {experience.designation}
              </div>
              <p className="text-zinc-400">{experience.desc}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default OurClient;
