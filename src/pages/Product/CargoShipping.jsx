import React from 'react'
import Navbar2 from '../../components/Products/CargoShipping/Navbar2'
import Cargo from '../../assets/images/Cargo/Cargo.png'
import Feature from '../../components/Products/CargoShipping/Feature'
import Calculate from '../../components/Products/CargoShipping/Calculate'
import Content from '../../components/Products/CargoShipping/Content'
import TrustedPartner from '../../components/Products/CargoShipping/TrustedPartner'
import Masonry from '../../components/Products/CargoShipping/Masonry'
import Steps from '../../components/Products/CargoShipping/Steps'
import Prioritise from '../../components/Products/CargoShipping/Prioritise'
import ShipCard from '../../components/Products/CargoShipping/ShipCard'
import Brands from '../../components/Products/CargoShipping/Brands'
import CargoSteps from '../../components/Products/CargoShipping/CargoSteps'
import Customer from '../../components/Products/CargoShipping/Customer'
import Blog from '../../components/Products/CargoShipping/Blog'
import FAQ from '../../components/Products/CargoShipping/FAQ'
import OurPartners from '../../components/Products/CargoShipping/OurPartners'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Navbar from '../../components/Products/CargoShipping/Navbar'
function CargoShipping() {
  return (
    <div className='overflow-x-hidden'>
    <div className='max-w-6xl mx-auto  md:block'>
    <Header />
    </div>
    <Navbar2 />
    <div className="custom-gradient1   w-full pb-10 pt-10 relative ">
        <div className=" absolute -bottom-16 left-0 transform -rotate-2 z-10 w-full bg-white h-30 overflow-hidden
        "></div>

   
        <div className="flex md:flex-row lg:ml-48 ml-3 gap-10 flex-col ">

            <div className='md:w-1/2 w-full px-2'>
                <div className="text-container flex flex-col justify-center gap-10 " >
                    <h3 className='text-6xl  font-bold  leading-16 text-primes'>
                    Tech-enabled shipping solutions
                    for all your <span className='text-gradient1 font-medium'>heavy & bulk shipments</span>
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
    
    </div>
  )
}

export default CargoShipping