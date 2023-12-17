import React from 'react'
import HomeSectionEightCard from './cards/LIFTYBLOGCard'
import { cardThreeData } from './cards/Data'
import LIFTYBLOGCard from './cards/LIFTYBLOGCard'

function LIFTYBLOG() {
  return (
         
    <div className='flex justify-center   px-3 lg:px-5 md:px-4  items-center w-full bg-black'>

<div className="bg-black w-full custom-container flex justify-center items-center flex-col">
    <div className="w-full  flex justify-center items-center	">


            <div className="pt-16 w-100  flex justify-between items-center flex-wrap	">
                <div>
                <h3 className='text-xl md:text-2xl  lg:text-[32px] 	 font-semibold 	 uppercase text-white  mb-0'>LIFTY BLOG</h3>
                 </div>

                <div>
                
                <button className='text-white  py-[10px] px-[16px] custombtn2 text-[12px] font-medium  flex justify-center items-center	'><span>View all</span> <img src={require('../assets/Alt Arrow Right.png')} alt="" /></button>

                </div>

            </div>
        </div>


        <div className="pb-5 pt-6 w-full flex justify-center items-center 	">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1    gap-6">



        {cardThreeData.map((card, index) => (
                            <LIFTYBLOGCard
                                key={index}
                                bgImage={card.bgImage}
                                titleOne={card.titleOne}
                                titleTwo={card.titleTwo}
                                />
                        ))}

            </div>
        </div>

    </div>
</div>


  )
}

export default LIFTYBLOG
