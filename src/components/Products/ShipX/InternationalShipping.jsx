import premiumPlus from "../../../assets/images/shipx/Premium-Plus.svg";
import premium from "../../../assets/images/shipx/Premium.svg";
import priority from "../../../assets/images/shipx/Priority.svg";
import economy from "../../../assets/images/shipx/Economy.svg";
import premiumBook from "../../../assets/images/shipx/Premium-Books.svg";
import express from "../../../assets/images/shipx/Express.svg";

import Premium from "../../../assets/images/shipx/Premium.webp";

import image1 from "../../../assets/images/shipx/2-1.webp";
import image2 from "../../../assets/images/shipx/3-1.webp";
import image3 from "../../../assets/images/shipx/4-1.webp";
import image4 from "../../../assets/images/shipx/Updated-1-1.png";
import image5 from "../../../assets/images/shipx/updated2.png";
import image6 from "../../../assets/images/shipx/7-1.webp";
import image7 from "../../../assets/images/shipx/8-1.webp";
import image8 from "../../../assets/images/shipx/9-1.webp";
import image9 from "../../../assets/images/shipx/10.webp";

// Delivery options
const deliveryOptions = [
  { image: premium, desc: "Economically priced 10-12 day deliveries" },
  { image: priority, desc: "Prioritised deliveries as fast as 8 days" },
  {
    image: premiumPlus,
    desc: "Deliveries to the US with charges based on deadweight only",
  },
  {
    image: economy,
    desc: "Cost-efficient deliveries to the UK within 10 days",
  },
  {
    image: premiumBook,
    desc: "Prompt deliveries of directory, advertising, or editorial shipments",
  },
  { image: express, desc: "Urgent deliveries in just 4 days*" },
];

// International shipping features
const internationals = [
  {
    title: "Hassle-free customs clearance",
    desc: "With transparent billing & tax compliance, we ensure you always export your shipments effortlessly. Zero paperwork hassles.",
    image: image1,
  },
  {
    title: "Speedy international delivery",
    desc: "Your orders are processed through automated workflows, helping you deliver your international orders more efficiently.",
    image: image2,
  },
  {
    title: "Real-time updates",
    desc: "Get closer to your customers wherever they are. Keep them informed and assured at every step through Email & WhatsApp*",
    image: image3,
  },
  {
    title: "Insightful analytics dashboard",
    desc: "Take data-backed decisions. View your shipping metrics, courier performance, country-wise distribution, bestsellers & buyer persona in one glance on the ShiprocketX dashboard.",
    image: image4,
  },
  {
    title: "Worldwide business reach",
    desc: "Become a successful global brand real fast. Grow your customer base with our widespread courier network spanning 220 countries & territories",
    image: image5,
  },
  {
    title: "Branded tracking page",
    desc: "Build loyalty through a customizable tracking page. Showcase your logo, recommend products, announce sales & collect customer feedback.",
    image: image6,
  },
  {
    title: "Shipment security cover",
    desc: "Safeguard your shipments against in-transit risks. Claim up to INR 5000* in an unlikely event of damage or loss on the way.",
    image: image7,
  },
  {
    title: "Simplified returns management",
    desc: "Stay in control of your return shipments. Have them picked up timely & keep them ready nearby for your upcoming orders.",
    image: image8,
  },
  {
    title: "Dedicated account manager",
    desc: "Leave your worries and concerns to our experienced cross-border experts. Get prioritized support & quick resolution.",
    image: image9,
  },
];

function InternationalShipping() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <h1 className="text-left text-5xl md:text-4xl font-bold mb-10">
        Experience smooth & fast{" "}
        <span className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
          international shipping
        </span>
      </h1>

      {/* Shipping Modes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <img src={Premium} alt="premium" className="w-full max-w-md mx-auto" />
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Multiple{" "}
            <span className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
              shipping modes
            </span>
          </h2>
          <p className="text-gray-600 mb-6">
            Tailor our global courier network to your business needs with
            end-to-end visibility.
          </p>

          {/* Delivery Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {deliveryOptions.map((item, index) => (
              <div
                key={index}
                className="border-l-4 border-gradient from-blue-300 to-green-300 p-4 flex flex-col text-left"
              >
                <img
                  src={item.image}
                  alt={item.desc}
                  className="w-32 h-16 mb-2"
                />
                <p className="text-lg font-medium text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* International Features Section */}
      <div className="mt-16 space-y-12">
        {internationals.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/2"
            />
            <div className="md:w-1/2">
              <h3 className="text-5xl font-semibold mb-2">
                {item.title.split(" ")[0]}{" "}
                <span className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
                  {item.title.split(" ")[1]}
                </span>
              </h3>
              <p className="text-zinc-400 text-lg">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InternationalShipping;
