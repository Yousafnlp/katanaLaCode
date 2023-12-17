import React from 'react'

import { cardOneData } from './cards/Data'
import LIVEEVENTSCard from './cards/LIVEEVENTSCard'


function LIVEEVENTS() {
    return (
        <div className='flex justify-center items-center w-full  px-4 lg:px-5 md:px-4 bg-black'>

            <div className="bg-black w-full custom-container   flex justify-center items-center flex-col">
                <div className="w-full  flex justify-center items-center 	">


                    <div className="pt-16  flex   w-full justify-between items-center flex-wrap	">
                        <div className='max-w-[424px]'>
                            <h3 className='text-xl md:text-2xl  lg:text-[32px] 	 font-semibold	 uppercase text-white  mb-2 md:mb-2 lg:mb-[18px]'>live events</h3>
                            <p className='text- sm md:text-sm  lg:text-sm 	 font-normal	  text-[#ffffffb3]  mb-2 md:mb-2 lg:mb-0'>Apply to Raffles with your <span className='text-[#a149e6] font-bold'>GamerScore</span> and boost it through completing skill-based Challenges. </p>
                        </div>

                        <div>
                            <button className='text-white  py-[10px] px-[16px] custombtn2 text-[14px] font-medium  flex justify-center items-center	'><span>View all</span> <img src={require('../assets/Alt Arrow Right.png')} alt="" /></button>

                        </div>

                    </div>
                </div>




                <div className="pb-5 pt-6 w-full flex justify-center items-center 	">

                    <div className="grid   lg:grid-cols-4   md:grid-cols-2 sm:grid-cols-1 grid-cols-1  gap-6">



                        {cardOneData.map((card, index) => (
                            <LIVEEVENTSCard
                                key={index}
                                bgImage={card.bgImage}
                                iconOne={card.iconOne}
                                titleOne={card.titleOne}
                                titleTwo={card.titleTwo}
                                iconThree={card.iconThree}
                                titleThree={card.titleThree}
                                dateIcon={card.dateIcon}
                                date={card.date}
                            />
                        ))}

                    </div>
                </div>
            </div>

        </div>

    )
}

export default LIVEEVENTS