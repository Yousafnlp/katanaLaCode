import React from 'react';

function EventImageSection({ imageUrl, title, date, location }) {
  
  return (
    <div className='w-full relative'>
      <img src={imageUrl} className='w-full lg:h-[716px] sm:h-[500px] min-h-[500px] max-h-[716px] h-[60vh] object-cover object-center relative ' alt="" />

      <div className='w-full lg:h-[716px] sm:h-[500px] top-0 min-h-[500px] max-h-[716px] h-[60vh] absolute e-img'>
        <div className='text-center absolute bottom-0 w-100 pb-20'>
          <h2 className='text-white lg:text-[56px] md:text-[40px] sm:text-[32px] text-[32px] font-extrabold mb-[22px]'>{title}</h2>
          <h4 className='lg:text-[28px] md:text-[28px] sm:text-[21px] text-[21px] mb-[32px] text-[#FFFFFFB2]'>{date}</h4>
          <h5 className='lg:text-[52px] md:text-[37px] sm:text-[30px] text-[30px] text-white font-extrabold'>{location}</h5>
        </div>
      </div>
    </div>
  );
}

export default EventImageSection;
