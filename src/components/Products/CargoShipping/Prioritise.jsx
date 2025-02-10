import React from 'react'

function Prioritise() {
  return (
    <div className='max-w-6xl mx-auto my-20 px-2'>
           <h3 className='text-5xl font-bold  my-8 text-primes'><span className='text-gradient1 font-normal'>Prioritising</span> your business at every turn</h3>
            <p className='text-lg text-gray-700 my-6'>In a dynamic world with evolving customer demands and new expectations, rest assured that we’ve got you
            covered with next-gen value-added services.</p>
            <div className='flex justify-between w-full my-6 md:flex-wrap overflow-auto hide-scrollbar  md:overflow-hidden md:gap-y-16 gap-6 md:gap-0'>
                <div className='flex  gap-8 md:w-1/3 '>
                    <p  className="custom h-10"></p>
                    <p className='font-semibold text-2xl whitespace-nowrap' >Appointment Deliveries</p>
                </div>
                <div className='flex  gap-8 md:w-1/3'>
                    <p  className="custom h-10"></p>
                    <p className='font-semibold text-2xl whitespace-nowrap ' >Pan-India Coveage</p>
                </div>
                <div className='flex gap-8 md:w-1/3'>
                    <p className="custom h-10"></p>
                    <p className='font-semibold text-2xl flex items-center justify-center whitespace-nowrap' >e-PODs</p>
                </div>
                <div className='flex  gap-8 md:w-1/3'>
                    <p  className="custom h-10"></p>
                    <p className='font-semibold text-2xl whitespace-nowrap' >Weight dispute redressal</p>
                </div>
                <div className='flex  gap-8 md:w-1/3'>
                    <p  className="custom h-10"></p>
                    <p className='font-semibold text-2xl whitespace-nowrap' >NDRs</p>
                </div>
                <div className='flex gap-8  md:w-1/3'>
                    <p  className="custom w-20"></p>
                    <p className='font-semibold text-2xl whitespace-nowrap md:whitespace-normal ' >Unicommerce & ClickPost channel integrations</p>
                </div>
            </div>
    </div>
  )
}

export default Prioritise