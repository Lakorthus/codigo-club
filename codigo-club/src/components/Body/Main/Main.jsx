import React from "react";
import Logo from "../../../utilities/Logo/Logo";
import "./Main.scss";
import Social from "../../../utilities/Social/Social";
import {
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

function Main() {
  return (
    <div className="top-0 min-h-[50vh] lg:min-h-[60vh] w-[100vw] md:flex md:justify-between md:items-center">
      <img
        src="https://media.istockphoto.com/id/996082438/photo/software-developing-team-working-in-the-office.jpg?s=612x612&w=0&k=20&c=xRducgI4LX08P6muob_7PAnCxsOO2kuvX4vIOQpQP28="
        alt="Working on this"
        className="w-[100%] h-[50vh] object-cover opacity-40 md:opacity-100 relative z-[1] md:w-[60%] lg:w-[70%] md:object-cover md:z-0"
      />


      <div className="md:flex flex-col justify-evenly items-center md:h-[100%] md:w-[40%]">

        <Logo/>

        <div className="hidden md:flex w-[60%] justify-between items-center">
        <Social 
          icon={faGithub}
          className="text-[#eee5e5] text-3xl hover:text-[#28afb0] transition duration-500 ease-in-out"
        />
        <Social 
          icon={faTwitter}
          className="text-[#eee5e5] text-3xl  hover:text-[#28afb0] transition duration-500 ease-in-out"
        />
        <Social 
          icon={faEnvelope}
          className="text-[#eee5e5] text-3xl  hover:text-[#28afb0] transition duration-500 ease-in-out"
        />
    </div>
      </div>
    </div>  
  );
}

export default Main;
