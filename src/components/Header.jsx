// // import React, { useState } from "react";
// // import Logo from "../assets/images/brands/shiprocket_logo.svg";
// // import { Link } from "react-router-dom";
// // import { FaChevronDown } from "react-icons/fa";

// // const nav = [
// //   "Product",
// //   "Platform",
// //   "Pricing",
// //   "Partners",
// //   "Track Order",
// //   "Resource",
// // ];

// // function Header() {
// //   const [activeDropdown, setActiveDropdown] = useState(false);

// //   return (
// //     <nav className="flex bg-white p-4 w-full">
// //       <img src={Logo} alt="Logo" className="w-40" />
// //       <ul className="flex gap-4 w-full items-center">
// //         {nav.map((item) => {
// //           <li className="text-black w-fit">
// //             {item}
// //             <FaChevronDown
// //               style={{
// //                 transition: "transform 0.2s",
// //                 transform:
// //                   activeDropdown === item ? "rotateX(180deg)" : "rotateX(0deg)",
// //               }}
// //             />
// //           </li>;
// //         })}
// //       </ul>
// //       <div className="flex gap-2">
// //         <button className="border border-blue-600 w-24 text-blue-600 p-2 rounded-xl">
// //           Log In
// //         </button>
// //         <button className="border w-24 p-2 bg-blue-600 rounded-xl text-white">
// //           Try for free
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Header;

// import React, { useState } from "react";
// import Logo from "../assets/images/brands/shiprocket_logo.svg";
// import { Link } from "react-router-dom";
// import { FaChevronDown } from "react-icons/fa";
// import ProductsLinkBox from "./Products/ProductsLinkBox";

// const nav = [
//   "Product",
//   "Platform",
//   "Pricing",
//   "Partners",
//   "Track Order",
//   "Resource",
// ];

// function Header() {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   return (
//     <nav className="flex bg-white p-4 w-full justify-between items-center">
//       {/* Logo */}
//       <img src={Logo} alt="Logo" className="w-40" />

//       {/* Navigation Links */}
//       <ul className="flex gap-6 items-center">
//         {nav.map((item) => (
//           <li
//             key={item}
//             className="relative flex items-center gap-1 text-black cursor-pointer"
//             onMouseEnter={() => setActiveDropdown(item)}
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             {item}
//             <FaChevronDown
//               style={{
//                 transition: "transform 0.2s",
//                 transform:
//                   activeDropdown === item ? "rotate(180deg)" : "rotate(0deg)",
//               }}
//             />
//           </li>
//         ))}
//         <li className="text-blue-500 hover:text-blue-400">Quick</li>
//       </ul>

//       {/* Buttons */}
//       <div className="flex gap-2">
//         <button className="border border-blue-600 w-24 text-blue-600 p-2 rounded-xl">
//           Log In
//         </button>
//         <button className="border w-24 p-2 bg-blue-600 rounded-xl text-white">
//           Try for free
//         </button>
//       </div>
//     </nav>
//   );
// }

// const Dropdown = ({ activeDropdown }) => {
//   return (
//     <div className="absolute w-fit border-4 border-red-600 bg-white text-black p-4 rounded shadow-md">
//       {activeDropdown === "Products" && <ProductsLinkBox />}
//     </div>
//   );
// };
// export default Header;

import React, { useState } from "react";
import Logo from "../assets/images/brands/shiprocket_logo.svg";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import ProductsLinkBox from "./Products/ProductsLinkBox";
import {motion} from 'framer-motion'
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const nav = [
  "Product",
  "Platform",
  "Pricing",
  "Partners",
  "Track Order",
  "Resource",
];

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className=" bg-white p-4 w-full justify-between items-center relative hidden md:flex">
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-40" />
      </Link>

      {/* Navigation Links */}
      <ul className="flex gap-6 items-center">
        {nav.map((item) => (
          <li
            key={item}
            className="relative flex items-center gap-1 text-black cursor-pointer"
            onMouseEnter={() => setActiveDropdown(item)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {item}
            <FaChevronDown
              style={{
                transition: "transform 0.2s",
                transform:
                  activeDropdown === item ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
            {activeDropdown === item && (
              <Dropdown activeDropdown={activeDropdown} />
            )}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex gap-2">
        <button className="border border-blue-600 w-24 text-blue-600 p-2 rounded-xl">
          Log In
        </button>
        <button className="border w-24 p-2 bg-blue-600 rounded-xl text-white">
          Try for free
        </button>
      </div>
    </nav>
    <div className='w-full border-b border-b-gray-300 border-dashed '>
    <nav className='md:hidden  '>
        <div className={`flex justify-between p-2 border-b border-dashed border-gray-400 ${open ? "z-50 fixed" :"z-0"}`}>
            <img src={Logo} alt="logo" className="w-32 h-10"/>
            <div className="button">
                <button onClick={() => setOpen(!open)} className='text-2xl cursor-pointer '>
                    <RiMenu3Line />
            
                </button>
                
                

            </div>
        </div>
        {open && (        <div className='mt-3 fixed -top-2 left-0 bottom-0 right-0 bg-white z-50 md:-z-10  '> 
            <ul className=' flex flex-col gap-6'>
                <li className='relative text-2xl cursor-pointer w-full flex justify-end top-3 right-5' onClick={() => setOpen(!open)} ><IoMdClose /></li>
                <li className='border-b border-gray-200 p-2 flex justify-between' onClick={() => setActiveDropdown((prev) => (prev === "Product" ? null : "Product"))}>Products</li>
                {activeDropdown === "Product" && <ProductsLinkBox />}
                <li className='border-b border-gray-200 p-2 flex justify-between'  onClick={() => setActiveDropdown((prev) => (prev === "Platorm" ? null : "Platform"))}>Platform</li>
              
                <li className='border-b border-gray-200 p-2 flex justify-between'>Pricing</li>
                <li className='border-b border-gray-200 p-2 flex justify-between'>Partners</li>
                <li className='border-b border-gray-200 p-2 flex justify-between'>Track Order</li>
                <li className='border-b border-gray-200 p-2 flex justify-between'>Resources</li>
                <li className='border-b border-gray-200 p-2 flex justify-between'>Quick</li>
                <li className='border-b border-gray-200 p-2 flex justify-between'>Login</li>

            </ul>
            <button className='w-80 mx-6 text-center border-0 rounded-lg text-xl py-2 bg-[#735ae5] text-white  my-6'>Try For Free</button>

        </div>)}

    </nav>
    </div>
    </>
  );
}

const Dropdown = ({ activeDropdown }) => {
  return (
    <motion.div className="fixed top-12 left-0 w-full h-[80%]    p-8  px-10 rounded-3xl  z-50"
    initial={{ scaleY: 0.9, opacity: 0 }} 
    animate={{ scaleY: 1, opacity: 1 }}
    exit={{ scaleY: 0, opacity: 0 }} 
    transition={{ duration: 0.4, ease: "easeInOut" }}
    style={{ transformOrigin: "top" }} 
    >
      {activeDropdown === "Product" && <ProductsLinkBox />}
      {activeDropdown === "Platform" && <div>Platform Content</div>}
      {activeDropdown === "Pricing" && <div>Pricing Content</div>}
      {activeDropdown === "Resource" && <div>Resource Content</div>}
    </motion.div>
  );
};


export default Header;
