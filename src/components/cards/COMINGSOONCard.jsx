import React from 'react'
import { Link } from 'react-router-dom'

function COMINGSOONCard({bgImage, titleOne, titleTwo, price}) {
  return (

   
    <div className="w-full  max-w-[312px] h-[400px] relative 	gradient-border " >
    <img className=" h-full w-full object-cover object-left" src={bgImage} alt="" />



    <div className="flex items-center absolute bottom-0 justify-center pb-2 w-full bg-[#000000E6] backdrop-blur-sm	">
        <div className="p-3 w-full text-center text-white">


                <p className="text-2xl">{titleOne}</p>

            <p className="text-base mt-[1.2px] mb-3 text-[#ffffffaf]">{titleTwo}</p>


                <Link className="text-[18px] mt-2 px-[24px]  py-[6px] bg-[#FC9900] ">{price}</Link>
         
           
        </div>
    </div>
    </div>


  )
}

export default COMINGSOONCard
