import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isExtended, setIsExtended] = useState(false);

  const toggleAccordion = () => {
    setIsExtended(!isExtended);
  };

  return (
    <>
      <div
        className={`flex justify-start items-end flex-col  cursor-pointer ${isExtended ? 'h-auto' : ' '}`}
        // onClick={toggleAccordion}
      >
        <h2 className="text-base font-normal pb-2">
          {title}
        </h2>
      </div>
      <div >
        <p className={isExtended ? 'block' : 'hidden'}>{content}</p>
        <div  onClick={toggleAccordion} className='flex cursor-pointer justify-center items-center pt-6'>
          {isExtended ?
        <>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
          <path d="M21.875 10.125L14 16.875L6.125 10.125" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </> :
        <>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
          <path d="M21.875 10.125L14 16.875L6.125 10.125" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </>}
        </div>
      </div>
    </>
  );
};

const Accordion = () => {
  return (
    <div className="w-full text-[#FFFFFFB2] text-base font-normal ">
      <AccordionItem
        title="The CBT Tournament X 2nd Round is open! Prepare yourself as a new round of combat is about to begin. There are several levels in the tournament."
        content="The CBT Tournament X 2nd Round is open! Prepare yourself as a new round of combat is about to begin.  "
      />
    </div>
  );
};

export default Accordion;
