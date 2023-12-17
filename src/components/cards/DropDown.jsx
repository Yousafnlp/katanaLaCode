

import React, { useState } from 'react';

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState)
  
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center p-2  hover:text-black outline-none "
          id="options-menu"
          onClick={toggleDropdown}
        >
            <div className='flex gap-[2px]'>
                <div className='bg-[#ffffffaf] w-1 rounded-full h-1'></div>
                <div className='bg-[#ffffffaf] w-1 rounded-full h-1'></div>
                <div className='bg-[#ffffffaf] w-1 rounded-full h-1'></div>
            </div>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute  z-50 right-0 mt-2 w-48  shadow-lg bg-black border-1 border-[#FFC700] outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;
