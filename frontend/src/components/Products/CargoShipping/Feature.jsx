import React from 'react'
import Feature1 from '../../../assets/images/Cargo/feature1.png'
import Feature2 from '../../../assets/images/Cargo/feature2.png'
import Feature3 from '../../../assets/images/Cargo/feature3.png'
import Feature4 from '../../../assets/images/Cargo/feature4.png'
import Feature5 from '../../../assets/images/Cargo/feature5.png'

function Feature() {
  return (
    
    <div className='flex max-w-6xl mx-auto gap-14 md:gap-6 my-16 justify-between  hide-scrollbar overflow-auto px-2 md:px-0'>
        <div className='flex flex-col items-start justify-center gap-2 '>
            <img src={Feature1} alt="" className='w-24 h-24' />
            <p className='font-bold text-xl'>&#8377;6/Kg</p>
            <p className='text-lg'>initial rates <span className='relative top-0 left-0'>*</span></p>
        </div>
        <div className='flex flex-col items-start justify-center gap-2 '>
            <img src={Feature2} alt="" className='w-24 h-24' />
            <p className='font-bold text-xl'>24,000+</p>
            <p className='text-lg'>pin codes covered </p>
        </div>
        <div className='flex flex-col items-start justify-center gap-2'>
            <img src={Feature3} alt="" className='w-24 h-24' />
            <p className='font-bold text-xl'>Upto 40%</p>
            <p className='text-lg'>reduction in cost</p>
        </div>
        <div className='flex flex-col items-start justify-center gap-2 '>
            <img src={Feature4} alt="" className='w-24 h-24' />
            <p className='font-bold text-xl'>50K+ tonnes</p>
            <p className='text-lg'>PTL limited</p>
        </div>
        <div className='flex flex-col items-start justify-center gap-2 '>
            <img src={Feature5} alt="" className='w-24 h-24' />
            <p className='font-bold text-xl'>2000+</p>
            <p className='text-lg'>happy clients</p>
        </div>

    </div>
    
  )
}

export default Feature