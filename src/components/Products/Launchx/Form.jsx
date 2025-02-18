import React from 'react'
import Background from '../../../assets/images/Launchx/Background1.png'

function Form() {
  return (
    <div className='bg-primes w-full 'style={{backgroundImage: `url(${Background})`}}>
        <div className='max-w-6xl mx-auto py-20'>
            <div className='w-full flex flex-col md:flex-row md:items-center gap-10'>
                <div className='md:w-1/2 w-full p-2'>
                <h2 className="text-5xl font-semibold text-white mb-6 ">
        Get started on your
        <span className="text-gradient2 font-normal">international journey</span>
          </h2>
          <p className='text-white my-4'>Convert your local business into a global brand and
          access a competitive advantage in the eCommerce exports space.</p>
                </div>
                <div className='md:w-1/2 w-full p-2'>
                    <div className='md:w-[590] md:p-8 p-2 bg-white rounded-2xl'>
                        <form className='flex flex-wrap w-full gap-y-3' action="" >
                            <div className='md:w-1/2 px-3'>
                            <label htmlFor="name" className='text-gray-700'>Full name</label> <br />
                            <input className='w-full p-2 my-2 rounded-lg border border-gray-200 focus:outline   focus:outline-burgundy focus:shadow-sm transition-all duration-300' type="text" placeholder='Full name*' required /> <br />
                            </div>
                            <div className='md:w-1/2 px-3'>
                            <label htmlFor="email" className='text-gray-700'>Email</label> <br />
                            <input className='w-full p-2 my-2 rounded-lg border border-gray-200 focus:outline focus:outline-burgundy focus:shadow-sm transition-all duration-300' type="email" placeholder='Email*' required /> <br />
                            </div>
                            <div className='md:w-1/2 px-3'>
                            <label htmlFor="number" className='text-gray-700'>Phone Number</label> <br />
                            <input className='w-full p-2 my-2 rounded-lg border border-gray-200 focus:outline focus:outline-burgundy focus:shadow-sm transition-all duration-300' type="number" placeholder='Phone Number*' required /> <br />
                            </div>
                            <div className='md:w-1/2 px-3'>
                            <label htmlFor="brand" className='text-gray-700'>Brand Name</label> <br />
                            <input className='w-full p-2 my-2 rounded-lg border border-gray-200 focus:outline focus:outline-burgundy focus:shadow-sm transition-all duration-300' type="text" placeholder='Brand Name*' required /> <br />
                            </div>
 
                            <div className="md:w-1/2 px-3">
                                <label htmlFor="presence" className="text-gray-700">
                                    Do you have an online presence?
                                </label>
                                <br />
                                <select
                                    id="presence"
                                    className="w-full p-2 my-2 rounded-lg border border-gray-200 focus:outline focus:outline-burgundy focus:shadow-sm transition-all duration-300"
                                    required
                                >
                                    <option value="" disabled selected>
                                    Please Select*
                                    </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label htmlFor="presence" className="text-gray-700">
                                Monthly domestic shipment volume?
                                </label>
                                <br />
                                <select
                                    id="presence"
                                    className="w-full p-2 my-2 rounded-lg border border-gray-200 focus:outline focus:outline-burgundy focus:shadow-sm transition-all duration-300"
                                    required
                                >
                                    <option value="" disabled selected>
                                    Please Select*
                                    </option>
                                    <option value="personal Shipments">I have a few shipments</option>
                                    <option value="less than 10">Less Than 10</option>
                                    <option value="10-50">10-50</option>
                                    <option value="151-500">151-500</option>
                                    <option value="501-1000">501-1000</option>
                                    <option value="Above 1000">Above 1000</option>
                                </select>
                            </div>
                            <button className='mx-4 w-full bg-burgundy text-white py-3 px-4  rounded-lg text-center'>Contact Us</button>


                        </form>
                    </div>

                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Form