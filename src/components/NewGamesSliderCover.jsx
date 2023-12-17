import React from 'react';
import Carousel from 'react-multi-carousel';
import '../components/Comp.css'
import 'react-multi-carousel/lib/styles.css';

function NewGamesSliderCover() {
    const GamesSlider = [
        {
            image: require("../../src/assets/cover2.png"),
            title: 'ELIXIR MOBILE APP',
            tagLine: 'We are launching our App. Enjoy the potential of earring bitcoin rewards & Nishat your fingertips Sign up lot he private beta root'
        },
        // {
        //     image: require("../../src/assets/cover2.png"),
        //     title: 'ELIXIR MOBILE APP',
        //     tagLine: 'We are launching our App. Enjoy the potential of earring bitcoin rewards & Nishat your fingertips Sign up lot he private beta root'
        // },
        // {
        //     image: require("../../src/assets/cover2.png"),
        //     title: 'ELIXIR MOBILE APP',
        //     tagLine: 'We are launching our App. Enjoy the potential of earring bitcoin rewards & Nishat your fingertips Sign up lot he private beta root'
        // },
        // {
        //     image: require("../../src/assets/cover2.png"),
        //     title: 'ELIXIR MOBILE APP',
        //     tagLine: 'We are launching our App. Enjoy the potential of earring bitcoin rewards & Nishat your fingertips Sign up lot he private beta root'
        // }
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
                            autoPlay={false}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={2000}
                            arrows={false}
                            containerClass="carousel-container "
                            dotListClass="custom-dot-list-style2  lg:px-5 md:px-4 px-3"
                        >
                            
                            {GamesSlider.map((GamesSlider, index) => (
                            <div>
                                <div className=" w-full  max-w-[1920px]  relative">
                                    <img className='  object-cover  max-h-[522px] min-h-[370px] w-[100vw] object-top' src={GamesSlider.image} alt="" />
                                </div>
                                <div className='absolute w-full h-full justify-center cover-bg2 d-flex items-center z-10 top-2/4 translate-y-[-50%]'>
                                    <div className="custom-container">
                                        <div className="max-w-[592px] flex  px-3 pt-[40px] sm:pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[65px] sm:pb-[65px] md:pb-[85px] lg:pb-[90px] lg:px-5 md:px-4  justify-start flex-col items-start">
                                            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold uppercase text-white mb-3 md:mb-4 lg:mb-5'>{GamesSlider.title}</h2>
                                            <p className='text-base sm:text-base lg:text-lg md:text-lg font-normal text-[#ffffffaf] uppercase'>{GamesSlider.tagLine}</p>
                                            <button className='text-white w-[150px] sm:w-[165px] md:w-[210px] lg:w-[210px] h-[46px] lg:h-[64px]  md:h-[64px] mt-[20px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] custombtn font-semibold  text-sm'>READ MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

))}
                          
                            {/* <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewGamesSliderCover;
