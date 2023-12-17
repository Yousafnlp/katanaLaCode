import React from 'react'
import LIVEEVENTS from '../LIVEEVENTS'
import NEWGAMESTOPLAY from '../NEWGAMESTOPLAY';
import ANTICIPATEDGAMES from '../ANTICIPATEDGAMES';
import RECENTLYSOLDNFTS from '../RECENTLYSOLDNFTS';
import FREETOPLAY from '../FREETOPLAY';
import GAMECATEGORY from '../GAMECATEGORY';
import HomeSlider from '../HomeSlider';
import LIFTYBLOG from '../LIFTYBLOG';
import EARLYACCESS from '../EARLYACCESS';
function Home() {
  return (
    <div className='bg-black'>

      <>
        <HomeSlider />
        <LIVEEVENTS />
        <NEWGAMESTOPLAY />
        <EARLYACCESS />
        <ANTICIPATEDGAMES />
        <RECENTLYSOLDNFTS />
        <FREETOPLAY />
        <GAMECATEGORY />
        <LIFTYBLOG />
      </>
    </div>
  )
}

export default Home
