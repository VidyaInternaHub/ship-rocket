import React from 'react'
import Steps1 from '../../../assets/images/Cargo/Steps.png'
import { FaAnglesDown } from "react-icons/fa6";

function Steps() {
  return (
    <div className='max-w-6xl mx-auto my-10 px-2'>
        <div className="flex md:flex-row  flex-col  w-full">
            <div className='w-full px-2 md:w-1/2'>
                <h2 className='text-5xl font-bold  my-8 text-primes'>
                All it takes is 3 steps to <span className='text-gradient1 font-normal'>get started</span>
                </h2>
                <p className='text-lg text-gray-700 my-6'>Ship your cargo shipments in no time and at your convenience. Here’s how to get started:</p>
                <div className='my-8' >
                    <div className='flex gap-8 items-center'>
                        <p className='text-3xl font-semibold rounded-full w-16 h-16 bg-green-100 p-6 flex items-center justify-center my-5' >1</p>
                        <div>
                            <h4 className='text-2xl font-semibold text-primes'>Create a shipment</h4>
                            <p className='text-lg text-gray-600'>Upload bulk shipments or create them manually through the Shiprocket Cargo dashboard.</p>
                        </div>
                    </div>
                    <p className='text-2xl font-semibold text-gray-200  my-4 ml-4'><FaAnglesDown /></p>
                    <div className='flex gap-8 items-center'>
                        <p className='text-3xl font-semibold rounded-full w-16 h-16 bg-green-100 p-6 flex items-center justify-center my-5' >2</p>
                        <div>
                            <h4 className='text-2xl font-semibold text-primes'>Select a courier partner</h4>
                            <p className='text-lg text-gray-600'>Choose a courier partner with our AI tool, based on factors such as weight, destination and more.</p>
                        </div>
                    </div>
                    <p className='text-2xl font-semibold text-gray-200  mty-4 ml-4'><FaAnglesDown /></p>
                    <div className='flex gap-8 items-center'>
                        <p className='text-3xl font-semibold rounded-full w-16 h-16 bg-green-100 p-6 flex items-center justify-center my-5' >3</p>
                        <div>
                            <h4 className='text-2xl font-semibold text-primes'>Ship your parcel</h4>
                            <p className='text-lg text-gray-600'>Generate labels, prepare your packages and hand them over to the chosen courier partner.</p>
                        </div>
                    </div>
                  
               
                </div>

            </div>
            <div className='w-full px-2 md:w-1/2 '>
                <img src={Steps1} alt="Woman watching laptop" width={300} height={400} className='relative top-20 left-8 md:w-96' />
            </div>
        </div>

    </div>
  )
}

export default Steps