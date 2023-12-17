import React, { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import HomeI from '../assets/svg/navicon/HomeI';
import MyAccI from '../assets/svg/navicon/MyAccI';
import GameI from '../assets/svg/navicon/GameI';
import EventI from '../assets/svg/navicon/EventI';
import HomeA from '../assets/svg/navicon/HomeA';
import MyAccA from '../assets/svg/navicon/MyAccA';
import GameA from '../assets/svg/navicon/GameA';
import EventA from '../assets/svg/navicon/EventA';

const Navbar = () => {
    const location = useLocation();

    console.log(location.pathname);


  
    const [activeHome, setActiveHome] = useState(true)
    const [activeMyAcc, setActiveMyAcc] = useState(false)
    const [activeGame, setActiveGame] = useState(false)
    const [activeEvent, setActiveEvent] = useState(false)

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

        <div className="bg-black flex justify-center items-center py-4 px-3 lg:px-5 md:px-4">
            <nav className="bg-black w-full custom-container   flex justify-center items-center flex-col">

                <div className="flex items-center justify-between w-full " >
                    <div>

                        <img className='w-[148px] mr-8   cursor-pointer' src={require('../assets/Logo.png')} onClick={navigatorHome} alt="" />
                    </div>

                    <div className='flex justify-between items-center gap-2'>

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



                    </div>
                    <div className='flex gap-5'>


                        <div className='text-[16px] w-[200px] h-[48px]  pl-4 flex items-center gap-2 navicon '>
                            <img src={require('../assets/Minimalistic Magnifer.png')} alt="" /><input className=' outline-none bg-transparent border-0 text-white   w-[130px]' placeholder='Search Games' type="text" />
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
