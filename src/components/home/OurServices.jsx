// import domestingShipping from "../../assets/images/services/1-4.webp"
// import Fulfillment from "../../assets/images/services/s2.webp"
// import Quick from "../../assets/images/services/graphici3.webp"
// import plane from "../../assets/images/services/4.webp"
// import checkout from "../../assets/images/services/5.webp"
// import Engage from "../../assets/images/services/360-1.webp"






// function OurServices() {
//   const services = [
//     {
//       title: "Domestic Shipping",
//       desc: "Serving 19,000+ unique pin codes nationwide, our domestic shipping services offer sellers an automated platform with specialised offerings like a courier recommendation engine, seamless channel integration, bulk order creation, shipping rate calculator, smart NDR redressal, branded tracking page, and inventory control.",
//       Image:
//     }, 
//     {
//       title: "Fulfillment",
//       desc: "Tired of delivery delays and expensive warehousing across cities? Shiprocket Fulfillment offers a one-stack solution with its 36+ strategically placed, last-mile-enabled warehouses (covering shipping and packaging services as well) that enable 20% lower shipping costs, 60% RTO reduction, 99.9% accurate operations and almost zero weight discrepancy issues.",
//       Image:
//     }, {
//       title: "Quick",
//       desc: "Quick delivers locally faster than you can imagine, starting at ₹10/km and 0 demand surge fee. It’s a cost-effective and reliable means for businesses and individuals to send parcels locally to single or multiple destinations.",
//       Image:
//     }, {
//       title: "Cross Border Trade",
//       desc: "With our cross-border trade solutions—ShipX, CargoX, and LaunchX—we empower brands to establish robust global export networks, covering 220+ countries and territories worldwide. Leverage our expertise in international shipping and achieve exponential business growth.",
//       Image:
//     }, {
//       title: "Checkout",
//       desc: "Our AI-powered tool, Checkout, is a one-click, effortless solution that reduces the Checkout conversion time to less than 40 seconds. This leads to 60% increased conversions, 30% RTO reductions, 25% lesser cart abandonment, and an overall delightful shopping experience for consumers.",
//       Image:
//     }, {
//       title: "Engage 360",
//       desc: "Engage 360 is our AI-enabled, WhatsApp-centric, marketing platform that helps your business connect better with its customers with the help of automated, personalised and data-backed effective communication.",
//       Image:
//     },
//   ];
//   return (
//     <div className="font-manrope">
//       <h1 className="text-5xl">Our Services & Solutions Portfolio</h1>
//       <div>
//         <h1></h1>
//         <img src="" alt="" />
//       </div>
//     </div>
//   );
// }

// export default OurServices;

import domestingShipping from "../../assets/images/services/1-4.webp";
import Fulfillment from "../../assets/images/services/s2.webp";
import Quick from "../../assets/images/services/graphici3.webp";
import plane from "../../assets/images/services/4.webp";
import checkout from "../../assets/images/services/5.webp";
import Engage from "../../assets/images/services/360-1.webp";

function OurServices() {
  const services = [
    {
      title: "Domestic Shipping",
      desc: "Serving 19,000+ unique pin codes nationwide, our domestic shipping services offer sellers an automated platform with specialized offerings like a courier recommendation engine, seamless channel integration, bulk order creation, shipping rate calculator, smart NDR redressal, branded tracking page, and inventory control.",
      Image: domestingShipping,
    },
    {
      title: "Fulfillment",
      desc: "Tired of delivery delays and expensive warehousing across cities? Shiprocket Fulfillment offers a one-stack solution with its 36+ strategically placed, last-mile-enabled warehouses (covering shipping and packaging services as well) that enable 20% lower shipping costs, 60% RTO reduction, 99.9% accurate operations and almost zero weight discrepancy issues.",
      Image: Fulfillment,
    },
    {
      title: "Quick",
      desc: "Quick delivers locally faster than you can imagine, starting at ₹10/km and 0 demand surge fee. It’s a cost-effective and reliable means for businesses and individuals to send parcels locally to single or multiple destinations.",
      Image: Quick,
    },
    {
      title: "Cross Border Trade",
      desc: "With our cross-border trade solutions—ShipX, CargoX, and LaunchX—we empower brands to establish robust global export networks, covering 220+ countries and territories worldwide. Leverage our expertise in international shipping and achieve exponential business growth.",
      Image: plane,
    },
    {
      title: "Checkout",
      desc: "Our AI-powered tool, Checkout, is a one-click, effortless solution that reduces the Checkout conversion time to less than 40 seconds. This leads to 60% increased conversions, 30% RTO reductions, 25% lesser cart abandonment, and an overall delightful shopping experience for consumers.",
      Image: checkout,
    },
    {
      title: "Engage 360",
      desc: "Engage 360 is our AI-enabled, WhatsApp-centric, marketing platform that helps your business connect better with its customers with the help of automated, personalized, and data-backed effective communication.",
      Image: Engage,
    },
  ];

  return (
    <div className="font-manrope bg-gray-100 py-12 px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
        Our Services <br/> & Solutions Portfolio
      </h1>

      {/* Services List */}
      <div className="max-w-6xl mx-auto space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={service.Image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-semibold text-gray-800">
                {service.title}
              </h2>
              <p className="text-gray-600 mt-4">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
