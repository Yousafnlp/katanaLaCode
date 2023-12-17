import React from 'react'
import './Index.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import NFTAdventure from './components/pages/NFTAdventure';
import NewGames from './components/pages/NewGames';
import Wallet from './components/pages/Wallet';
import NavMid from './components/NavMid';
import Browse from './components/pages/Game';
import Events from './components/pages/Events';
import Footer from './components/Footer';
import Partners from './components/pages/Partners';

function App() {
  return (
    <>
  <div className='bg-black'>
  <NavMid/>
  <Routes>
    
    <Route element={<Home/>} path='/'/>
    <Route element={<Wallet/>} path='/MyAccount'/>
    <Route element={<NFTAdventure/>} path='/NFTAdventure'/>
    <Route element={<NewGames/>} path='/NewGames'/>
    <Route element={<Events/>} path='/Events'/>
    <Route element={<Browse/>} path='/Browse'/>
    {/* <Route element={<Home/>} path='/temp'/> */}
    <Route element={<Partners/>} path='/Partners'/>

  </Routes>
  <Footer/>
  </div>
       </>
  );
}

export default App;
