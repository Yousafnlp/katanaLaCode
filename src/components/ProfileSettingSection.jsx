import React from 'react'

function ProfileSettingSection() {
  return (
    <div className=' backdrop-blur-md  bg-[#C1BAFF1A] p-4 w-full'>

              <h3 className='text-2xl  sm:text-3xl  md:text-3xl  lg:text-[32px] 	 font-semibold text-start	 uppercase text-white   mb-3'>PROFILE SETTINGS</h3>
              <p className=' text-[#ffffffb3] '>Manage your personal Elixir account</p>

              <label className='text-base text-white pt-2 block'>Email</label>
              <input className='mt-2 px-[24px] bg-[#B9B8E10F] text-white py-[14px] w-full ' type="" />



              <label className='text-base text-white pt-2 block mt-3'>Gamertag</label>
              <p className=' text-[#ffffffb3] '>It can not be changed</p>

              <input className='mt-2 px-[24px] text-white bg-[#B9B8E10F] py-[14px] w-full ' type="" />



              <label className='text-base text-white pt-2 block mt-3'>Username</label>
              <input className='mt-2 px-[24px] bg-[#B9B8E10F] py-[14px] w-full text-white' type="" />
            </div>
  )
}

export default ProfileSettingSection
