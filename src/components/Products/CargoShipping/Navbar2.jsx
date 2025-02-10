import React from 'react'
import Logo2 from '../../../assets/images/Cargo/logo2.png'

function Navbar2() {
  return (
    <>


    <nav className={`w-full mt-4 p-2 pb-4 bg-[#ffffffbf] backdrop-blur-xs sticky top-0 z-40  `}>
        <div className=' max-w-6xl mx-auto flex justify-between items-center'>
            <img src={Logo2} alt="Logo"  className='h-12  mt-0' />
            <ul className=' gap-5 text-primes font-semibold  overflow-auto hide-scrollbar hidden md:flex  items-center whitespace-nowrap  '>
                <li>Overview</li>
                <li>Shipping Rate Calculator</li>
                <li>Features</li>
                <li>Blog</li>
                <li>Log In</li>
                <li>
                    <button className='bg-burgundy text-lg text-white h-12 w-32 text-center rounded-md'>
                    Try For Free
                    </button>
                </li>
         
            </ul>
            <button className='bg-burgundy text-xl text-white h-12 w-32 text-center rounded-md md:hidden'>
                Try For Free
            </button>
        
        </div>
    </nav>
 
    </>
  )
}

export default Navbar2