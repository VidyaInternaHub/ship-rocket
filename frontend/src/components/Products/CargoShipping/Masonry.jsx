import React from 'react'
import Masonry1 from '../../../assets/images/Cargo/Masonry1.png'
import Masonry2 from '../../../assets/images/Cargo/Masonry2.png'
import Masonry3 from '../../../assets/images/Cargo/Masonry3.png'
import Masonry4 from '../../../assets/images/Cargo/Masonry4.png'

function Masonry() {
  return (
    <div className='max-w-6xl mx-auto px-2 md:px-0 '>
        <h3 className='text-5xl font-bold  my-8 text-primes'>Tailored next-gen <span className='text-gradient1 font-normal'>solutions</span> at your fingertips</h3>
        <p className='text-lg text-gray-700 my-6'>Accelerate your business with the tech-enabled shipping solution designed to meet all your cargo needs.</p>\

        <div className='flex  gap-10 flex-wrap ml-3'>
          <div className='flex flex-col gap-4 w-full md:w-1/3 grow  mx-2 '>
            <img src={Masonry1} alt="Woman with mobile" className='background-img h-[420px] w-full p-9' />
            <h4 className='text-2xl font-semibold text-primes'>Quick Commerce</h4>
            <p className='text-lg text-gray-600 '>Effortlessly schedule appointment deliveries for FMCG products in the Shiprocket Cargo dashboard. Join top players like DMart, JioMart and Metro.</p>
          </div>
          <div className='flex flex-col gap-4  w-full md:w-1/3 grow  mx-2 '>
            <img src={Masonry2} alt="Truck with cargo" className='background-img h-[420px] w-full p-9' />
            <h4 className='text-2xl font-semibold text-primes'>Time-bound deliveries</h4>
            <p className='text-lg text-gray-600 '>Delight your customers with time-bound deliveries, even during off-hours (11:00 PM – 08:00 AM) and breeze past competition.</p>
          </div>
          <div className='flex flex-col gap-4 w-full md:w-1/3 grow   mx-2 '>
            <img src={Masonry3} alt="Email Notification" className='background-img h-[420px] w-full p-9' />
            <h4 className='text-2xl font-semibold text-primes'>Email/SMS communication</h4>
            <p className='text-lg text-gray-600 '>Count on seamless email/SMS communication to provide customers with all necessary updates.</p>
          </div>
          <div className='flex flex-col gap-4w-full md:w-1/3 grow   mx-2 '>
            <img src={Masonry4} alt="Woman with Mobile" className='background-img h-[420px] w-full p-9' />
            <h4 className='text-2xl font-semibold text-primes'>
Count on seamless email/SMS communication to provide customers with all necessary updates.

img
ERP integrations</h4>
            <p className='text-lg text-gray-600 '>Unlock Shiprocket Cargo’s full potential with seamless API integrations for leading ERP systems like SAP and Navision.</p>
          </div>

        </div>
        
    </div> 
  )
}

export default Masonry