import React, { useRef, useState, useEffect } from 'react';
import Cargostep1 from '../../../assets/images/Cargo/Cargostep1.png';
import Cargostep2 from '../../../assets/images/Cargo/Cargostep2.png';
import Cargostep3 from '../../../assets/images/Cargo/Cargostep3.png';
import Cargostep4 from '../../../assets/images/Cargo/Cargostep4.png';
import Cargostep5 from '../../../assets/images/Cargo/Cargostep5.png';
import Cargostep6 from '../../../assets/images/Cargo/Cargostep6.png';

function CargoSteps() {
  const [scrollAmount, setScrollAmount] = useState(0);
  const containerRef = useRef(null);
   const [cardWidth, setCardWidth] = useState(0); 
     useEffect(() => {
       if (containerRef.current) {
         const cardElement = containerRef.current.children[0]; 
         setCardWidth(cardElement.offsetWidth+50); 
         
       }
   
     }, []);



  const steps = [
    { title: 'Select source (Pickup) Warehouse', image: Cargostep1 },
    { title: 'Select destination (Drop) Warehouse', image: Cargostep2 },
    { title: 'Update package details', image: Cargostep3 },
    { title: 'Select courier partner', image: Cargostep4 },
    { title: 'Add airway bill number', image: Cargostep5 },
    { title: 'Download shipping labels', image: Cargostep6 }
  ];

  const handlePrev = () => {
    if (scrollAmount > 0) {
      setScrollAmount((prev) => prev - cardWidth); 
    }
  };

  const handleNext = () => {
    const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    if (scrollAmount < maxScroll) {
      setScrollAmount((prev) => prev + cardWidth); 
    }
  };

  useEffect(() => {
 
    containerRef.current.scrollLeft = scrollAmount;
  }, [scrollAmount]);

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-0">
      <h2 className="text-5xl font-bold my-8 text-primes">
        Step by step: The process unfolded
      </h2>
      <p className="text-lg text-gray-500 my-6">
        Deliver more value through your business with our end-to-end eCommerce and cargo shipping. Here’s how to get started:
      </p>
      <div className="flex w-full gap-8 md:gap-0 overflow-x-auto hide-scrollbar scroll-smooth" ref={containerRef}>
        {steps.map((step, index) => (
          <div className="w-full shrink-0" key={index}>
            <div className="pl-20">
              <p className="bg-[#f0edff] h-12 w-28 rounded-lg border border-[#f0edff] text-center flex justify-center items-center text-primes font-bold">
                Step {index + 1}
              </p>
              <p className="font-semibold text-gray-500 my-6 text-xl">{step.title}</p>
            </div>
            <div className="my-10 md:h-[500px] md:px-20 w-full">
              <img src={step.image} alt={step.image} className="h-full w-full rounded-lg" />
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden  flex gap-4  w-full justify-center">
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
  );
}

export default CargoSteps;
