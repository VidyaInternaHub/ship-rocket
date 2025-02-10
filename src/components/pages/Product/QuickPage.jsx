import React,{useState,useEffect} from 'react'
import Navbar from '../../Products/QuickPage/Navbar'
import Navbar2 from '../../Products/QuickPage/Navbar2';
import Homepage  from '../../../assets/images/Quick/homepage.png'
import Deliveries from '../../Products/QuickPage/Deliveries';
import QuickSteps from '../../Products/QuickPage/QuickSteps';
import SuggestedReads from '../../Products/QuickPage/SuggestedReads';
import FAQ from '../../Products/QuickPage/FAQ';
import Footer from '../../Products/QuickPage/Footer';
// import Footer from '../../Footer.jsx'


function QuickPage() {


  return (
    <>
    <Navbar />
    <Navbar2 />
        <div className='w-full  custom-gradient1 relative py-20 overflow-hidden '>
          <div className=" absolute -bottom-12 -left-0 transform -rotate-2 w-[102%] -right-1  bg-white h-30 overflow-hidden "></div>
          <div className='max-w-6xl mx-auto'>
          <div className="flex flex-col md:flex-row px-4 md:px-2 gap-10 md:gap-0">
            <div className='md:w-1/2 w-full flex flex-col gap-10'>
              <h2 className=' text-6xl font-semibold text-primes'>
              Make local deliveries <span className='text-gradient1'>Quick affordable & reliable</span>
              </h2>
              <p className='text-lg'>With your favourite couriers, all in one app.</p>
              <button className='bg-burgundy text-white py-3 px-4 md:w-44 rounded-lg text-center w-full '>Get Started</button>

            </div>
            <div className='md:w-1/2 w-full'>
              <img src={Homepage} alt="homepage" className='w-full h-full relative -top-4' />
            </div>
          </div>
          </div>
  
          


        </div>
        <Deliveries />
        <QuickSteps />
        <SuggestedReads />
        <FAQ />
        <Footer />
    </>

  )
}

export default QuickPage