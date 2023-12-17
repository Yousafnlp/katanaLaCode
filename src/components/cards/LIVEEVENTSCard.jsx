import React, { useState } from 'react';
import DropDown from './DropDown';


function LIVEEVENTSCard({ key, bgImage, iconOne, titleOne, titleTwo, iconThree, titleThree, dateIcon, date })
 {
  return (
    <div className="w-full max-w-[424px] h-[400px] relative gradient-border">
      <img
        className="h-full w-full object-cover object-left"
        src={bgImage}
        alt=""
      />

      <div className="flex items-center absolute bottom-0 justify-start w-full bg-[#000000E6] backdrop-blur-sm">
        <div className="p-3 w-full text-white">
          <div className="flex items-center mb-1 justify-start gap-2">
            <img
              className="w-[16px] p-1 bg-[#6e60f1]"
              src={iconOne}
              alt=""
            />
            <span className="text-sm">{titleOne}</span>
          </div>
          <p className="text-xl my-[2.5px]">{titleTwo}</p>

          <div className="flex items-center justify-start gap-2">
            <img
              className="w-[13px]"
              src={iconThree}
              alt=""
            />
            <p className="text-[14px] text-[#FFC700]">{titleThree}</p>
          </div>

          <div className="flex items-center justify-start mt-3 gap-2">
            <img
              className="w-[12px]"
              src={dateIcon}
              alt=""
            />

            <p className="text-xs text-[#ffffffaf] ">{date}</p>

            <DropDown/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LIVEEVENTSCard;
