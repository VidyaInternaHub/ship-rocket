import React from 'react'

function Calculate() {
  return (
    <>
    <div className='w-full px-2 md:max-w-6xl mx-auto my-4'>
        <div>
         
            <h3 className='text-gradient1 font-semibold text-5xl py-10 '>
               Calculate Cargo
            </h3>
            <p className='font-bold text-5xl '>
                shipping rates on the go
            </p>

        </div>
        <div className='max-w-6xl mx-auto bg-[#f6fafe] rounded-2xl py-10 px-10 my-12 '>
            <form className=' bg-white  py-12 px-6 my-4 rounded-xl' >
                <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
                    <div>
                        <label className='text-lg'>Pickup Pincode*</label>
                        <br />
                        <input type="number" placeholder='Enter your Pickup Pincode*' className='text-gray-600 text-xl ml-2 mt-3 border border-gray-200 py-3 w-full md:w-80 transition-colors duration-300 focus:ring-1 focus:border-[#735ae5] outline-none ring-[#735ae5] px-5 rounded-md'  />
                    </div>
                    <div>
                        <label className='text-lg'>Destination Pincode*</label>
                        <br />
                        <input type="number" placeholder='Enter your Destination Pincode*' className='text-gray-600 text-xl ml-2 mt-3 border border-gray-200 py-3 w-full md:w-80 transition-colors duration-300 focus:ring-1 focus:border-[#735ae5] outline-none ring-[#735ae5] px-4 rounded-md'  />
                    </div>
                    <div>
                        <label className='text-lg'>Weight (in kg)*</label>
                        <br />
                        <input type="number" placeholder='Enter your Weight (in kg)*' className='text-gray-600 text-xl ml-2 mt-3 border border-gray-200 py-3 w-full  md:w-72 transition-colors duration-300 focus:ring-1 focus:border-[#735ae5] outline-none ring-[#735ae5] px-5 rounded-md' />
                    </div>
                </div>
                <div className='w-full flex justify-center mt-6'>
                  <button className='bg-[#735ae5;] text-white rounded-lg text-xl text-center w-60 px-3 py-3 font-semibold '>Check Rates</button>
                </div>
                <div className='w-full mt-4 md:mt-2 flex justify-end'>
                    <p className='font-semibold text-sm text-[#666666] '>*Rates are inclusive of GST</p>
                </div>



            </form>
        </div>
    </div>
    </>
  )
}

export default Calculate