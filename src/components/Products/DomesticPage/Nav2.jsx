import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import domnavlogo from '../../../assets/images/Domestic/domnavlogo.png'

export const Nav2 = () => {
  const [scroll, setScroll] = useState(false);
  const [hideNavlinks, setHideNavlinks] = useState(false);
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
      setHideNavlinks(window.innerWidth < 1024 && window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const startDragging = (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.classList.add("cursor-grabbing");
    };

    const stopDragging = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const drag = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", startDragging);
    slider.addEventListener("mouseleave", stopDragging);
    slider.addEventListener("mouseup", stopDragging);
    slider.addEventListener("mousemove", drag);

    return () => {
      slider.removeEventListener("mousedown", startDragging);
      slider.removeEventListener("mouseleave", stopDragging);
      slider.removeEventListener("mouseup", stopDragging);
      slider.removeEventListener("mousemove", drag);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center gap-x-4 mt-5 transition-all duration-300 px-2 ${
        scroll
          ? "fixed top-0 z-50 w-full  sm:w-[92%] md:w-[94%] lg:w-[96%] bg-[#F3FAFF] rounded-lg shadow-md"
          : "-top-2 bg-transparent"
      }`}
    >
      <div>
        <a href="/" className="text-gray-600 hover:text-gray-800">
          <img
            className="w-20 h-auto"
            src={domnavlogo}
            alt="Brand Logo"
          />
        </a>
      </div>

      <div className="flex">
        <div
          ref={scrollRef}
          className={`flex overflow-x-auto items-center text-[#0A0A3C] lg:overflow-visible whitespace-nowrap scroll-smooth cursor-grab space-x-4 px-4 transition-opacity duration-300 ${
            hideNavlinks ? "opacity-0 md:opacity-100" : "opacity-100"
          }`}
        >
          {!hideNavlinks && (
            <>
              <Link className="shrink-0 md:block hidden">Services</Link>
              <Link className="shrink-0 md:block hidden">Express Delivery</Link>
              <Link className="shrink-0 md:block hidden">On-Demand Shipping</Link>
              <Link className="shrink-0 md:block hidden">Rate Estimator</Link>
              <Link className="shrink-0 md:block hidden">Insights</Link>
            </>
          )}
        </div>

        <div>
          <Link
            className="shrink-0 bg-blue-600 text-white px-3 py-2 xs:text-xs sm:text-base rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
