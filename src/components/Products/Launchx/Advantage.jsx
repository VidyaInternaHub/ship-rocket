import React from 'react'
import Advantages from '../../../assets/images/Launchx/Advantage.png'
import { TiTick } from "react-icons/ti";

function Advantage() {
    const items=[{title:"Swift",points:["Promt quotation","Pickup within 24 hours","Digitised workflow"]},
{title:"Transparent",points:["Compolete Shipment Visibility","Crystal-clear invoicing","Easy documentation","No hidden charges"]},
{title:"Dependable",points:["No weight restriction","Extensive courier network","Unrivaled distribute management"]}]
  return (
    <div className='max-w-6xl mx-auto my-10'>
        <div className='flex flex-col md:flex-row w-full justify-between '>
            <div className='flex flex-col gap-6'>
            <h2 className=' text-6xl font-semibold text-primes'>
               <span className='text-gradient2 font-normal'>Unlock the better,</span> bulkier advantage
              </h2>
              <p className='text-lg text-gray-500'>Get your bulk shipments moving with efficient and reliable global logistics operations</p>
            </div>
            
            <button className='bg-burgundy text-white py-3 px-4 md:w-44 rounded-lg text-center w-fit mt-3 md:mt-0 h-fit'>Contact Us</button>

        </div>
        <div className='flex flex-col md:flex-row w-full justify-between my-8'>
            <div className='lg:w-1/2 w-full'>
            <div className='lg:w-2/3 p-4 border border-gray-200 rounded-lg'>

        
            {
                items.map((item,index)=>(
                    <div key={index} className='  border-b border-b-gray-200'>
                    <h3 className='text-primes  text-lg font-semibold mb-2'>
                        {item.title}
    
                    </h3>
                    <ul className='flex flex-col gap-3'>
                        {
                            item.points.map((point,index)=>(
                                <li key={index} className='text-gray-600'><TiTick className='inline-block mr-2' />{point}</li>
                            ))
                        }
                    </ul>
                </div>
                ))
            }
                </div>
            
            </div>
            <div className='lg:w-1/2 mt-4'>
            <img src={Advantages} alt="Globe"  />

            </div>
        </div>

    </div>
  )
}

export default Advantage