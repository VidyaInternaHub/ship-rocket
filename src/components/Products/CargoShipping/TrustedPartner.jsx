import React from 'react'

function TrustedPartner() {
  return (
    <>
    <div className="max-w-6xl mx-auto px-2">
        <p className='text-burgundy '>Easing your load every step of the way</p>
        <h3 className='text-5xl font-bold  my-8 text-primes'>Your trusted partner for <span className='text-gradient1 font-normal'>heavy shipments,</span><br />
        delivering at the speed you need</h3>
        <p className='text-lg text-gray-700 my-6'>Efficient cargo logistics, personalised for you. Navigate the future of shipping <br />
        with our accessible custom B2B shipping solutions.</p>

        <div className='flex justify-between w-full my-16 hide-scrollbar overflow-auto gap-6 md:mx-0 mx-4'>
            <div className='flex  gap-8 w-full '>
                <p  className="custom"></p>
                <p className='font-semibold text-2xl whitespace-nowrap' >Full Truck Load  (FTL)</p>
            </div>
            <div className='flex  gap-8 w-full'>
                <p  className="custom"></p>
                <p className='font-semibold text-2xl whitespace-nowrap ' >Partial Truck Load (PTL)</p>
            </div>
            <div className='flex gap-8 w-full'>
                <p className="custom flex justify-center items-center"></p>
                <p className='font-semibold text-2xl flex items-center justify-center whitespace-nowrap' >Air Cargo</p>
            </div>
        </div>

    </div>
    </>
  )
}

export default TrustedPartner