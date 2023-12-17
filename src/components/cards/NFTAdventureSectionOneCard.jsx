import React from 'react'

function NFTAdventureSectionOneCard({bgImage, titleOne, titleTwo}) {
  return (
   
    <div className="w-full  max-w-[312px] h-[400px] relative" >
    <img className=" h-full w-full object-cover object-left" src={bgImage} alt="" />



    <div className="flex items-center absolute bottom-0 justify-center w-full bg-[#000000E6] backdrop-blur-sm	">
        <div className="p-3 w-full text-center text-white">


                <p className="text-2xl">{titleOne}</p>

            <p className="text-base mt-[1.2px]  text-[#ffffffaf]">{titleTwo}</p>


                <p className="text-[18px] mt-2 ">Free</p>
         
           
        </div>
    </div>
</div>

  )
}

export default NFTAdventureSectionOneCard
