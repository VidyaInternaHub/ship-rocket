import React from 'react'
import Partner1 from '../../../assets/images/Cargo/Partner1.png'
import Partner2 from '../../../assets/images/Cargo/Partner2.png'
import Partner3 from '../../../assets/images/Cargo/Partner3.png'
import Partner4 from '../../../assets/images/Cargo/Partner4.png'
import Partner5 from '../../../assets/images/Cargo/Partner5.png' 
import Partner6 from '../../../assets/images/Cargo/Partner6.png'
import Partner7 from '../../../assets/images/Cargo/Partner7.png' 
import Partner8 from '../../../assets/images/Cargo/Partner8.png'
import Partner9 from '../../../assets/images/Cargo/Partner9.png'
import Partner10 from '../../../assets/images/Cargo/Partner2.png'
import Partner11 from '../../../assets/images/Cargo/Partner11.png'
import Partner12 from '../../../assets/images/Cargo/Partner12.png'
import Partner13 from '../../../assets/images/Cargo/Partner13.png'
import Partner14 from '../../../assets/images/Cargo/Partner14.png'
function OurPartners() {
    const images1=[Partner1,Partner2,Partner3,Partner4,]
    const images2=[Partner5,Partner6,Partner7,Partner8,Partner9,Partner10,Partner11,Partner12,Partner13,Partner14]
  return (
    <div className='max-w-6xl mx-auto relative px-2'>
        <h2 className='text-5xl font-bold my-20 text-primes'>Our <span className='text-gradient1 font-normal'>Partners</span></h2>
        <div>
            <p className='font-semibold text-burgundy bg-[#F0EDFF] py-2 px-2 text-center w-56 rounded-md'>FTL Carrier Network</p>
            <div className='flex w-full justify-between  my-6  items-center overflow-scroll gap-y-8 h-24 hide-scrollbar  md:flex-wrap'>
                {
                    images1.map((image,index)=>(
                        <div className='md:w-1/4 w-1/2 shrink-0 ' key={index} >
                            <img src={image} alt=""  />
                       </div>
                    ))}

            </div>
        </div>
        <div>
            <p className='font-semibold text-burgundy bg-[#F0EDFF] py-2 px-2 text-center w-56 rounded-md'>PTL Carrier Network</p>
            <div className='flex w-full justify-between  my-6  items-center  hide-scrollbar overflow-scroll     md:flex-wrap'>
                {
                    images2.map((image,index)=>(
                        <div className='md:w-1/5 w-1/2 shrink-0 my-8 ' key={index} >
                            <img src={image} alt=""  />
                       </div>
                    ))}

            </div>
        </div>

    </div>
  )
}

export default OurPartners