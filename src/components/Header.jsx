import { useEffect, useState } from "react";
import Logo from "../assets/images/brands/shiprocket_logo.svg";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import ProductsLinkBox from "./Products/Fulfilment/ProductsLinkBox";
import { motion, useScroll, useTransform } from "framer-motion";
import useRouteStatus from "../hooks/useRouteStatus";

const nav = [
  "Product",
  "Platform",
  "Pricing",
  "Partners",
  "Track Order",
  "Resource",
];

function Header() {
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const {
    isFulfillment,
    isQuick,
    isDomesticShipping,
    isCargoShipping,
    shipX,
    cargoX,
  } = useRouteStatus();

  const routeStatus =
    isFulfillment |
    isQuick |
    isDomesticShipping |
    isCargoShipping |
    shipX |
    cargoX;

  const { scrollY } = useScroll();

  // Map the scroll position to a transform value for smooth animation
  const y = useTransform(scrollY, [0, 200], [-100, 0]); // When scrolling, move header from top (-100) to 0
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      if (routeStatus) setShowFixedHeader(false);
      else if (window.scrollY > 50) {
        setShowFixedHeader(true);
      } else {
        setShowFixedHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        className={`z-30 p-4 w-full justify-between items-center relative hidden md:flex ${
          routeStatus
            ? "border-b border-dashed border-zinc-400 bg-transparent"
            : ""
        } ${
          showFixedHeader
            ? "bg-[#ffffffa5] backdrop-blur-xs sticky top-2 py-3 p-4 w-14/15 rounded-full shadow-lg items-center z-30"
            : ""
        }`}
        initial={{ y: 0, opacity: 1 }}
        animate={{ y, opacity }}
      >
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
          {routeStatus && (
            <Link to="/quick" className="text-blue-500">
              Quick
            </Link>
          )}
        </ul>

        {/* Buttons */}

        {routeStatus ? (
          ""
        ) : (
          <div className="flex gap-2">
            <button
              className={`border w-24 text-blue-600 p-2 ${
                showFixedHeader ? "rounded-full" : "rounded-xl"
              }`}
            >
              Log In
            </button>
            <button
              className={`border w-24 bg-blue-500 text-white p-2 ${
                showFixedHeader ? "rounded-full" : "rounded-xl"
              }`}
            >
              Try for free
            </button>
          </div>
        )}
      </motion.nav>
    </>
  );
}

const Dropdown = ({ activeDropdown }) => {
  return (
    <motion.div
      className="fixed top-12 left-0 w-full h-[80%] p-8 px-10 rounded-3xl z-50"
      initial={{ scaleY: 0.9, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ transformOrigin: "top" }}
    >
      {activeDropdown === "Product" && <ProductsLinkBox className='z-50' />}
      {activeDropdown === "Platform" && <div>Platform Content</div>}
      {activeDropdown === "Pricing" && <div>Pricing Content</div>}
      {activeDropdown === "Resource" && <div>Resource Content</div>}
    </motion.div>
  );
};

export default Header;
