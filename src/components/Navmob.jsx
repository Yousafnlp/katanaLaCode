import React, { useEffect } from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'
import { IoOptionsSharp } from "react-icons/io5";
//import styles 
import 'react-modern-drawer/dist/index.css'

import HomeI from '../assets/svg/navicon/HomeI';
import MyAccI from '../assets/svg/navicon/MyAccI';
import GameI from '../assets/svg/navicon/GameI';
import EventI from '../assets/svg/navicon/EventI';
import HomeA from '../assets/svg/navicon/HomeA';
import MyAccA from '../assets/svg/navicon/MyAccA';
import GameA from '../assets/svg/navicon/GameA';
import EventA from '../assets/svg/navicon/EventA';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Navmob = () => {
  const location = useLocation();

    console.log(location.pathname);


  
    const [activeHome, setActiveHome] = useState(true)
    const [activeMyAcc, setActiveMyAcc] = useState(false)
    const [activeGame, setActiveGame] = useState(false)
    const [activeEvent, setActiveEvent] = useState(false)

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  
  let navigate = useNavigate();
  const navigatorHome = () => {
      navigate('/')
  }


  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveHome(true);
        setActiveMyAcc(false);
        setActiveGame(false);
        setActiveEvent(false);
        break;
      case '/MyAccount':
        setActiveHome(false);
        setActiveMyAcc(true);
        setActiveGame(false);
        setActiveEvent(false);
        break;
      case '/Browse':
        setActiveHome(false);
        setActiveMyAcc(false);
        setActiveGame(true);
        setActiveEvent(false);
        break;
      case '/Events':
        setActiveHome(false);
        setActiveMyAcc(false);
        setActiveGame(false);
        setActiveEvent(true);
        break;
      default:
        setActiveHome(false);
        setActiveMyAcc(false);
        setActiveGame(false);
        setActiveEvent(false);
    }
  }, [location.pathname]);

  return (
    <>

      <nav className="bg-black ps-3 pe-3 p-2 relative">
        <div className="w-full mx-auto flex justify-between items-center">

          <div>
            <img className='w-[148px] mr-8'  onClick={navigatorHome} src={require('../assets/Logo.png')} alt="" />

          </div>




          <div className=" text-[45px]">
          
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='right'
              className='bla bla bla  '
              style={{ position: "absolute !important", top: "64.200px !important" }}
            >

              <div className=" w-full h-full bg-black ">
     <div className='p-4'>

                        <NavLink
                            to="/"
                            // onClick={setHome}
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? " text-[16px] py-[12px] px-6 flex items-center gap-2 activeText navicon" :
                                    "text-white text-[16px] py-[12px] px-6 flex items-center gap-2"
                            }

                        >
                            {activeHome? <HomeA/> :    <HomeI/> }
                         
                            Home
                        </NavLink>


                        <NavLink
                            // onClick={setMyAcc}

                            to="/MyAccount"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? " text-[16px] py-[12px] px-6 flex items-center gap-2 activeText navicon" :
                                    "text-white text-[16px] py-[12px] px-6 flex items-center gap-2"
                            }

                        >
                            {activeMyAcc?    <MyAccA/> :   <MyAccI/>  }

                            
                           
                            My Account
                        </NavLink>


                        <NavLink
                            // onClick={setGame}

                            to="/Browse"
                            
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? " text-[16px] py-[12px] px-6 flex items-center gap-2 activeText navicon" :
                                    "text-white text-[16px] py-[12px] px-6 flex items-center gap-2"
                            }

                        >

{activeGame?   <GameA/> :  <GameI/>     }

                            
                            
                            Game
                        </NavLink>


                        <NavLink
                        // onClick={setEvent}
                            to="/Events"
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? " text-[16px] py-[12px] px-6 flex items-center gap-2 activeText navicon" :
                                    "text-white text-[16px] py-[12px] px-6 flex items-center gap-2"
                            }

                        >

                     {activeEvent?    <EventA/>  :   <EventI/>}
                            Events
                        </NavLink>



                    </div></div>
            </Drawer>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navmob