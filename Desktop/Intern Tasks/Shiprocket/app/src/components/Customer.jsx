import React, { useEffect, useRef, useState } from 'react';
import Brand3 from '../assets/images/Brand3.png';
import Brand4 from '../assets/images/Brand4.png';
import Customer1 from '../assets/images/Customer1.png';
import Customer2 from '../assets/images/Customer2.png';
import Customer3 from '../assets/images/Customer3.png';

function Customer() {
  const [scrollAmount, setScrollAmount] = useState(0);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0); 


  useEffect(() => {
    if (containerRef.current) {
      const cardElement = containerRef.current.children[0]; 
      setCardWidth(cardElement.offsetWidth+50); 
      
    }

  }, []);

  const handlePrev = () => {
    if (scrollAmount > 0) {
       
      setScrollAmount((prev) => prev - cardWidth); 
    }
  };

  const handleNext = () => {
    console.log(cardWidth)
    const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    if (scrollAmount < maxScroll) {
      setScrollAmount((prev) => prev + cardWidth); 
    }
  };

  useEffect(() => {
    containerRef.current.scrollLeft = scrollAmount; 
  }, [scrollAmount]);

  return (
    <div className="background-gradient1 w-full">
      <div className="max-w-6xl mx-auto my-20 px-2">
        <div className="flex justify-between">
          <h2 className="text-5xl font-bold my-8 text-primes md:whitespace-nowrap">
            Hear from our <span className="custom-gradient font-normal">customers</span>
          </h2>
          <div className="hidden md:flex gap-4 w-full justify-center items-center">
            <p
              className="h-9 w-9 rounded-full bg-white text-lg font-semibold flex items-center justify-center cursor-pointer drop-shadow-xl"
              onClick={handlePrev}
            >
              &lt;
            </p>
            <p
              className="h-9 w-9 rounded-full bg-white text-lg font-semibold flex items-center justify-center cursor-pointer drop-shadow-xl"
              onClick={handleNext}
            >
              &gt;
            </p>
          </div>
        </div>
        <div
          ref={containerRef}
          className="w-full flex gap-36 overflow-auto scrollbar-hidden scroll-smooth"
        >
          {/* First card */}
          <div className="flex flex-col justify-center items-center gap-10 w-full shrink-0">
            <img src={Customer1} alt="" className="opacity-50 invert" />
            <p className="text-lg text-gray-700 my-6">
              Choosing Shiprocket Cargo for our B2B shipments was the best decision for our
              business. Their platform offers unbeatable rates, multiple carrier options, and a
              dedicated support team that is always ready to assist. Shiprocket Cargo ensures our
              shipments are cost-effective and delivered on time. Their platform’s extensive carrier
              network and real-time tracking have elevated our logistics experience. I recommend
              Shiprocket Cargo to other businesses looking to scale their B2B operations
            </p>
            <p className="text-lg text-gray-700 my-6 font-semibold">Roopkumar Mandal</p>
          </div>
          {/* Second card */}
          <div className="flex flex-col justify-center items-center gap-10 w-full shrink-0">
            <img src={Brand3} alt="" className="" />
            <p className="text-lg text-gray-700 my-6">
            “Shiprocket Cargo has transformed our logistics operations. Their platform offers cost-effective rates, a wide range of carriers and timely deliveries, all backed by stellar support.”
            </p>
            <p className="text-lg text-gray-700 my-6 font-semibold">Hima Shankar K R</p>
          </div>
          {/* Third card */}
          <div className="flex flex-col justify-center items-center gap-10 w-full shrink-0">
            <img src={Brand4} alt="" className="" />
            <p className="text-lg text-gray-700 my-6">
            We are delighted to have you as our logistics partner. Shiprocket Cargo has greatly improved our logistics with its affordable rates, extensive carrier network, and reliable deliveries, making them our top choice.
            </p>
            <p className="text-lg text-gray-700 my-6 font-semibold">Chirag Patel</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-10 w-full shrink-0">
            <img src={Customer2} alt="" className="opacity-50 invert" />
            <p className="text-lg text-gray-700 my-6">
            We look forward to continuing our partnership with Shiprocket Cargo and are confident that with your exceptional logistics services, we can achieve even greater success in the future.
            Once again, thank you for your exceptional service and commitment to excellence. It is a pleasure to work with a company that consistently goes above and beyond to meet our logistics needs.
            </p>
            <p className="text-lg text-gray-700 my-6 font-semibold">Vijay Jadav</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-10 w-full shrink-0">
            <img src={Customer3} alt="" className="opacity-50 invert" />
            <p className="text-lg text-gray-700 my-6">
            Shiprocket Cargo ensures our shipments are cost-effective and on time. The platform’s extensive carrier network and real-time tracking have upgraded our logistics experience.With Shiprocket Cargo, we have streamlined our logistics like never before. Affordable rates, a vast carrier network, and on-point deliveries make Shiprocket Cargo our go-to logistics partner.
            </p>
            <p className="text-lg text-gray-700 my-6 font-semibold">Deepak Saha</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
