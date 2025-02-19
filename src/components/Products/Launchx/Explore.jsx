import React from 'react'
import Feature1 from '../../../assets/images/Launchx/explore1.png'
import Feature2 from '../../../assets/images/Launchx/explore2.png'
import Feature3 from '../../../assets/images/Launchx/explore3.png'
import Feature4 from '../../../assets/images/Launchx/explore4.png'
import { div } from 'framer-motion/client'

function Explore() {
  return (
    <div className='max-w-6xl mx-auto my-10'>
         <h2 className=' text-6xl font-semibold text-primes mb-6'>Explore a world of
               <span className='text-gradient2 font-normal'> untapped potential</span> 
              </h2>
              <p className='text-lg text-gray-500'>Seamless expansion, satisfying experiences. Touchdown into the world of eCommerce exports with zero turbulence.</p>

    
    <div className='flex max-w-6xl mx-auto gap-14 md:gap-6 my-8 justify-between  hide-scrollbar overflow-auto px-2 md:px-0 border-b-2 pb-16 border-dashed border-b-gray-300  border-b-dashed'>
        <div className='flex flex-col items-start justify-center gap-2 '>
            <img src={Feature1} alt="" className='w-18 h-18' />
            <p className='font-bold text-xl'>A+ Marketplace Listings</p>
        </div>
        <div className='flex flex-col items-start justify-center gap-2 '>
            <img src={Feature2} alt="" className='w-18 h-18' />
            <p className='font-bold text-xl'>Risk-free Partnership</p>
        </div>
        <div className='flex flex-col items-start justify-center gap-2'>
            <img src={Feature3} alt="" className='w-18 h-18' />
            <p className='font-bold text-xl'>Global Marketing Expertise</p>
        </div>
        <div className='flex flex-col items-start justify-center gap-2 '>
            <img src={Feature4} alt="" className='w-18 h-18' />
            <p className='font-bold text-xl'>Hassle-free Finances</p>
        </div>


    </div>
    </div>
    
  )
}

export default Explore