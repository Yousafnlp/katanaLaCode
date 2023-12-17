import React from 'react'
import { walletCardData } from '../cards/Data'
import ProfilePictureSection from '../ProfilePictureSection'
import ProfileSettingSection from '../ProfileSettingSection'

function Wallet() {


  return (

<div className='flex justify-center items-center'>
    <div className='flex justify-center bg-myimgw px-3 lg:px-10 md:px-4  items-center w-full'>

      <div className=" w-full custom-container   flex justify-center items-center flex-col">
        <div className="w-full pt-20 pb-10 flex justify-center items-center	flex-col">

          <div className="max-w-[672px]">
            <h3 className='text-2xl mb-2 sm:text-3xl text-center md:text-4xl  lg:text-[48px] 	 font-semibold	 uppercase text-white   lg:mb-0'>MANAGE WALLETS</h3>
            <p className='text- base sm:text-base md:text-lg  lg:text-lg 	 font-normal	text-center  text-[#ffffffb3]  mb-2 md:mb-2 lg:mb-0'>Connect any occepted wallet and verify your address so you can use them within Elixir Launcher</p>

          </div>

          <div className='pt-3 flex flex-wrap justify-center items-center   gap-3'>



            {walletCardData.map((card, index) => (
              <div key={index}>
                <div
                  className={`w-[200px] h-[191px] flex relative justify-center items-center ${card.bgTop} backdrop-blur-sm`}
                >
                  <img src={card.image} alt="" />
                  {card.comingSoon ? (
                    <div className={`w-[129px] h-[31px] absolute top-[15px] cs-radius left-[90px] left[100px] ${card.bgBottom} m-0 text-[12px] text-center text-white rotate-[39deg] flex justify-center items-center `}>
                      <span>COMING SOON</span>
                    </div>
                  ) : null}
                </div>
                <div className={`${card.bgBottom} w-[200px] h-[43px] text-white text-center flex justify-center items-center`}>
                  <p>{card.title}</p>
                </div>
              </div>
            ))}



          </div>


          <p className=' text-[#ffffffb3]  mt-3'>You do not have any address saved yet</p>

          <div className='mt-[4rem] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full   gap-6'>
         
<ProfileSettingSection/>

<ProfilePictureSection/>
          </div>



        </div>
      </div></div>
    </div>
  )
}

export default Wallet
