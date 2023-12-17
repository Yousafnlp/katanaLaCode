import React from 'react'

function RECENTLYSOLDNFTSCard({
    bgImage,
    titleOne,
    iconOne,
    titleTwo,
    iconTwo,
    titleThree,
    titleFour,
    iconThree,
    titleFive,
    titleSix,
  })  {
  return (
  
    <div className="w-full  max-w-[424px] h-[400px] relative	gradient-border " >
    <img className=" h-full w-full object-cover object-left" src={bgImage} alt="" />



    <div className="flex items-center absolute top-0 justify-center w-full p-3" >

    <div className=' px-[10px] py-1 rounded-2xl flex justify-center items-center   bg-[#0000007c] gap-2 '>
            <img src={iconOne} alt="" />
            <p className=' text-[9px] text-white  font-semibold'>{titleOne}</p>
        </div>
 
        </div>


    <div className="flex items-center absolute bottom-0 justify-start w-full bg-[#000000E6] backdrop-blur-sm	">
        <div className="p-4 w-full text-white">

            <div className="flex items-center w-full justify-between gap-2">
                <p className="text-base pe-1 	">{titleTwo}</p>
                <div className='w-5 h-5 bg-transparent	border-[#D136F6] border-1 rounded-2xl flex items-center justify-center		'>
                <img className='w-[40%]' src={iconTwo} alt="" />
            </div>
            </div>
            <p className="text-xl font-semibold	mb-4">{titleThree}</p>

<div className="flex items-center justify-between gap-2">
            <div className="flex items-center justify-start gap-1">
                <img src={iconTwo} alt="" />
                <div>
                <p className="text-[12px] font-light">{titleThree}</p>
                <p className="text-[12px] font-medium">{titleFour}</p>
                </div>
            </div>

            <div className="flex items-center justify-start gap-1">
                <img  src={iconThree} alt="" />
                <div>
                <p className="text-[12px] font-light">{titleFive}</p>
                <p className="text-[12px] font-medium">{titleSix}</p>
                </div>
            </div>
          
        </div>
        </div>
    </div>
</div>
  )
}

export default RECENTLYSOLDNFTSCard
