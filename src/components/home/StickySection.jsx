
// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import domesticshipping from "../../assets/images/sticky-image/shipingIcon.svg";
// import sticky1 from "../../assets/images/sticky-image/feat-img-10.webp";
// import sticky3 from "../../assets/images/sticky-image/feat-img-12.webp";
// import sticky4 from "../../assets/images/sticky-image/Ship-Now-1-1.webp";
// import sticky5 from "../../assets/images/sticky-image/feat-img-1.png";
// import sticky2 from "../../assets/images/sticky-image/feat-img-11.webp";
// import sticky6 from "../../assets/images/sticky-image/feat-img-2.png";
// import sticky7 from "../../assets/images/sticky-image/feat-img-9.png";

// const shipping = [
//   { name: sticky1 },
//   { name: sticky2 },
//   { name: sticky3 },
//   { name: sticky4 },
// ];

// const fullstack = [{ name: sticky5 }, { name: sticky6 }, { name: sticky7 }];

// function StickySection() {
//   const { scrollY } = useScroll();
//   const scale1 = useTransform(scrollY, [0, 1400], [1, 0.8]);
//   const scale2 = useTransform(scrollY, [1400, 1800], [1, 0.85]);
//   const scale3 = useTransform(scrollY, [1800, 2200], [1, 0.9]);
//   const scale4 = useTransform(scrollY, [2200, 2600], [1, 0.95]);


//   return (
//     <div className="bg-white font-manrope">
//       <h1 className="text-5xl leading-20 font-semibold ml-2">
//         Why is Shiprocket the Trusted Partner for Scaling eCommerce Businesses?
//       </h1>
//       <p className="leading-6 tracking-tighter ml-2 w-3/4 mb-6">
//         We’re more than a shipping partner. While we excel at simplifying
//         logistics for our sellers, our tech solutions drive comprehensive
//         e-commerce growth - streamlining operations, from marketing and
//         warehousing to financial support and global expansion. We empower your
//         business while you pursue bigger goals.
//       </p>
//       <div className="relative">
//         {/* Sticky Card 1 */}
//         <motion.div
//           className="sticky top-[20px] flex flex-col md:flex-row bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-2 rounded-4xl shadow-lg mb-8"
//           style={{
//             scale: scale1,
//             transition: "transform 0.2s ease-out",
//           }}
//         >
//           <div className="px-8 md:px-16 space-y-4 mt-6 md:mt-14 flex-1 py-8 animate-fade-in-scale">
//             <h1 className="text-black rounded-full bg-zinc-100 w-[68px] text-center">
//               <span className="font-semibold">1</span>/4
//             </h1>
//             <div className="flex gap-2 items-center">
//               <img
//                 src={domesticshipping}
//                 alt="domestic shipping"
//                 className="w-8 h-8 md:w-12 md:h-12"
//               />
//               <h2 className="text-black font-semibold text-xl md:text-4xl uppercase">
//                 Unified domestic shipping
//               </h2>
//             </div>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
//               {shipping.map((sticky, index) => (
//                 <img
//                   key={index}
//                   src={sticky.name}
//                   alt={sticky.name}
//                   className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-cover rounded-md"
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Sticky Card 2 */}
//         <motion.div
//           className="sticky top-[60px] flex flex-col md:flex-row bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-500 text-white py-2 rounded-4xl shadow-lg mb-8"
//           style={{
//             scale: scale2,
//             transition: "transform 0.2s ease-out",
//           }}
//         >
//           <div className="px-8 md:px-16 space-y-4 mt-6 md:mt-14 flex-1 py-8">
//             <h1 className="text-black rounded-full bg-zinc-100 w-[68px] text-center">
//               <span className="font-semibold">2</span>/4
//             </h1>
//             <div className="flex gap-2 items-center">
//               <img
//                 src={domesticshipping}
//                 alt="domestic shipping"
//                 className="w-8 h-8 md:w-12 md:h-12"
//               />
//               <h2 className="text-black font-semibold text-xl md:text-4xl uppercase">
//                 Full-stack global enablement
//               </h2>
//             </div>
//             <div className="flex gap-2">
//               {fullstack.map((sticky, index) => (
//                 <img
//                   key={index}
//                   src={sticky.name}
//                   alt={sticky.name}
//                   className="w-20 h-20 md:w-68 md:h-full rounded-md"
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Sticky Card 3 */}
//         <motion.div
//           className="sticky top-[100px] flex flex-col md:flex-row bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white py-2 rounded-4xl shadow-lg mb-8"
//           style={{
//             scale: scale3,
//             transition: "transform 0.2s ease-out",
//           }}
//         >
//           <div className="px-8 md:px-16 space-y-4 mt-6 md:mt-14 flex-1 py-8">
//             <h1 className="text-black rounded-full bg-zinc-100 w-[68px] text-center">
//               <span className="font-semibold">3</span>/4
//             </h1>
//             <div className="flex gap-2 items-center">
//               <img
//                 src={domesticshipping}
//                 alt="domestic shipping"
//                 className="w-8 h-8 md:w-12 md:h-12"
//               />
//               <h2 className="text-black font-semibold text-xl md:text-4xl uppercase">
//                 Full-stack global enablement
//               </h2>
//             </div>
//             <div className="flex gap-2">
//               {shipping.map((sticky, index) => (
//                 <img
//                   key={index}
//                   src={sticky.name}
//                   alt={sticky.name}
//                   className="w-20 h-20 md:w-68 md:h-full rounded-md"
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Sticky Card 4 */}
//         <motion.div
//           className="sticky top-[140px] flex flex-col md:flex-row bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-2 rounded-4xl shadow-lg mb-8"
//           style={{
//             scale: scale4,
//             transition: "transform 0.2s ease-out",
//           }}
//         >
//           <div className="px-8 md:px-16 space-y-4 mt-6 md:mt-14 flex-1 py-8">
//             <h1 className="text-black rounded-full bg-zinc-100 w-[68px] text-center">
//               <span className="font-semibold">4</span>/4
//             </h1>
//             <div className="flex gap-2 items-center">
//               <img
//                 src={domesticshipping}
//                 alt="domestic shipping"
//                 className="w-8 h-8 md:w-12 md:h-12"
//               />
//               <h2 className="text-black font-semibold text-xl md:text-4xl uppercase">
//                 Unified domestic shipping
//               </h2>
//             </div>
//             <div className="flex gap-2">
//               {shipping.map((sticky, index) => (
//                 <img
//                   key={index}
//                   src={sticky.name}
//                   alt={sticky.name}
//                   className="w-20 h-20 md:w-68 md:h-full rounded-md"
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default StickySection;


