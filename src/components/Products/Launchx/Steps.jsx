import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Step1 from '../../../assets/images/Launchx/Step1.png'
import Step2 from '../../../assets/images/Launchx/Step2.png'
import Step3 from '../../../assets/images/Launchx/Step3.png'
import Step4 from '../../../assets/images/Launchx/Step4.png'
import Step5 from '../../../assets/images/Launchx/Step5.png'
import Step6 from '../../../assets/images/Launchx/Step6.png'

function Steps() {
  const [scrollAmount, setScrollAmount] = useState(0);
  const containerRef = useRef(null);
   const [cardWidth, setCardWidth] = useState(0); 
     useEffect(() => {
       if (containerRef.current) {
         const cardElement = containerRef.current.children[0]; 
         setCardWidth(cardElement.offsetWidth); 
         
       }
   
     }, []);
     const steps=[{img:Step1,title:"Demand Discovery",description:"Simplify market, category, and product discovery with our tools that provide data-driven insights and access to global trends, helping sellers find the right audience and niches."},
        {img:Step2,title:"Detailed Strategy",description:"Empower your business with data involving price analysis, competition benchmarking, and sales price optimisation, helping you stay competitive in international markets."},
        {img:Step3,title:"Launch Planning",description:"Make a strong first impression and create lasting connections with global customers with compelling brand story, a professional storefront, and manage feedback/reviews."},
        {img:Step4,title:"Market Listing",description:"Showcase your Indian products on well-established global marketplaces with effortless catalogue management services and top-notch listing content."},
        {img:Step5,title:"Marketing",description:"Determine an optimal marketing budget by analysing marketplace-specific trends and craft tailored marketing strategies ensuring effective promotion and maximised ROI."},
        {img:Step6,title:"Reconciliation and performance evaluation",description:"We’ll provide regular monthly reconciliations of your invoices and payouts and set up a convenient performance evaluation schedule, allowing you to monitor your sales and growth easily."}
     ]





  const handlePrev = () => {
    if (scrollAmount > 0) {
      setScrollAmount((prev) => prev - cardWidth); 
    }
  };

  const handleNext = () => {
    const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    if (scrollAmount < maxScroll) {
      setScrollAmount((prev) => prev + cardWidth); 
    }
  };

  useEffect(() => {
 
    containerRef.current.scrollLeft = scrollAmount;
  }, [scrollAmount]);

  return (
    <div className='bg-primes mb-10 py-20 overflow-hidden'>
    <div className="max-w-6xl mx-auto px-2 md:px-0 ">
                <div className="flex  w-full  " >
          <h2 className="text-5xl font-semibold text-white mb-6 whitespace-nowrap">
            How it <span className="text-gradient2 font-normal">works</span>
          </h2>
          <div className="hidden md:flex gap-4 w-full justify-end items-center relative ">
            <p
              className="h-10 w-10 rounded-full bg-white  flex items-center justify-center cursor-pointer drop-shadow-xl  border-[0.8px] border-[#0b07570d]"
              onClick={handlePrev}
            >
              <FaChevronLeft />
            </p>
            <p
              className="h-10 w-10 rounded-full bg-white  flex items-center justify-center cursor-pointer drop-shadow-xl border-[0.8px] border-[#0b07570d]"
              onClick={handleNext}
            >
             <FaChevronRight />
            </p>
          </div>
                 </div>
                 <div className='flex my-10 gap-5 overflow-auto scroll-smooth hide-scrollbar' ref={containerRef}>
                 {
                    steps.map((step,index)=>(
                        <div className='w-full  md:w-1/3 flex flex-col gap-4 shrink-0' key={index}>
                        <img src={step.img} alt={step.title} className='w-16 h-16'/>
                        <p className='text-[#abffc7] flex gap-2 whitespace-nowrap items-center'>Step {index+1} <span className='border-b border-b-white border-dashed w-full'></span> </p>
                        <h3 className='text-white'>{step.title}</h3>
                        <p className='text-white'>{step.description}</p>
                    </div>
                    ))
                 }


                 </div>

    </div>
    </div>
  );
}

export default Steps;