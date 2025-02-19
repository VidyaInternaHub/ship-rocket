import React from 'react'
import Masonry1 from '../../../assets/images/Launchx/Masonry1.png'
import Masonry2 from '../../../assets/images/Launchx/Masonry2.png'
import Masonry3 from '../../../assets/images/Launchx/Masonry3.png'
import Masonry4 from '../../../assets/images/Launchx/Masonry4.png'
import Masonry5 from '../../../assets/images/Launchx/Masonry5.png'

function Masonry() {
    const Masonries1=[{img:Masonry1,title:"Accelerated market penetration",description:"Access top global markets to expand your local business with our pre-assessed data on market trends and growth potential."},
        {img:Masonry2,title:"Risk-free inventory management",description:"Say goodbye to costly overstock, stockouts, costly storage expenses and inefficient workflows with streamlined inventory operations."},
        {img:Masonry3,title:"Lean operational workflows",description:"Let your international operations practically run on autopilot via ready-to-execute strategies, allowing you to focus on your local production."}
    ]
    const Masonries2=[{img:Masonry4,title:"Assured profit margins",description:"Stay atop your pricing strategies and build on profits with insights on destination country pricing and cost structures without any additional investment."},
        {img:Masonry5,title:"No added investment",description:"Choose from our pricing recommendations and incur zero added charges with pricing models based on actual costs and competitive benchmarking."}
    ]
  return (
    <div className='max-w-6xl mx-auto my-10'>
          <h2 className=' text-6xl font-semibold text-primes mb-6'>Explore a world of
               <span className='text-gradient2 font-normal'> untapped potential</span> 
              </h2>
              <p className='text-lg text-gray-500'>Seamless expansion, satisfying experiences. Touchdown into the world of eCommerce exports with zero turbulence.</p>

              <div className='mt-10 flex flex-col md:flex-row '>
                <div className='md:w-1/2 flex flex-col gap-10 lg:px-10 px-2'>
                {
                    Masonries1.map((item,index)=>(
                        <div key={index}>
                                           <div className='order-2 '>
                    <img src={item.img} alt={item.title}/>
                </div>
                <div className='md:order-3 order-1'>
                    <h3 className='text-primes text-2xl font-semibold my-5'>{item.title}</h3>
                    <p className='text-gray-500'>{item.description}</p>
                </div>
                        </div>
                    ))}
 
                </div>
                <div className='md:w-1/2 flex flex-col gap-10 mt-32 lg:px-10 px-2'>
                {
                    Masonries2.map((item,index)=>(
                        <div key={index}>
                                           <div className='order-2 '>
                    <img src={item.img} alt={item.title}/>
                </div>
                <div className='md:order-3'>
                    <h3 className='text-primes text-2xl font-semibold my-5'>{item.title}</h3>
                    <p className='text-gray-500'>{item.description}</p>
                </div>
                        </div>
                    ))}
 
                </div>

                <div></div>


              </div>
    </div>
  )
}

export default Masonry