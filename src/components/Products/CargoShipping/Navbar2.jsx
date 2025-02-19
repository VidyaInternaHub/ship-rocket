import React,{useState,useEffect} from 'react'
import Logo2 from '../../../assets/images/Cargo/logo2.png'

function Navbar2() {

   const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
 <div className={` ${!isSticky && "custom-gradient1" } py-4 sticky top-0 ${isSticky ? "z-40":"z-10"}`}>
       <div className='max-w-6xl mx-auto  '>
            <div   className={`w-full flex justify-between items-center  ${isSticky ? 'bg-[#ffffffa5] backdrop-blur-xl h-16 py-4 px-6 rounded-[50px]' : ''} transition-all duration-500 my-5`}>
                <img src={Logo2} alt="Cargox" className=' w-20' />
                <div className='flex gap-4 overflow-auto hide-scrollbar'>
                    <ul className={`flex gap-4 text-primes items-center  overflow-auto hide-scrollbar ${isSticky ? "hidden" : ""}`}>
                        <li className='whitespace-nowrap'>Overview</li>
                        <li className='whitespace-nowrap'>Shipping Rate Calculator</li>
                        <li className='whitespace-nowrap'>Features</li>
                        <li className='whitespace-nowrap'>Blog</li>
                        <li>                    <button className={`bg-burgundy text-xl text-white h-10 w-32 text-center  ${isSticky ? "rounded-4xl ":"rounded-lg "}`}>Try For Free</button>
                        </li>
                                   
                    </ul>
                    <button className={`bg-burgundy text-xl text-white h-10 w-32 text-center  ${isSticky ? "rounded-4xl ":"rounded-lg hidden"}`}>Try For Free</button>
                    
   

                </div>
            </div>
        </div>
 </div>
  )
}


export default Navbar2