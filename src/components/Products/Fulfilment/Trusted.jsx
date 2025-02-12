import brand1 from "./../../../assets/images/products/brandLogo-1.webp";
import brand2 from "./../../../assets/images/products/brandLogo-2.webp";
import brand3 from "./../../../assets/images/products/brandLogo-3.webp";
import brand4 from "./../../../assets/images/products/brandLogo-4.webp";
import brand5 from "./../../../assets/images/products/brandLogo-5.webp";
import brand6 from "./../../../assets/images/products/brandLogo-6.webp";
import brand7 from "./../../../assets/images/products/brandLogo-7.webp";
import brand8 from "./../../../assets/images/products/brandLogo-8.webp";
import brand9 from "./../../../assets/images/products/brandLogo-9.webp";
import brand10 from "./../../../assets/images/products/brandLogo-10.webp";
import brand11 from "./../../../assets/images/products/brandLogo-11.webp";
import brand12 from "./../../../assets/images/products/brandLogo-12.webp";
import brand13 from "./../../../assets/images/products/brandLogo-13.webp";
import brand14 from "./../../../assets/images/products/brandLogo-14.webp";
import brand15 from "./../../../assets/images/products/brandLogo-15.webp";
import brand16 from "./../../../assets/images/products/brandLogo-16.webp";
import brand17 from "./../../../assets/images/products/brandLogo-17.webp";
import brand18 from "./../../../assets/images/products/brandLogo-18.webp";
import brand19 from "./../../../assets/images/products/brandLogo-19.webp";
import brand20 from "./../../../assets/images/products/brandLogo-20.webp";
import brand21 from "./../../../assets/images/products/brandLogo-21.webp";
import brand22 from "./../../../assets/images/products/brandLogo-22.webp";
import brand23 from "./../../../assets/images/products/brandLogo-23.webp";
import brand24 from "./../../../assets/images/products/brandLogo-24.webp";

// Separate brands into two columns
const brandsColumn1 = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
];
const brandsColumn2 = [
  brand13,
  brand14,
  brand15,
  brand16,
  brand17,
  brand18,
  brand19,
  brand20,
  brand21,
  brand22,
  brand23,
  brand24,
];

function Trusted() {
  
  return (
    <div className="flex flex-col md:flex-row items-center w-full h-screen px-4 md:px-16 overflow-hidden">
      <h1 className="text-5xl text-blue-950 font-bold mb-12 w-4/7">
        Trusted by{" "}
        <span className="bg-gradient-to-r from-blue-700 to-sky-300 text-transparent bg-clip-text">
          1000+
        </span>{" "}
        eCommerce businesses
      </h1>

      {/* Marquee Container */}
      <div className="flex flex-col md:flex-row gap-6 md:h-[400px] overflow-hidden ">
        <div className="flex md:flex-col gap-8">
          {brandsColumn1.map((logo, index) => (
            <div
              key={index}
              className="w-44 h-20 flex items-center justify-center bg-white rounded-lg shadow-md mx-auto p-2 ml-6 animate-marquee md:animate-marquee-vertical"
            >
              <img
                src={logo}
                alt={`Brand ${index + 13}`}
                className="w-28 h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Right Vertical Marquee (Reverse Direction) */}

        <div className="flex md:flex-col gap-8">
          {brandsColumn2.map((logo, index) => (
            <div
              key={index}
              className="w-44 h-20 flex items-center justify-center bg-white rounded-lg shadow-md mx-auto p-2 ml-6 animate-marquee-reverse md:animate-marquee-vertical-reverse"
            >
              <img
                src={logo}
                alt={`Brand ${index + 13}`}
                className="w-28 h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trusted;
