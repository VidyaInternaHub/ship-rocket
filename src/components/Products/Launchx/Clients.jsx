import React from 'react'
import Client1 from '../../../assets/images/Launchx/Client1.png'
import Client2 from '../../../assets/images/Launchx/Client2.png'
import Client3 from '../../../assets/images/Launchx/Client3.png'
import Client4 from '../../../assets/images/Launchx/Client4.png'
import Client5 from '../../../assets/images/Launchx/Client5.png'
import Client6 from '../../../assets/images/Launchx/Client6.png'

function Clients() {
  return (
    <div className='background-gradient2 py-24'>
    <div className='max-w-6xl mx-auto py-10 '>
        <div className=' '>
            <h2 className=' text-6xl font-semibold text-primes mb-6'>Our
               <span className='text-gradient2 font-normal'> Clients</span> 
              </h2>
              <div className='w-full flex my-10 gap-10 overflow-auto hide-scrollbar p-6'>
                <div className='rounded-xl hover:shadow-lg transition-all duration-500 cursor-pointer w-44 h-[70px] p-3 shrink-0 bg-white flex  items-center border border-gray-200'>
                    <img src={Client1} alt=""  className=''/>
                </div>
                <div className='rounded-xl hover:shadow-lg transition-all duration-500 cursor-pointer w-44 h-[70px] p-3 shrink-0 bg-white flex justify-center items-center border border-gray-200'>
                    <img src={Client2} alt=""  className='h-full'/>
                </div>
                <div className='rounded-xl hover:shadow-lg transition-all duration-500 cursor-pointer w-44 h-[70px] p-3 shrink-0 bg-white flex justify-center items-center border border-gray-200'>
                    <img src={Client3} alt=""  className='h-full'/>
                </div>
                <div className='rounded-xl hover:shadow-lg transition-all duration-500 cursor-pointer w-44 h-[70px] p-3 shrink-0 bg-white flex justify-center items-center border border-gray-200'>
                    <img src={Client4} alt=""  className='h-full'/>
                </div>
                <div className='rounded-xl hover:shadow-lg transition-all duration-500 cursor-pointer w-44 h-[70px] p-3 shrink-0 bg-white flex justify-center items-center border border-gray-200'>
                    <img src={Client5} alt=""  className='h-full'/>
                </div>
                <div className='rounded-xl hover:shadow-lg transition-all duration-500 cursor-pointer w-44 h-[70px] p-3 shrink-0 bg-white flex justify-center items-center border border-gray-200'>
                    <img src={Client6} alt=""  className='h-full'/>
                </div>
              </div>
        </div>
    </div>
    </div>
  )
}

export default Clients