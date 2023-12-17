import React from 'react';
import Carousel from 'react-multi-carousel';
// import '../components/Comp.css'
import 'react-multi-carousel/lib/styles.css';

import { cardFiveData } from './cards/Data';
import NEWGAMESCard from './cards/NEWGAMESCard';



function NEWGAMES() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1280, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    return (


            







<div>

            <div className='flex justify-center items-end w-full relative  bg-black h-[150px]'>

                <div className="bg-black w-full  absolute   flex justify-center items-center flex-col">
                    <div className="w-full  flex justify-center px-3 lg:px-0 sm:px-3  md:px-4 items-center	">


                        <div className="  flex  custom-container w-full justify-between items-center flex-wrap  	">
                            <div className="  flex   w-full justify-start items-center  gap-2	">
                                <img src={require('../assets/Gamepad Minimalistic.png')} className='w-[48px]' alt="" />
                                <h3 className='text-xl md:text-2xl  lg:text-[32px] 	 font-semibold	 uppercase text-white '>New Games</h3>
                            </div>

                            <div>
                                {/* <button className='text-white  py-[10px] px-[16px] custombtn2 text-[14px] font-medium  flex justify-center items-center	'><span>View all</span> <img src={require('../assets/Alt Arrow Right.png')} alt="" /></button> */}

                            </div>

                        </div>
                    </div>

                    {/* <div className='w-full'>
<Swiper1/>
</div> */}


                </div>

            </div>


            <div className="bg-black  relative pt-3 pb-5 flex justify-center  px-3 lg:px-5 md:px-4  items-center h-[600px]">

                <div className=" w-full max-w-[1344px] absolute top-[-50px] flex justify-center items-center   ">
                    <div className="custom-container2">
                        <Carousel
                            showDots={false}
                            responsive={responsive}
                        

                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all 1"
                            transitionDuration={2000}
                            itemClass='ssss'
                            arrows={true}
                            
                            containerClass="carousel-container3"
                        // dotListClass="custom-dot-list-style2"
                        >








                            {cardFiveData.map((card, index) => (
                                <div className='flex justify-center items-center' >
                                    <NEWGAMESCard
                                        key={index}
                                        bgImage={card.bgImage}
                                        titleOne={card.titleOne}
                                        titleTwo={card.titleTwo}
                                        price={card.price}
                                    />
                                </div>
                            ))}

                        </Carousel>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default NEWGAMES;
