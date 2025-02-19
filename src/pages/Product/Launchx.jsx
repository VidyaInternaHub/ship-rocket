import React,{useState,useEffect} from 'react'
import Navbar from '../../components/Products/Launchx/Navbar'
import Background from '../../assets/images/Launchx/Background.png'
import Homepage from '../../assets/images/Launchx/Homepage.png'
import Explore from '../../components/Products/Launchx/Explore'
import Masonry from '../../components/Products/Launchx/Masonry'
import Clients from '../../components/Products/Launchx/Clients'
import Steps from '../../components/Products/Launchx/Steps'
import Form from '../../components/Products/Launchx/Form'
import Header from '../../components/Header'
import Footer from '../../components/Footer'



function Launchx() {


  return (
    <div className='max-w-6xl mx-auto'>
    <Header />
    <Navbar />

        <div className={`w-full   bg-[url(${Background})] relative py-20 overflow-hidden `} 
        style={{ backgroundImage: `url(${Background})` }}>
          <div className=" absolute -bottom-12 -left-0 transform -rotate-2 w-[102%] -right-1  bg-white h-30 overflow-hidden "></div>
          <div className='max-w-6xl mx-auto'>
          <div className="flex flex-col md:flex-row px-4 md:px-2 gap-10 md:gap-0">
            <div className='md:w-1/2 w-full flex flex-col gap-10'>
              <h2 className=' text-6xl font-semibold text-primes'>Expand Your Horizons
               <span className='text-gradient2 font-normal'>Into Global Markets</span> 
              </h2>
              <p className='text-lg text-gray-500'>Launch your brand in international markets and cultivate a strong presence worldwide in just a few clicks.</p>
              <button className='bg-burgundy text-white py-3 px-4 md:w-44 rounded-lg text-center w-full '>Get Started</button>

            </div>
            <div className='md:w-1/2 w-full'>
              <img src={Homepage} alt="homepage" className='w-full  relative -top-4' />
            </div>
          </div>
          </div>
  
          


        </div>
 
        <Explore />
        <Masonry />
        <Steps />
        <Clients />
        <Form />
        <Footer />


    </div>

  )
}

export default Launchx