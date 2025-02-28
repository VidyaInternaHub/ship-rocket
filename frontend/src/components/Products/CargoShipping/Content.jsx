import React from 'react'
import Content1 from "../../../assets/images/Cargo/Content1.png"
import Content2 from "../../../assets/images/Cargo/Content2.png"
import Content3 from "../../../assets/images/Cargo/Content3.png"
import Content4 from "../../../assets/images/Cargo/Content4.png"
import Content5 from "../../../assets/images/Cargo/Content5.png"
import Content6 from "../../../assets/images/Cargo/Content6.png"

function Content() {
  return (
    <>
    <div className='max-w-6xl mx-auto my-20 px-2'>
        <h2 className='text-5xl font-bold  tracking-tight my-8 text-primes'>Platform built to scale your <span className='text-gradient1'> business</span></h2>
        <div className="flex md:flex-col overflow-auto hide-scrollbar gap-3">
        <div className='flex w-full gap-8 my-20 overscroll-auto md:flex-wrap '>
            <div className='flex flex-col justify-start items-between shrink-0 basis-1/2 md:basis-1/3  '>
                <img src={Content1} alt="" width={100} height={100}/>
                <p className='text-xl font-semibold'>Wider Reach</p>
                <p className='text-lg text-gray-700 tracking-tight'>Ship seamlessly to 24,000+ pin codes across India.</p>
            </div>
            <div className='flex flex-col justify-start items-between gap-3 ml-4 shrink-0 basis-1/2 md:basis-1/4'>
                <img src={Content2} alt="" width={100} height={100}/>
                <p className='text-xl font-semibold'>Multiple Carriers</p>
                <p className='text-lg text-gray-700'>Optimise your supply chain with digitised B2B logistics featuring 14 carriers.</p>
            </div>
            <div className='flex flex-col justify-start items-between gap-3 ml-4 shrink-0 basis-1/2 md:basis-1/4 '>
                <img src={Content3} alt="" width={100} height={100}/>
                <p className='text-xl font-semibold'>Real-time tracking</p>
                <p className='text-lg text-gray-700'>Track shipments from the time of order placement till delivery.</p>
            </div>
            <div className='flex flex-col justify-start items-between shrink-0 basis-1/2 md:basis-1/3 '>
                <img src={Content4} alt="" width={100} height={100}/>
                <p className='text-xl font-semibold'>AI recommendations</p>
                <p className='text-lg text-gray-700 tracking-tight'>Choose the best courier partner with the help of our AI tool.</p>
            </div>
            <div className='flex flex-col justify-start items-between gap-3 ml-4 shrink-0 basis-1/2 md:basis-1/4'>
                <img src={Content5} alt="" width={100} height={100}/>
                <p className='text-xl font-semibold'>Affordable rates</p>
                <p className='text-lg text-gray-700'>Experience the ease of cargo and PTL/FTL/LTL shipping at reduced costs.</p>
            </div>
            <div className='flex flex-col justify-start items-between gap-3 ml-4 shrink-0 basis-1/2 md:basis-1/4'>
                <img src={Content6} alt="" width={100} height={100}/>
                <p className='text-xl font-semibold'>Dedicated support</p>
                <p className='text-lg text-gray-700'>Get 24*7 assistance whenever you need it.</p>
            </div>
        </div>
     
        </div>

    </div>
    </>
  )
}

export default Content