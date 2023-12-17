import React from 'react'
import Accordion from '../../Accordion'
import { Link } from 'react-router-dom'
import EventImageSection from '../EventImageSection'
import EventDetails from '../EventDetails'
import { eventData, imageArray } from '../cards/Data'

function Events() {
  const eventDataArray = [
    {
      month: 'Dec',
      date: '8',
      title: 'KOAKUMA : CBT2...',
      organizer: 'Aliza',
      clockText: 'Started 12 hours ago',
      status: 'LIVE',
      discordText: 'Started 12 hours ago',
      gameText: 'Started 12 hours ago',
      avatars: imageArray,
    },
    // Add more objects as needed
  ];
  return (
    <>

      <div className='flex py-5 justify-center items-center w-full  px-4 lg:px-5 md:px-4 bg-black'>

        <div className="bg-black w-full custom-container    flex justify-center items-center">

          <div className="w-full  flex justify-center items-center	">


            <div className="pt-16  flex   w-full justify-between items-center 	">
              <div>
                <h3 className='text-xl md:text-2xl  lg:text-[32px] 	 font-semibold	 uppercase text-white   lg:mb-0'>UPCOMING EVENT</h3>
              </div>

              <div>
                <button className='text-white w-[150px] sm:w-[165px] md:w-[210px] lg:w-[210px] h-[46px] lg:h-[64px]  md:h-[64px] custombtn font-semibold  text-sm'>READ MORE</button>

              </div>

            </div>
          </div>

        </div>
      </div>

      <div className='flex pt-5 justify-center items-center w-full  px-4 lg:px-5 md:px-4 bg-black'>

        <div className="bg-black w-full custom-container    flex justify-center items-center ">



          <div className="w-full  flex justify-center items-center gap-4 my-wrap">

            {/* -----------  */}

           
      {eventData.map((event, index) => (
        <EventImageSection
          key={index}
          imageUrl={event.imageUrl}
          title={event.title}
          date={event.date}
          location={event.location}
        />
      ))}


            {/* ------------  */}
            {eventDataArray.map((eventData, index) => (
        <EventDetails
          key={index}
          month={eventData.month}
          date={eventData.date}
          title={eventData.title}
          organizer={eventData.organizer}
          clockText={eventData.clockText}
          status={eventData.status}
          discordText={eventData.discordText}
          gameText={eventData.gameText}
          avatars={eventData.avatars}
        />
      ))}
          </div>
        </div>
      </div>

    </>)
}

export default Events
