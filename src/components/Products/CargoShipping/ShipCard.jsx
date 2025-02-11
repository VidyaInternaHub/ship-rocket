import React from 'react'
import ShipCard1 from '../../../assets/images/Cargo/ShipCard.png'

function ShipCard() {
  return (
    <div className='max-w-6xl mx-auto my-20 px-2'>
        <div className='w-full relative '>
        <div className='bg-[#271262] w-full  p-6 md:p-20 flex justify-between relative rounded-t-3xl'>
            <div className='w-1/2 flex gap-8 flex-col'>
            <h2 className='text-5xl font-semibold text-white'>
            Ship effortlessly, beat
            competition and drive growth
            </h2>
            <button className='bg-white text-xl text-black h-16 md:w-48  mx-2 md:mx-0 text-center rounded-md'>
                Ship Now

            </button>
            </div>
            <div className='absolute bottom-0 right-20 hidden md:block'>
                <img src={ShipCard1} alt="Man with mobile" />
            </div>


        </div>
        <div className='background-gradient w-full h-5 absolute rounded-b-3xl'></div>
        </div>

        


    </div>
  )
}

export default ShipCard