import React from 'react'

function LIFTYBLOGCard({bgImage, titleOne, titleTwo}) {
  return (
    
    <div className="w-full max-w-[424px] h-[364px] relative	 gradient-border" >
        <img className=" h-full object-cover object-left" src={bgImage} alt="" />


      


        <div className="flex items-end absolute bottom-0 justify-between w-full p-3 bg-[#000000E6]  backdrop-blur-sm" >

            <div>
                <div className=" text-white">

                    <p className="text-xl mt-[8px]">{titleOne}</p>
                    <p className="text-[12px] text-[#ffffffaf]">{titleTwo}</p>

                </div>
            </div>

          
        </div>
    </div>

  )
}

export default LIFTYBLOGCard
