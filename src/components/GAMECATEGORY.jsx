import React from 'react'
import { cardTwoData } from './cards/Data'
import GAMECATEGORYCard from './cards/GAMECATEGORYCard'
import { useState } from 'react';


function GAMECATEGORY() {
    
    const [isActiveMobile, setIsActiveMobile] = useState(false);
    const [isActiveDesktop, setIsActiveDesktop] = useState(true);

    const ActiveDesktop=()=>{
        setIsActiveDesktop(true)
        setIsActiveMobile(false)
    }

    const ActiveMobile=()=>{
        setIsActiveDesktop(false)
        setIsActiveMobile(true)
    }

    return (
        <div className='flex justify-center items-center w-full  px-3 lg:px-5 md:px-4 bg-black'>
            <div className="bg-black w-full custom-container   flex justify-center items-center flex-col">
                <div className="w-full  flex justify-center items-center	">


                    <div className="pt-16  flex   w-full justify-between items-center flex-wrap gap-4	">
                        <div className='bg-[#151515]   rounded-full flex gap-1'>
                            <button
                            onClick={ActiveDesktop}
                            className={isActiveDesktop ?
                                ' lg:px-7 md:px-5 sm:px-3 px-3  lg:py-3 sm:py-1 md:py-1 py-1  lg:text-[32px]  md:text-[22px] sm:text-[18px] text-[13px] rounded-full	 font-semibold	homebtn2 uppercase text-white  bg-[#151515] ' 
                                : ' lg:px-7 md:px-5 sm:px-3 px-3  lg:py-3 sm:py-1 md:py-1 py-1  lg:text-[32px]   md:text-[22px] sm:text-[18px] text-[13px] rounded-full	 font-semibold	 uppercase text-white  bg-[#151515] '} 
                            >
                                DESKTOP GAMES
                            </button>

                            <button
                             onClick={ActiveMobile}
                             className={isActiveMobile ?
                                 ' lg:px-7 md:px-5 sm:px-3 px-3  lg:py-3 sm:py-1 md:py-1 py-1  lg:text-[32px]  md:text-[22px] sm:text-[18px] text-[13px] rounded-full	 font-semibold	homebtn2 uppercase text-white  bg-[#151515] ' 
                                 : ' lg:px-7 md:px-5 sm:px-3 px-3  lg:py-3 sm:py-1 md:py-1 py-1  lg:text-[32px]   md:text-[22px] sm:text-[18px] text-[13px] rounded-full	 font-semibold	 uppercase text-white  bg-[#151515] '} 
                 
                             >
                                MOBILE GAMES
                            </button>

                        </div>

                        <div>

                            <button className='text-white  py-[10px] px-[16px] custombtn2 text-[12px] font-medium  flex justify-center items-center	'><span>View all</span> <img src={require('../assets/Alt Arrow Right.png')} alt="" /></button>

                        </div>

                    </div>
                </div>



                <div className="pb-5 pt-6 w-full flex justify-center items-center 	">

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1    gap-6">





                        {cardTwoData.map((card, index) => (
                            <GAMECATEGORYCard
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

export default GAMECATEGORY
