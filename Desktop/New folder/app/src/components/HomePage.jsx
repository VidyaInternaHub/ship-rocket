import React from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import Cargo from '../assets/images/Cargo.png'
import Feature from './Feature'
import Calculate from './Calculate'
import Content from './Content'
import TrustedPartner from './TrustedPartner'
import Masonry from './Masonry'
import Steps from './Steps'
import Prioritise from './Prioritise'
import ShipCard from './ShipCard'
import Brands from './Brands'
import CargoSteps from './CargoSteps'
import Customer from './Customer'
import Blog from './Blog'
import FAQ from './FAQ'
import OurPartners from './OurPartners'
import Footer from './Footer'

function HomePage() {
  return (
    <>
    <Navbar />
    <Navbar2 />
    <div className="custom-gradient1   w-full pb-10 relative ">
        <div className=" absolute -bottom-16 left-0 transform -rotate-2 z-10 w-full bg-white h-30 overflow-hidden
        "></div>

   
        <div className="flex md:flex-row lg:ml-48 ml-3 gap-10 flex-col ">

            <div className='md:w-1/2 w-full px-2'>
                <div className="text-container flex flex-col justify-center gap-10 " >
                    <h3 className='text-6xl  font-bold  leading-16 text-primes'>
                    Tech-enabled shipping solutions
                    for all your <span className='custom-gradient font-medium'>heavy & bulk shipments</span>
                    </h3>
                    <p className=' text-[#666] text-lg'>
                    Elevate your business with our comprehensive B2B cargo shipping
                    solution at a single platform. Streamline the entire process and let
                    us take care of all the heavy lifting for you.
                    </p>
                    <button className='bg-[#735ae5;] text-xl text-white h-16 md:w-48  mx-2 md:mx-0 text-center rounded-md'>
                        Sign up for free
                    </button>
                </div>
            </div>
            <div className='md:w-1/2 w-full'>
                <img src={Cargo} alt='shipping truck' className='md:w-[480px] md:h-[500px] md:mt-10 md:ml-6  ' />
            </div>
        
        </div>


    </div>
    <Feature />
    <Calculate />
    <Content />
    <TrustedPartner />
    <Masonry />
    <Steps />
    <Prioritise />
    <ShipCard />
    <CargoSteps />
    <Brands />
    <Customer />
    <Blog />
    <FAQ />
    <OurPartners />
    <Footer />
    
    </>
  )
}

export default HomePage