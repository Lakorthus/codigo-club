import React from "react";

import '../../components/Body/Main/Main.scss'

function Logo({className}) {
 
  
  return (
    <div className="absolute top-[15%] left-[10%] max-w-max mix-blend-color-dodge z-[2] md:relative md:max-w-none md:w-[85%] md:h-[70%] md:top-0 md:left-0 md:z-0 md:border-[#25Afb0] md:border-[4px] md:mix-blend-normal">
    
      <div className="hidden md:h-[100%] md:w-[100%] md:rounded-full bg-[#25Afb0] md:absolute md:z-[-1] md:block"></div>

      <div className="
      md:flex md:flex-col md:justify-center md:items-center md:h-[100%] ">
        <div className="text-[7.8em] font-[inter] font-bold leading-[100%] md:text-[7.9em] lg:text-[10.4em]">

        <span>C</span>
        <span>O</span>
        <span>D</span>
        <span >I</span>
        <br />
        <span>G</span>
        <span>O</span>
        <br />
        <span>C</span>
        <span>L</span>
        <span>U</span>
        <span>B</span>

        </div>
      </div>
    </div>
  );
}

export default Logo;
