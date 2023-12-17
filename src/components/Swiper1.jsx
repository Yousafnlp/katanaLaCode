import React, { useState  } from 'react';

import { Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.css'
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'; 
import NewGamesSectionOneCard from './cards/NewGamesSectionOneCard';

function Swiper1() {

  
  return (
    <>
      <div className="bg-black pt-[70px]">
        <div className="container-myc pb-[70px] m-auto ">
          <Swiper
          // navigation={true}
          
            centeredSlides={true}
            // autoplay={{
            //   delay: 2300,
            //   disableOnInteraction: false,
            // }} 

            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 4,
              },    
              600: {
                slidesPerView: 4,
              },
            }}
            
            initialSlide={2}
            spaceBetween={20}
            slidesPerView={4}
            speed={500}
            modules={[Autoplay]}
            className="mySwiper swiper-cover m-auto bg-black"
            // onSlideChange={handleSlideChange}
            style={{ paddingBottom: '20px !important' }}
          >
         
         
         
         

         <SwiperSlide className='slides'>

          <div className="slideChild">

<NewGamesSectionOneCard/>       
          </div>
            </SwiperSlide>

         

            <SwiperSlide className='slides'>

              <div className="slideChild">

<NewGamesSectionOneCard/>       
              </div>
            </SwiperSlide>

         

            <SwiperSlide className='slides'>

<div className="slideChild">

<NewGamesSectionOneCard/>       
</div>
  </SwiperSlide>



  <SwiperSlide className='slides'>

    <div className="slideChild">

<NewGamesSectionOneCard/>       
    </div>
  </SwiperSlide>



  <SwiperSlide className='slides'>

<div className="slideChild">

<NewGamesSectionOneCard/>       
</div>
  </SwiperSlide>



  <SwiperSlide className='slides'>

    <div className="slideChild">

<NewGamesSectionOneCard/>       
    </div>
  </SwiperSlide>



          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Swiper1;










