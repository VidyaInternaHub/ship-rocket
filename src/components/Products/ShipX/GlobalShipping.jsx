// import imgUrl from "../../../assets/images/shipx/map-globe-1.svg";
// import amazon from "../../../assets/images/shipx/Amazon-Logo.webp";
// import shopify from "../../../assets/images/shipx/Image-335.webp";
// import etsy from "../../../assets/images/shipx/Image-334.webp";
// import ebay from "../../../assets/images/shipx/800px-EBay_logo.svg.webp";

// function GlobalShipping() {
//   return (
//     <div
//       className="relative h-64 flex items-center justify-between py-2 px-8 shadow-2xl rounded-2xl mx-4 mb-6"
//       style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
//     >
//       <div className="absolute inset-0 bg-blue-95 opacity-50"></div>
//       <div className="flex flex-col gap-20">
//         <img
//           className="bg-white w-40 h-20 rounded-xl shadow-2xl p-4"
//           src={shopify}
//           alt="shopify"
//         />
//         <img
//           className="bg-white ml-16 w-40 h-20 rounded-xl shadow-2xl p-4"
//           src={amazon}
//           alt="shopify"
//         />
//       </div>
//       <div className="space-y-5 text-white">
//         {" "}
//         <h1 className="text-5xl text-center font-bold z-10 bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
//           Powerful integrations <br />
//           <span className="text-5xl text-white">
//             prebuilt for global shipping
//           </span>
//         </h1>
//         <p>
//           Whether it’s CSB IV or CSB V, manage all your orders easily across
//           multiple global marketplaces with single-click order upload.
//         </p>
//       </div>
//       <div className="flex flex-col gap-20">
//         <img
//           className="bg-white w-40 h-16 rounded-xl shadow-2xl p-4"
//           src={etsy}
//           alt="etsy"
//         />
//         <img
//           className="bg-white -ml-16 w-40 h-16 rounded-xl shadow-2xl p-4"
//           src={ebay}
//           alt="ebay"
//         />
//       </div>
//     </div>
//   );
// }

// export default GlobalShipping;


import imgUrl from "../../../assets/images/shipx/map-globe-1.svg";
import amazon from "../../../assets/images/shipx/Amazon-Logo.webp";
import shopify from "../../../assets/images/shipx/Image-335.webp";
import etsy from "../../../assets/images/shipx/Image-334.webp";
import ebay from "../../../assets/images/shipx/800px-EBay_logo.svg.webp";

function GlobalShipping() {
  return (
    <div
      className="relative w-full flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-12 lg:px-24 mb-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-blue-900 opacity-50"></div>

      {/* Left Logos */}
      <div className="relative flex flex-col items-center gap-12 md:gap-20">
        <img
          className="bg-white w-32 h-16 rounded-xl shadow-xl p-4"
          src={shopify}
          alt="shopify"
        />
        <img
          className="bg-white w-32 h-16 rounded-xl shadow-xl p-4 md:ml-6"
          src={amazon}
          alt="amazon"
        />
      </div>

      {/* Center Text */}
      <div className="relative text-center text-white max-w-xl px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
          Powerful integrations <br />
          <span className="text-white">prebuilt for global shipping</span>
        </h1>
        <p className="mt-4 text-sm md:text-lg">
          Whether it’s CSB IV or CSB V, manage all your orders easily across
          multiple global marketplaces with single-click order upload.
        </p>
      </div>

      {/* Right Logos */}
      <div className="relative flex flex-col items-center gap-12 md:gap-20">
        <img
          className="bg-white w-32 h-16 rounded-xl shadow-xl p-4"
          src={etsy}
          alt="etsy"
        />
        <img
          className="bg-white w-32 h-16 rounded-xl shadow-xl p-4 md:-ml-6"
          src={ebay}
          alt="ebay"
        />
      </div>
    </div>
  );
}

export default GlobalShipping;
