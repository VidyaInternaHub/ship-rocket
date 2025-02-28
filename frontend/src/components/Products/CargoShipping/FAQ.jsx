import React,{useState} from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


function FAQ() {
    const faqs=[
        {question:"What is Shiprocket Cargo?",answer:"A product of Shiprocket, Shiprocket Cargo offers bulk and cargo shipping services to eCommerce sellers."},
        {question:"How can I start shipping with Shiprocket Cargo?",answer:"Login on the Shiprocket panel using your phone number and choose Shiprocket Cargo from the app switcher to start shipping with us"},
        {question:"Do I have to pay for the Shiprocket panel?",answer:"No, our panel is free of cost. You will just have to pay for the shipping services that you use."},
        {question:"Can I track my shipments with Shiprocket Cargo?",answer:"Yes, you can track your shipments on our panel. You can also send shipping updates to the receiver."},
        {question:"How can I contact customer support of Shiprocket Cargo?",answer:"You can connect with our customer support team on 999-070-22-33 or via email at cargosupport@shiprocket.com."}
    ]
    const [indexOpened,setIndexOpened]=useState(null)
  return (
    <div className='max-w-6xl mx-auto px-2 my-20'>
        <div className='flex flex-col gap-10 md:flex-row md:gap-0'>
            <h2 className='text-5xl font-bold my-8 text-primes md:w-1/3'>
            Frequently asked <span className='text-gradient1 font-normal'>questions</span>
            </h2>
            <div className='md:w-2/3 md:mx-7  flex flex-col md:gap-10'>
            {
                faqs.map((faq,index)=>(
                    <div className=' border-gray-300 border-b-2 px-3 md:pb-4 cursor-pointer mt-4 md:mt-0' key={index}>
                    <p onClick={()=>setIndexOpened(index)} className={`font-semibold text-xl md:text-2xl ${indexOpened === index && "text-burgundy"}`}><span className={`font-normal inline-block mx-5 font-2xl transition-all duration-700 ${indexOpened === index ? "transform rotate-[360deg]" :""} `}>{indexOpened === index ? <FaMinus className='relative top-1' /> : <FaPlus />}</span>{faq.question}</p>
                    <p className={`text-gray-700 md:my-4 mb-4 ml-14 overflow-hidden transition-all duration-500 ease-in-out ${indexOpened !==index ? "h-0" :"h-12"}`}>{faq.answer}</p>
                    </div>
                ))
            }


            </div>
        </div>



    </div>
  )
}

export default FAQ