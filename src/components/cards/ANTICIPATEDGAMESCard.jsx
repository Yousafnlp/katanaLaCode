import React from 'react'

function ANTICIPATEDGAMESCard({ key, bgImage, iconOne, titleOne, titleTwo }) {
  return (
    <div className="w-full max-w-[424px] h-[346px] relative	gradient-border border-b " >
    <img className=" h-full object-cover object-center" src={bgImage} alt="" />


    <div className="flex items-center absolute top-0 justify-between w-full p-2" >

    <div className=' px-[6px] py-[2px] rounded-2xl flex justify-center items-center cursor-pointer   bg-[#0000007c] gap-2  backdrop-blur-sm'>
            <img className='w-[12px]' src={require('../../assets/freetoplay.png')} alt="" />
            <p className=' text-[12px] text-[#FFC700]  font-semibold'>Free-to-play</p>
        </div>
 
        <div className=' p-[6px] rounded-full flex justify-center items-center  hover:bg-[#FFC700]  cursor-pointer   bg-[#0000007c] gap-2  backdrop-blur-sm'>
            <img className='w-[12px]' src={require('../../assets/hearticon.png')} alt="" />
            
        </div>
        </div>


    <div className="flex items-end absolute bottom-0 justify-between w-full p-3 bg-[#000000E6]  backdrop-blur-sm" >

        <div>
            <div className=" text-white">

                   <p className="text-2xl mt-[8px]">{titleOne}</p>
                <p className="text-[14px] text-[#ffffffaf]">{titleTwo}</p>

            </div>
        </div>

        <div>
            <div className='w-7 h-7 bg-transparent	gradient-border2  rounded-2xl flex items-center justify-center		'>
                <img src={iconOne} alt="" />
            </div>
        </div>

    </div>
</div>
  )
}

export default ANTICIPATEDGAMESCard
