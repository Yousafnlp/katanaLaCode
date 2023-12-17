import React from 'react'
import HomeSectionFiveCard from './cards/RECENTLYSOLDNFTSCard'
import { carFourData } from './cards/Data'
import RECENTLYSOLDNFTSCard from './cards/RECENTLYSOLDNFTSCard'

function RECENTLYSOLDNFTS() {
  return (
    <div className='flex justify-center items-center w-full px-3 lg:px-5 md:px-4  bg-black'>

    <div className="bg-black w-full custom-container   flex justify-center items-center flex-col">
        <div className="w-full  flex justify-center items-center	">


            <div className="pt-16  flex   w-full justify-between items-center flex-wrap	">
                <div>
                    <h3 className='text-xl md:text-2xl  lg:text-[32px] 	 font-semibold	 uppercase text-white   lg:mb-0'>RECENTLY SOLD NFTS</h3>
                 </div>

                <div>
                <button className='text-white  py-[10px] px-[16px] custombtn2 text-[12px] font-medium  flex justify-center items-center	'><span>View all</span> <img src={require('../assets/Alt Arrow Right.png')} alt="" /></button>

                </div>

            </div>
        </div>




            <div className="pb-5 pt-6 w-full flex justify-center items-center 	">

            <div className="grid   lg:grid-cols-4   md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">


            {carFourData.map((card, index) => (
                            <RECENTLYSOLDNFTSCard
                            key={index}
                            bgImage={card.bgImage}
                            titleOne={card.titleOne}
                            iconOne={card.iconOne}
                            titleTwo={card.titleTwo}
                            iconTwo={card.iconTwo}
                            titleThree={card.titleThree}
                            titleFour={card.titleFour}
                            iconThree={card.iconThree}
                            titleFive={card.titleFive}
                            titleSix={card.titleSix}
                                />
                        ))}

               
                </div>
            </div>
        </div>

    </div>

  )
}

export default RECENTLYSOLDNFTS
