import React from "react";
import "./Main.scss";
import { useState, useEffect } from "react";

function Main() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="content">
      <img
        src="https://media.istockphoto.com/id/996082438/photo/software-developing-team-working-in-the-office.jpg?s=612x612&w=0&k=20&c=xRducgI4LX08P6muob_7PAnCxsOO2kuvX4vIOQpQP28="
        alt="Working on this"
      />
      <section className="header-text">
        <div className="brand">
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
    </div>
  );
}

export default Main;
