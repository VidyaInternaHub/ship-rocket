import React from 'react'
import Blog1 from "../../../assets/images/Cargo/Blog1.png"
import Blog2 from "../../../assets/images/Cargo/Blog2.png"
import Blog3 from "../../../assets/images/Cargo/Blog3.png"
import { MdArrowOutward } from "react-icons/md";

function Blog() {
  return (
    <div className='max-w-6xl mx-auto my-20 px-2'>
             <h2 className="text-5xl font-bold my-8 text-primes">
        Learn more with our <span className='text-gradient1 font-normal'>Blogs</span>
      </h2>
      <div className="flex w-full flex-col lg:flex-row gap-10 md:gap-14  lg:gap-20">
        <div className='flex flex-col gap-6 md:mx-3 w-full lg:mx-0 lg:w-1/3 rounded-xl my-6 shadow-xl'>
            <img src={Blog1} alt="" className='w-full rounded-t-xl' />
            <div className='w-full mx-6 flex flex-col gap-4 my-6'>
                <p className='bg-green-100 px-2 py-3 w-1/2 text-center'>B2B BULK SHIPPING</p>
                <h4 className='font-semibold text-primes text-3xl'>5 Best Sites to Ship <br />Bulk Orders</h4>
                <p className='text-burgundy font-semibold'>Know More <MdArrowOutward className='inline-block relative -top-1 left-1'/></p>
            </div>
 
        </div>
        <div className='flex flex-col gap-6 md:mx-3 w-full lg:mx-0 lg:w-1/3 rounded-xl my-6 shadow-xl'>
            <img src={Blog2} alt="" className='w-full rounded-t-xl' />
            <div className='w-full mx-6 flex flex-col gap-4 my-6'>
                <div className='flex w-ful gap-4'>
                <p className='bg-green-100  py-3 w-1/3 text-center'>B2B  SHIPPING</p>
                <p className='bg-green-100  py-3 w-1/2 whitespace-nowrap text-center'>CARGO  SHIPPING</p>
                </div>
             
                <h4 className='font-semibold text-primes text-3xl'>5 Common B2B <br />Shipping Mistakes...</h4>
                <p className='text-burgundy font-semibold'>Know More <MdArrowOutward className='inline-block relative -top-1 left-1'/></p>
            </div>
 
        </div>
        <div className='flex flex-col gap-6 md:mx-3 w-full lg:mx-0 lg:w-1/3 rounded-xl my-6 shadow-xl'>
            <img src={Blog3} alt="" className='w-full rounded-t-xl' />
            <div className='w-full mx-6 flex flex-col gap-4 my-6'>
            <div className='flex w-ful gap-4'>
                <p className='bg-green-100 px-2 py-3 w-1/2 text-center'>B2B  LOGISTICS</p>
                <p className='bg-green-100 px-2 py-3 w-1/3 text-center'>B2B TRENDS</p>
                </div>
                <h4 className='font-semibold text-primes text-3xl'>B2B Logistics  <br />Technologies Trends</h4>
                <p className='text-burgundy font-semibold'>Know More <MdArrowOutward className='inline-block relative -top-1 left-1'/></p>
            </div>
 
        </div>

      </div>

    </div>
  )
}

export default Blog