import React from 'react'
import { useState, useEffect } from "react";

function Logo() {
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        setTimeout(() => {
          setLetterClass("text-animate-hover");
        }, 4000);
      }, []);
  return (
    <section className="absolute top-[15%] left-[10%] max-w-max mix-blend-color-dodge z-[2]">
        <div className="cirlce"></div>
        <div className="color-[#DDCECD] text-[7.8em] font-[inter] font-bold leading-[100%]">
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
      </section>
  )
}

export default Logo