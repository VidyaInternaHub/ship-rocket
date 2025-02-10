
import React, { useEffect, useState } from 'react';
import Brand1 from '../../../assets/images/Cargo/Brand1.png';
import Brand2 from '../../../assets/images/Cargo/Brand2.png';
import Brand3 from '../../../assets/images/Cargo/Brand3.png';
import Brand4 from '../../../assets/images/Cargo/Brand4.png';
import Brand5 from '../../../assets/images/Cargo/Brand5.png';
import Brand6 from '../../../assets/images/Cargo/Brand6.png';
import Brand7 from '../../../assets/images/Cargo/Brand7.png';

function Brands() {
  const [scrollPos, setScrollPos] = useState(0);
  const images = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPos((prevPos) => (prevPos + 1) % 3534); 
    }, 4); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full my-20 px-2'>
      <h2 className='text-5xl font-bold my-8 text-primes max-w-6xl mx-auto'>
        In good company: Brands who <span className='text-gradient1 font-normal'>trust us</span>
      </h2>
      <div className="relative overflow-hidden my-10">
        <div
          className="flex gap-10 transition-transform animate-marquee w-full "
          style={{
            transform: `translate3d(-${scrollPos}px, 0, 0)`,
            transition: 'transform 10000ms linear',
            width: '3534px', // Adjust the width based on content
          }}
        >
          {images.map((image, index) => (
            <div key={index} className='w-64 h-20 p-4 border overflow-hidden rounded-lg border-[#e1ddff] transition-shadow duration-300 hover:shadow-lg shrink-0'>
              <img src={image} alt={`Brand ${index}`} className='w-full h-full scale-[0.8]' />
            </div>
          ))}
          {/* Repeat images for continuous scroll */}
          {images.map((image, index) => (
            <div key={index} className='w-64 h-20 p-4 border overflow-hidden rounded-lg border-[#e1ddff] hover:shadow-lg shrink-0'>
              <img src={image} alt={`Brand ${index}`} className='w-full h-full scale-[0.8]' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
