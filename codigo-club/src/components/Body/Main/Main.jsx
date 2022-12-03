import React from "react";
import Logo from "../../../utilities/Logo/Logo";
import "./Main.scss";

function Main() {
  return (
    <div className="bg-[#19647E] top-0 h-[50vh] w-[100vw] md:flex md:justify-between md:items-center">
      <img
        src="https://media.istockphoto.com/id/996082438/photo/software-developing-team-working-in-the-office.jpg?s=612x612&w=0&k=20&c=xRducgI4LX08P6muob_7PAnCxsOO2kuvX4vIOQpQP28="
        alt="Working on this"
        className="w-[100%] h-[100%] object-cover opacity-40 md:opacity-100 relative z-[1] md:w-[60%] md:h-[100%] md:object-cover md:z-0"
      />
      <Logo/>
    </div>  
  );
}

export default Main;
