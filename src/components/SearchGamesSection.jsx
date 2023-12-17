import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css'
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

function SearchGamesSection() {
    
    
    
      const pagination = {
            clickable: true,
            renderBullet: function (index, className) {
                    return '<div class=" ' + className + '">' + (index + 1) + '</div>';
                  },
              };
            
              return (
                    <>
                
                <div className=' bg-black  w-full'>
                        <div className='flex justify-center items-center w-full px-3 lg:px-5 md:px-4  '>
                
                            <div className="bg-black w-full max-w-[1344px]  flex justify-center items-center flex-col ">
                                <div className="w-full  pb-22 flex justify-center items-center	">
                
                      <Swiper
        
                          navigation={true}
                            pagination={pagination}
                            breakpoints={{
                                    500: {
                                          slidesPerView: 1,
                                        },
                                        770: {
                                              slidesPerView: 2,
                                            },
                                            1300: {
                                                    slidesPerView: 4,
                                                }
                                              }}
                                    
                                            modules={[Navigation, Pagination]}
                                            className="mySwiper myh"
                                          >
                                    
                                    
                                            <SwiperSlide> <img src={require('../assets/SwiperImgPg.png')} alt="" /></SwiperSlide>
                                            <SwiperSlide> <img src={require('../assets/SwiperImgPg.png')} alt="" /></SwiperSlide>
                                            <SwiperSlide> <img src={require('../assets/SwiperImgPg.png')} alt="" /></SwiperSlide>
                                            <SwiperSlide> <img src={require('../assets/SwiperImgPg.png')} alt="" /></SwiperSlide>
                                            <SwiperSlide> <img src={require('../assets/SwiperImgPg.png')} alt="" /></SwiperSlide>
                                            <SwiperSlide> <img src={require('../assets/SwiperImgPg.png')} alt="" /></SwiperSlide>
                                            <SwiperSlide> <img src={require('../assets/SwiperImgPg.png')} alt="" /></SwiperSlide>
                                            <SwiperSlide> <img src={require('../assets/SwiperImgPg.png')} alt="" /></SwiperSlide>
                                            <SwiperSlide> <img src={require('../assets/SwiperImgPg.png')} alt="" /></SwiperSlide>
                                            <SwiperSlide> <img src={require('../assets/SwiperImgPg.png')} alt="" /></SwiperSlide>
                                            <SwiperSlide> <img src={require('../assets/SwiperImgPg.png')} alt="" /></SwiperSlide>
                                            <SwiperSlide> <img src={require('../assets/SwiperImgPg.png')} alt="" /></SwiperSlide>
                                            {/* <SwiperSlide>Slide 2</SwiperSlide> */}
                                            <div className='txt-Next'>Next</div>
                                            <div className='txt-Previous'>Previous</div>
                                          </Swiper>
                                    
                                    
                                          </div>
                                          </div>
                                          </div>
                                    </div>
                                              </>
                                      );
                                    }
                                    
                                    
                                    export default SearchGamesSection
                                    
                                    
                                    
                                    
                                    
                                    