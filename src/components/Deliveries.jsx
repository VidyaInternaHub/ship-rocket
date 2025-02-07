import React from 'react'
import Delivery1 from '../assets/images/delivery1.png'
import Delivery2 from '../assets/images/delivery2.png'
import Delivery3 from '../assets/images/delivery3.png'
import Delivery4 from '../assets/images/delivery4.png'
import Delivery5 from '../assets/images/delivery5.png'
import Delivery6 from '../assets/images/delivery6.png'

function Deliveries() {
  const deliverys = [Delivery1,Delivery2,Delivery3,Delivery4,Delivery5,Delivery6]
  return (
    <div className='max-w-6xl mx-auto px-4 md:px-0'>
        <h2 className='text-6xl font-semibold text-primes w-full text-center my-8'>We’ve got your <span className='text-gradient1'>local deliveries covered</span></h2>
        {
          deliverys.map((delivery,index) =>(
            <div className={`flex-col md:flex-row md:px-16 md:pt-16  px-5 pt-5 bg-[#fffded] rounded-2xl my-20 gap-10 ${index===0 && "md:pb-16"} `} key={index}>
                <div className={`md:w-1/2 w-full flex flex-col gap-4   justify-center ${index%2 !==0 ? "md:order-2":""} `}>
                    <h3 className='text-4xl font-semibold text-primes'>Lowest delivery charges</h3>
                    <p className='text-gray-600 text-lg'>Rates starting at just ₹10/km with 0 demand surge fee</p>
                </div>
                <div className={`md:w-1/2 w-full ${index%2 ===0 ? "md:order-3":""}`}>
                    <img src={delivery} alt={delivery} className=' md:h-96'/>
                </div>
            </div>

          ))
        }

    </div>
  )
}

export default Deliveries