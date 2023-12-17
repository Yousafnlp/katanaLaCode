import React from 'react'
import SearchSlider from '../SearchSlider'
import SearchGamesSection from '../SearchGamesSection'

function Game() {
  return (
    <>
    
      <SearchSlider/>

      <div className='flex justify-center   px-3 lg:px-5 md:px-4  items-center w-full bg-black'>

<div className="bg-black w-full custom-container flex justify-center items-center flex-col">
    <div className="w-full  flex justify-center items-center	">


            <div className="pt-16 w-100  flex justify-between items-center flex-wrap	">
                <div>
                <h3 className='text-xl md:text-2xl  lg:text-[32px] 	 font-semibold 	 uppercase text-white  mb-0'>LIFTY BLOG</h3>
                 </div>

                <div>
              
                <div className='text-[16px] w-[309px] h-[48px]  pl-4 flex items-center gap-2 navicon '>
                            <img src={require('../../assets/Minimalistic Magnifer.png')} alt="" /><input className=' outline-none bg-transparent border-0 text-white   w-[130px]' placeholder='Search Games' type="text" />
                        </div>
                </div>

            </div>
            </div>
            </div>
        </div>

      <SearchGamesSection/>
    </>
  )
}

export default Game
