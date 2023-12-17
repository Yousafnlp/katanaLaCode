import React from 'react'
import { cardTwoData } from './cards/Data'
import ANTICIPATEDGAMESCard from './cards/ANTICIPATEDGAMESCard'

function ANTICIPATEDGAMES() {
  return (
    <div className='flex justify-center items-center  px-3 lg:px-5 md:px-4  w-full bg-black'>
<div className="bg-black w-full custom-container  flex justify-center items-center flex-col">
    <div className="w-full  flex justify-center items-center	">


            <div className="pt-16 w-100  flex justify-between items-center flex-wrap	">
                <div className='max-w-[424px]'>
                <h3 className='text-xl md:text-2xl  lg:text-[32px] 	 font-semibold 	 uppercase text-white  mb-2 md:mb-2 lg:mb-[18px]'>ANTICIPATED GAMES</h3>
                            <p className='text- sm md:text-sm  lg:text-sm 	 font-normal	  text-[#ffffffb3]  mb-2 md:mb-2 lg:mb-0'>The most anticipated games are already available for the first acquaintance.</p>
                 </div>

                <div>
                <button className='text-white  py-[10px] px-[16px] custombtn2 text-[12px] font-medium  flex justify-center items-center	'><span>View all</span> <img src={require('../assets/Alt Arrow Right.png')} alt="" /></button>

                </div>

            </div>
        </div>


        <div className="pb-5 pt-6 w-full flex justify-center items-center 	">

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1    gap-6">



        {cardTwoData.map((card, index) => (
                            <ANTICIPATEDGAMESCard
                                key={index}
                                bgImage={card.bgImage}
                                titleOne={card.titleOne}
                                titleTwo={card.titleTwo}
                                iconOne={card.iconOne}
                                />
                        ))}
            </div>
        </div>

    </div>
</div>

  )
}

export default ANTICIPATEDGAMES
