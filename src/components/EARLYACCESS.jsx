
import React from 'react'

import { cardTwoData } from './cards/Data'
import EARLYACCESSCard from './cards/EARLYACCESSCard'

function EARLYACCESS() {
    return (
        <div className='flex justify-center items-center w-full bg-black   px-3 lg:px-5 md:px-4'>

<div className="bg-black w-full custom-container  flex justify-center items-center flex-col">
    <div className="w-full  flex justify-center items-center	">


            <div className="pt-16 w-100  flex justify-between items-center flex-wrap	">
                <div>
                <h3 className='text-xl md:text-2xl  lg:text-[32px] 	 font-semibold uppercase text-white  mb-2 md:mb-2 lg:mb-[18px]'>EARLY ACCESS</h3>
                            <p className='text- sm md:text-sm  lg:text-sm 	 font-normal  text-[#ffffffb3]  mb-2 md:mb-2 lg:mb-0'>Be among the first to play the game before its release.</p>
                 </div>

                <div>
                <button className='text-white  py-[10px] px-[16px] custombtn2 text-[14px] font-medium  flex justify-center items-center	'><span>View all</span> <img src={require('../assets/Alt Arrow Right.png')} alt="" /></button>

                </div>

            </div>
        </div>


        <div className="pb-5 pt-6 w-full flex justify-center items-center 	">

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1    gap-6">



        {cardTwoData.map((card, index) => (
                            <EARLYACCESSCard
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

export default EARLYACCESS