import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import domesticshipping from "../../assets/images/sticky-image/shipingIcon.svg";
import sticky1 from "../../assets/images/sticky-image/feat-img-10.webp";
import sticky3 from "../../assets/images/sticky-image/feat-img-12.webp";
import sticky4 from "../../assets/images/sticky-image/Ship-Now-1-1.webp";
import sticky5 from "../../assets/images/sticky-image/feat-img-1.png";
import sticky2 from "../../assets/images/sticky-image/feat-img-11.webp";
import sticky6 from "../../assets/images/sticky-image/feat-img-2.png";
import sticky7 from "../../assets/images/sticky-image/feat-img-9.png";

const shipping = [
  { name: sticky1 },
  { name: sticky2 },
  { name: sticky3 },
  { name: sticky4 },
];
const fullstack = [{ name: sticky5 }, { name: sticky6 }, { name: sticky7 }];

function StickySection() {
  const { scrollY } = useScroll();
  const scale1 = useTransform(scrollY, [0, 1400], [1, 0.85]);
  const scale2 = useTransform(scrollY, [1400, 1800], [1, 0.9]);
  const scale3 = useTransform(scrollY, [1800, 2200], [1, 0.95]);
  const scale4 = useTransform(scrollY, [2200, 2600], [1, 1]);

  return (
    <div className="bg-white font-manrope max-w-[1200px] mx-auto px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
        Why is Shiprocket the Trusted Partner for Scaling eCommerce Businesses?
      </h1>
      <p className="text-sm sm:text-base leading-6 tracking-tighter w-full sm:w-3/4 mb-6">
        We’re more than a shipping partner. While we excel at simplifying
        logistics for our sellers, our tech solutions drive comprehensive
        e-commerce growth - streamlining operations, from marketing and
        warehousing to financial support and global expansion.
      </p>

      <div className="relative space-y-12">
        {/* 🚀 Sticky Card 1 */}
        <motion.div
          className="sticky top-5 flex flex-col md:flex-row bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-6 px-6 rounded-2xl shadow-lg"
          style={{ scale: scale1, transition: "transform 0.2s ease-out" }}
        >
          <div className="flex-1 space-y-4">
            <h1 className="text-black rounded-full bg-zinc-100 w-16 text-center">
              <span className="font-semibold">1</span>/4
            </h1>
            <div className="flex gap-3 items-center">
              <img
                src={domesticshipping}
                alt="domestic shipping"
                className="w-8 md:w-12"
              />
              <h2 className="text-black font-semibold text-lg md:text-2xl uppercase">
                Unified domestic shipping
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {shipping.map((sticky, index) => (
                <img
                  key={index}
                  src={sticky.name}
                  alt={sticky.name}
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* 🚀 Sticky Card 2 */}
        <motion.div
          className="sticky top-10 flex flex-col md:flex-row bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-500 text-white py-6 px-6 rounded-2xl shadow-lg"
          style={{ scale: scale2, transition: "transform 0.2s ease-out" }}
        >
          <div className="flex-1 space-y-4">
            <h1 className="text-black rounded-full bg-zinc-100 w-16 text-center">
              <span className="font-semibold">2</span>/4
            </h1>
            <div className="flex gap-3 items-center">
              <img
                src={domesticshipping}
                alt="domestic shipping"
                className="w-8 md:w-12"
              />
              <h2 className="text-black font-semibold text-lg md:text-2xl uppercase">
                Full-stack global enablement
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {fullstack.map((sticky, index) => (
                <img
                  key={index}
                  src={sticky.name}
                  alt={sticky.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* 🚀 Sticky Card 3 */}
        <motion.div
          className="sticky top-20 flex flex-col md:flex-row bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white py-6 px-6 rounded-2xl shadow-lg"
          style={{ scale: scale3, transition: "transform 0.2s ease-out" }}
        >
          <div className="flex-1 space-y-4">
            <h1 className="text-black rounded-full bg-zinc-100 w-16 text-center">
              <span className="font-semibold">3</span>/4
            </h1>
            <div className="flex gap-3 items-center">
              <img
                src={domesticshipping}
                alt="domestic shipping"
                className="w-8 md:w-12"
              />
              <h2 className="text-black font-semibold text-lg md:text-2xl uppercase">
                Full-stack global enablement
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {shipping.map((sticky, index) => (
                <img
                  key={index}
                  src={sticky.name}
                  alt={sticky.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default StickySection;
