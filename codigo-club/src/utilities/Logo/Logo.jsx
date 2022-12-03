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
    <div className="absolute top-[15%] left-[10%] max-w-max mix-blend-color-dodge z-[2] md:relative md:w-[40wh] md:top-0 md:left-0 md:z-0 md:mr-4 md:border-[#000000] md:border-[4px] md:mix-blend-normal">
      {/* <div className="circle"></div> */}
      <div className="color-[#DDCECD] text-[7.8em] font-[inter] font-bold leading-[100%] md:text-[9.4em]">
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
  );
}

export default Logo;
