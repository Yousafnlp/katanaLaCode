import React from 'react'
import NFTAdventureSectionOneCard from './cards/NFTAdventureSectionOneCard'
import { cardSixData } from './cards/Data'



function NFTAdventureSectionOne() {
    return (
        <div className=' bg-black h-full w-full'>
        <div className='flex justify-center items-center w-full px-3 lg:px-5 md:px-4  '>

            <div className="bg-black w-full custom-container  flex justify-center items-center flex-col ">
                <div className="w-full  flex justify-center items-center	">


                    <div className="pt-16  flex   w-full justify-between items-center flex-wrap	">
                        <div>
                            <h3 className='text-xl md:text-2xl  lg:text-[32px] 	 font-semibold	 uppercase text-white  mb-2 md:mb-2 lg:mb-3'>NFT Adventure</h3>
                        </div>

                        <div>
                        <button className='text-white   pr-[8px] pl-[16px] custombtn2 text-sm 	h-[40px] gap-2 rounded-3xl font-normal flex justify-center items-center	'><span>Show More</span>
                        <div className='bg-white p-1 rounded-full'>
                        <img className='w-[20px]' src={require('../assets/arrow-up-right-small.png')} alt="" />    
                        </div>
                        </button>

                        </div>

                    </div>
                </div>




                    <div className="pb-5 pt-8 w-full flex justify-center items-center 	">

                        <div className="grid   lg:grid-cols-4   md:grid-cols-2 sm:grid-cols-2 grid-cols-1  gap-6">
       

       
                        {cardSixData.map((card, index) => (
                            <NFTAdventureSectionOneCard
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
            </div>
    
    )
}

export default NFTAdventureSectionOne