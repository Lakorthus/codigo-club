import React from "react";
import { useState, useEffect } from "react";

function Logo({className}) {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <div className="absolute top-[15%] left-[10%] max-w-max mix-blend-color-dodge z-[2] md:relative md:max-w-none md:w-[85%] md:h-[70%] md:top-0 md:left-0 md:z-0 md:border-[#25Afb0] md:border-[4px] md:mix-blend-normal">
    
      <div className="hidden md:h-[100%] md:w-[100%] md:rounded-full bg-[#25Afb0] md:absolute md:z-[-1] md:block"></div>

      <div className="
      md:flex md:flex-col md:justify-center md:items-center md:h-[100%] ">
        <div className="text-[7.8em] font-[inter] font-bold leading-[100%] md:text-[7.9em] lg:text-[10.4em]">
        <span className={letterClass}>C</span>
        <span className={letterClass}>O</span>
        <span className={letterClass}>D</span>
        <span className={letterClass}>I</span>
        <br />
        <span className={letterClass}>G</span>
        <span className={letterClass}>O</span>
        <br />
        <span className={letterClass}>C</span>
        <span className={letterClass}>L</span>
        <span className={letterClass}>U</span>
        <span className={letterClass}>B</span>
        </div>
      </div>
    </div>
  );
}

export default Logo;
