import React from 'react';
import Accordion from '../Accordion';
import Clock from '../assets/svg/Clock';
import Discord from '../assets/svg/Discord';
import Game from '../assets/svg/Game';
import Share from '../assets/svg/Share';
import People from '../assets/svg/People';
import { Link } from 'react-router-dom';

function EventDetails({   date,  title,  organizer,  clockText,  status,  discordText,  gameText,  month,  avatars }) {
 

  return (
    <div className='lg:min-h-[716px] my-max h-full max-w-full w-full  bg-[#C1BAFF1A] '>
      <div className='my-max max-w-full lg:px-9 lg:py-8  md:px-9 md:py-8 sm:px-6 sm:py-7  px-6 py-7 w-full'>
        <div className='flex w-full gap-6 my-wrap2'>
          <div className='flex text-white  py-[10px] px-[22px] bg-[#6E60F1] flex-col justify-center items-center'>
            <span className='text-xl'>{month}</span>
            <span className='text-[32px]'>{date}</span>
          </div>

          <div className='flex justify-center items-start gap-2 flex-col'>
            <h4 className='text-white lg:text-[32px] md:text-[32px] sm:text-[23px] text-[23px]'>{title}</h4>
            <h6 className='text-[18px]  text-[#FFFFFFB2]'>
              Public, Organized by{' '}
              <span className='text-[#D136F6] lg:text-[18px] md:text-[18px] sm:text-[15px] text-[15px]'>{organizer}</span>
            </h6>
          </div>
        </div>

        <div className='flex w-full mt-8'>
          <Accordion />
        </div>

        <div className='w-full event-b border-b'>
          <div className='py-[15px] flex justify-between items-center'>
            <div className='flex gap-4 w-[-webkit-fill-available] h-fit'>
              <Clock />
              <p className='text-base text-[#FFFFFFB2]'>{clockText}</p>
            </div>
            <button className='text-white  py-[6px] px-[16px] custombtn2 text-[16px] font-medium  flex justify-center items-center	'>
              <span>{status}</span>
            </button>
          </div>
        </div>

        <div className='w-full event-b border-b'>
          <div className='py-[21px] '>
            <div className='flex gap-4'>
              <Discord />
              <p className='text-base text-[#FFFFFFB2]'>{discordText}</p>
            </div>
          </div>
        </div>

        <div className='w-full event-b border-b'>
          <div className='py-[21px] '>
            <div className='flex gap-4'>
              <Game />
              <p className='text-base text-[#FFFFFFB2]'>{gameText}</p>
            </div>
          </div>
        </div>

        <div className='flex  py-[30px] gap-2  items-center'>
          <People />
          <div className='flex -space-x-4 rtl:space-x-reverse'>
            {avatars.map((avatar, index) => (
              <img
                key={index}
                className='w-10 h-10 border-2 border-white rounded-full dark:border-gray-800'
                src={avatar.imageUrl}
                alt={avatar.altText}
              />
            ))}
            <Link
              className='flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800'
              href='#'
            >
              +99
            </Link>
          </div>
        </div>

        <div className='w-full flex gap-4'>
          <Link className='px-[16px] py-[21px] bg-[#6E60F1] min-w-[160px] max-w-[377px] w-full text-center text-white'>
            JUMP IN
          </Link>
          <Link className='p-[13px] bg-[#6E60F1] text-center text-white flex items-center justify-center'>
            <Share />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
