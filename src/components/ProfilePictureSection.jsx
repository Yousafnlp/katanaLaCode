import React, { useState } from 'react'

function ProfilePictureSection() {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  
const starsArray = [
  { id: 1, src: require('../assets/Star 3.png'), className: 'w-[60px]', alt: 'Star 1' },
  { id: 2, src: require('../assets/Star 3.png'), className: 'w-[60px]', alt: 'Star 2' },
  { id: 3, src: require('../assets/Star 3.png'), className: 'w-[60px]', alt: 'Star 3' },
  { id: 4, src: require('../assets/Star 3.png'), className: 'w-[60px]', alt: 'Star 4' },
  { id: 5, src: require('../assets/Star 3.png'), className: 'w-[60px]', alt: 'Star 5' },
  { id: 6, src: require('../assets/Star 3.png'), className: 'w-[60px]', alt: 'Star 6' },
];



  return (


    <div className=' backdrop-blur-md  bg-[#C1BAFF1A] p-4 w-full'>

      <h3 className='text-2xl  sm:text-3xl  md:text-3xl  lg:text-[32px] 	 font-semibold text-start	 uppercase text-white   mb-3'>PROFILE SETTINGS</h3>
      <p className=' text-[#ffffffb3] '>Set your profile picture here</p>

      <div className='mt-3 mb-8  border-1 border-dashed w-full px-[20px] py-[18px] flex  justify-start items-center border-[#ffffffb3] gap-4'>
        <div className=' relative'>


          {selectedImage ? (
            <div>
              <img src={selectedImage} alt="Selected" className="w-[55px] h-[55px] rounded-full " />
            </div>
          ) : (<>
            <img src={require('../assets/Group 1000003303.png')} className='w-[55px]  ' alt="" />
            <img src={require('../assets/User Rounded.png')} className='w-[39px] absolute left-[8px] top-[50%] translate-y-[-50%]' alt="" />
          </>)}


        </div>
        <div>

          <div className='flex gap-2 items-center'>
            <p className='text-white text-base'>Drop your photo here or </p>
            <div>

              <div>
                <label htmlFor="file_input" className="text-base text-[#453C92] font-bold cursor-pointer focus:outline-none">
                  Select File
                </label>
                <input
                  id="file_input"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />

              </div>

            </div>
          </div>
          <p className='text-[#ffffffb3] text-sm'>Supportie WEDR, JPO, ING.</p>
        </div>
      </div>



      <div className='mt-3  border-1  border-[#ffffffb3] w-full relative px-[20px] py-[20px]'>
        <div className='absolute top-[-20px] mr-5 w-[-webkit-fill-available] flex justify-center'> 
        <button className='bg-[#453B93]  px-[24px] py-[12px] m-auto text-white'>COMING SOON</button>
        </div>
        <p className='text-white font-semibold text-base  mb-2'>NFTS</p>
        <p className='text-[#ffffffb3] text-sm'>You can also use one of your NFT as profile picture</p>


        <div className="flex justify-start flex-wrap items-center mt-4 gap-3">
 
          {starsArray.map((star) => (
          <img src={star.src} className='w-[60px] ' alt="" />
            
    ))}

        </div>

      </div>

    </div>
  )
}

export default ProfilePictureSection
