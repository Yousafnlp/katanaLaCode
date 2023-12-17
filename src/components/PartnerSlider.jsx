import React from 'react';
import Carousel from 'react-multi-carousel';
import '../components/Comp.css'
import 'react-multi-carousel/lib/styles.css';
import Play from '../assets/svg/Play';


function PartnerSlider() {

    const GamesSlider = [
        {
            image: require("../assets/partnerCover.png"),
            title: 'Partners',
            tagLine: 'Minting NFT Items'
        },
 
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
                    showDots={false}
                    
                    responsive={responsive}

                    infinite={true}
                    autoPlay={true}
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
                            <img className='  object-cover  max-h-[524px] min-h-[350px] w-[100vw] object-center' src={GamesSlider.image} alt="" />
                        </div>
                        <div className='absolute w-full h-full justify-center cover-bg3 d-flex items-center z-10 top-2/4 translate-y-[-50%]'>
                            <div className="custom-container">
                                <div className="max-w-[526px] flex  px-3 pt-[40px] sm:pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[65px] sm:pb-[65px] md:pb-[85px] lg:pb-[90px] lg:px-5 md:px-4  justify-start flex-col items-start">
                                    <h2 className='text-2xl sm:text-2xl md:text-5xl lg:text-[64px] font-bold uppercase text-white mb-3 md:mb-4 lg:mb-5'>{GamesSlider.title}</h2>
                                    <p className='text-xl sm:text-xl lg:text-[28px] md:text-[28px] font-normal text-[#ffffffaf] uppercase'>{GamesSlider.tagLine}</p>
                                    <button className='text-white w-[150px] sm:w-[165px] md:w-[210px] lg:w-[210px] h-[46px] lg:h-[64px]  md:h-[64px] mt-[20px] sm:mt-[25px] md:mt-[30px] lg:mt-[40px] custombtn font-semibold  text-sm flex gap-2 justify-center items-center'>PLAY TRAILER  <Play/></button>
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
  )
}

export default PartnerSlider
