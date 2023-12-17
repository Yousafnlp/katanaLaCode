import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Footer() {

    let navigate = useNavigate();
    const navigatorHome = () => {
        navigate('/')
    }


  return (
 
    <div className='flex pt-10 justify-center items-start w-full  px-4 lg:px-5 md:px-4 bg-black '>

    <div className="bg-black w-full custom-container   flex justify-center items-center">

        <div className="flex  justify-between w-full  flex-wrap items-start gap-6">

            <div  className="flex max-w-[441px]  items-start flex-col gap-6">
             
             
            <img className='w-[237px]   cursor-pointer' src={require('../assets/Logo.png')} onClick={navigatorHome} alt="" />
              
                <p className='text-white'>
                Nothing on this website constitutes financial advice, and it is always recommended to consult a qualified financial advisor before participating in any token or NFT purchases.
                </p>
            </div>

            <div className='mt-lg-0 mt-md-4 mt-sm-6 mt-6 min-w-[150px]'>
                <div className='text-[#FFFFFFB2] flex flex-col gap-6'>
                    <span className='mb-2 text-white font-bold'>company</span>
                    <Link className='hover:text-white'>Brand kit</Link>
                    <Link className='hover:text-white'>Contact us</Link>
                    <Link className='hover:text-white'>Jobs</Link>
                </div>
            </div>

            <div  className='mt-lg-0 mt-md-4 mt-sm-6 mt-6 min-w-[150px] '>
                <div className='text-[#FFFFFFB2] flex flex-col gap-6'>
            <span className='mb-2 text-white font-bold'>legal</span>
                    <Link className='hover:text-white'>Cookies Policy</Link>
                    <Link className='hover:text-white'>DMCA Policy</Link>
                    <Link className='hover:text-white'>Privacy Policy</Link>
                    <Link className='hover:text-white'>Terms of Use</Link>
                </div>
            </div>
          
          
            <div  className='mt-lg-0 mt-md-4 mt-sm-6 mt-6 sm:min-w-[300px] lg:min-w-[auto] md:min-w-[auto] min-w-[300px]'>
                <div className='text-[#FFFFFFB2] flex flex-col gap-6'>
            <span className='mb-2 text-white font-bold'>community</span>
                    <Link className='hover:text-white'>Blog</Link>
                    <Link className='hover:text-white'>Developers</Link>
                    <Link className='hover:text-white'>Help</Link>
                    <Link className='hover:text-white'>Status</Link>
                </div>
            </div>

        </div>
    </div>
 </div>
  )
}

export default Footer
