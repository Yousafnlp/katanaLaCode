import React from 'react'
import HomeSectionTwoCard from './cards/NEWGAMESTOPLAYCard'
import { cardTwoData } from './cards/Data'
import NEWGAMESTOPLAYCard from './cards/NEWGAMESTOPLAYCard'

function NEWGAMESTOPLAY() {
    return (    <div className='flex justify-center items-center   px-3 lg:px-5 md:px-4   w-full bg-black'>

            <div className="bg-black w-full custom-container flex justify-center items-center flex-col">
                <div className="w-full  flex justify-center items-center	">


                        <div className="pt-16 w-100  flex justify-between items-center flex-wrap	">
                            <div>
                                <h3 className='text-xl md:text-2xl  lg:text-[32px] 	 font-semibold	 uppercase text-white  mb-0'>NEW GAMES TO PLAY</h3>
                            </div>

                            <div>
                            <button className='text-white  py-[10px] px-[16px] custombtn2 text-[14px] font-medium  flex justify-center items-center	'><span>View all</span> <img src={require('../assets/Alt Arrow Right.png')} alt="" /></button>

                            </div>

                        </div>
                    </div>


                    <div className="pb-5 pt-6 w-full flex justify-center items-center 	">

                            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1    gap-6">



                            {cardTwoData.map((card, index) => (
                            <NEWGAMESTOPLAYCard
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

export default NEWGAMESTOPLAY
