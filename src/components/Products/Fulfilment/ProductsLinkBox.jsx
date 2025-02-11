import { Link } from "react-router-dom";
import head1 from './../../../assets/images/Header/products/head1.png'
import head2 from './../../../assets/images/Header/products/head2.png'
import head3 from './../../../assets/images/Header/products/head3.png'
import head4 from './../../../assets/images/Header/products/head4.png'
import head5 from './../../../assets/images/Header/products/head5.png'
import head6 from './../../../assets/images/Header/products/head6.png'
import head7 from './../../../assets/images/Header/products/head7.png'
import head8 from './../../../assets/images/Header/products/head8.png'
import head9 from './../../../assets/images/Header/products/head9.png'
import head10 from './../../../assets/images/Header/products/head10.png'
import head11 from './../../../assets/images/Header/products/head11.png'
import head12 from './../../../assets/images/Header/products/head12.png'
import head13 from './../../../assets/images/Header/products/head13.png'
import head14 from './../../../assets/images/Header/products/head14.png'
import head15 from './../../../assets/images/Header/products/head15.png'



const productCategories = {
  Shipping: [
    {
      title: "Domestic-Shipping",
      desc: "Shipping to 19,000+ unique pin codes",
      menuIcon: head1,
    },
    {
      title: "Cargo-Shipping",
      desc: "Nationwide B2B & bulk shipping",
      menuIcon: head2,
    },
    {
      title: "Quick",
      desc: "Speedy local deliveries at low costs",
      menuIcon: head3,
    },
    {
      title: "Fulfillment",
      desc: "Warehousing, packaging & shipping services",
      menuIcon: head4,
    },
  ],
  "Cross-Border": [
    {
      title: "ShipX",
      desc: "Shipping to 220+ countries & territories",
      menuIcon: head5,
    },
    {
      title: "CargoX",
      desc: "Cross-border B2B & bulk shipping",
      menuIcon: head6,
    },
    {
       title: "LaunchX",
       desc: "End-to-end unified retail enablement solution",
       menuIcon: head7,
    },

  ],
  //   "Retail Enablement": [
  //     {
  //       title: "LaunchX",
  //       desc: "End-to-end unified retail enablement solution",
  //       menuIcon: "icon_path_here",
  //     },
  //   ],
  "Growth & Marketing": [
    {
      title: "Checkout",
      desc: "Effortless single-click checkout solution",
      menuIcon: head8,
    },
    {
      title: "Engage 360",
      desc: "WhatsApp-centric marketing solutions",
      menuIcon: head9,
    },
    {
      title: "Promise",
      desc: "EDD and trust badges for eCommerce",
      menuIcon: head10,
    },
    {
      title: "ONDC",
      desc: "Enhanced digital visibility with ONDC",
      menuIcon: head11,
    },
  ],
};

const serviceCategories = {
  "Financial Services": [
    {
      title: "Capital",
      desc: "Financial services support",
      menuIcon: head12,
    },
    {
      title: "Credit Score",
      desc: "Credit score for free",
      menuIcon: head13,
    },
  ],
  "AI-Enabled Products": [
    {
      title: "Sense",
      desc: "Turning Data into Power with APIs",
      menuIcon: head14,
    },
    {
      title: "Trends",
      desc: "Consumer Behaviour and eCommerce Analytics",
      menuIcon: head15,
    },
  ],
};

const valueAddedServices = [
  "Returns Management",
  "Delivery Boost",
  "Delight Tracking",
  "Instant COD",
  "Instant Pick Up",
  "Shiprocket Prime",
  "Omuni",
  "Packaging",
  "Co-Pilot",
  "Instant Exchange",
  "Express Shipping",
];

function ProductsLinkBox() {
  return (
    <div className="flex  bg-gray-100 shadow-xl h-auto overflow-y-scroll lg:h-[100%] w-full rounded-2xl ">
      
      {/* Products Section */}
      <div className=" bg-white py-2 lg:py-6 pl-6 lg:w-3/4 w-full">
        <div className="flex-col flex lg:flex-row w-full lg:gap-8 gap-3">
          {Object.entries(productCategories).map(([category, items]) => (
            <div
              key={category}
              className="mb-4 "
            >
              <h3 className="text-md text-gray-400  w-fit lg:my-4 ">
                {category}
              </h3>
              {items.map((product) => (
                <div key={product.title} className=" w-fit gap-6 flex items-start my-3">
                  <img src={product.menuIcon} alt="" className="w-4 h-4 mt-2" />
                  <div>
                    <Link to={`/${product.title.toLowerCase()}`}className="whitespace-nowrap">
                    {product.title}
                    </Link>
                    <p className="text-gray-400 text-sm ">{product.desc}</p>
                  </div>

                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className=" flex w-full flex-col lg:flex-row  justify-start mt-3">
          {Object.entries(serviceCategories).map(([category, items]) => (
            <div key={category} className="mb-4 w-1/3 ">
              <h3 className="text-md text-gray-400 ">{category}</h3>
              {items.map((service) => (
                <div key={service.title} className="flex  gap-6 my-3">
                  <img src={service.menuIcon} alt={service.title} className="w-4 h-4 mt-1" />
                  <div>
                    <Link to={`/${service.title.toLowerCase()}`}className="whitespace-nowrap">
                    {service.title}
                    </Link>
                    <p className="text-gray-400 text-sm ">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Value-Added Services Section */}
      <div className="bg-gray-100 p-5 w-1/4 hidden md:block">
        <h2 className="  mb-2 text-gray-400 ">Value-Added Services</h2>
        <div className="flex flex-col text-sm gap-2">
          {valueAddedServices.map((service) => (
            <Link
              key={service}
              to="#"
              className=""
            >
              {service}
            </Link>
          ))}
        </div>
      </div>
    </div>


  );
}

export default ProductsLinkBox;
