import React from 'react';
import Carousel from 'react-multi-carousel';
import '../components/Comp.css'
import 'react-multi-carousel/lib/styles.css';

function HomeSlider() {

    const homeSlider = [
        {
            image: require("../../src/assets/Frame 2147224024.png"),
            title: 'CAVEWORLD & ELIXIR - PARTNERSHIP ANNOUNCEMENT',
            tagLine: 'There are many variations of passages of Lorem Ipsum available.'
        }
    ]
    
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <div className="bg-black ">

                <div className=" flex justify-center items-center	">
                    <div className="custom-container2">
                        <Carousel
                            showDots={true}
                            responsive={responsive}

                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={2000}
                            arrows={false}
                            containerClass="carousel-container"
                            dotListClass="custom-dot-list-style"
                        >

{homeSlider.map((homeSlider, index) => (
                         <div>
                         <div className=" w-full  max-w-[1920px]  relative">
                             <img className='  object-cover  max-h-[537px] min-h-[380px] w-[100vw] object-center' src={homeSlider.image} alt="" />
                         </div>
                         <div className='absolute w-full h-full justify-center cover-bg d-flex items-center z-10 top-2/4 translate-y-[-50%]'>
                             <div className="custom-container">
                                 <div className="max-w-[749px] flex  px-3 pt-[40px] sm:pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[65px] sm:pb-[65px] md:pb-[85px] lg:pb-[90px] lg:px-0 md:px-4  justify-start flex-col items-start">
                                     <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold uppercase text-white mb-3 md:mb-4 lg:mb-5'>{homeSlider.title}</h2>
                                     <p className='text-base sm:text-base lg:text-lg md:text-lg font-normal text-[#ffffffaf] uppercase mb-3 md:mb-7 lg:mb-10'>{homeSlider.tagLine}</p>
                                     <button className='text-white w-[150px] sm:w-[165px] md:w-[210px] lg:w-[210px] h-[46px] lg:h-[64px]  md:h-[64px] mt-[20px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] custombtn font-semibold  text-sm'>READ MORE</button>
                                 </div>
                             </div>
                         </div>

                     </div>        
                           
                        ))}
                            
                      

                  
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSlider;
