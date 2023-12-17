import React, { useState, useEffect } from 'react';

import Navmob from './Navmob';
import Navbar from './Navbar';

function NavMid() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 1140 // Adjust the breakpoint as needed
  );

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobileOrTablet(window.innerWidth <= 1140); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <div>
        {isMobileOrTablet ? (
          // Component to show on mobile or tablet
          <>
          <Navmob/>
          </>) : (
          // Component to show on laptop or large screens
          <>
          <Navbar/>
          </>
        )}
      </div>
    </>
  );
}

export default NavMid;
