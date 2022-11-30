import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
 
} from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div
      className="
            flex flex-col justify-evenly items-center
            bg-[#19647E] text-[#EEE5E5]
            font-[inter] min-h-[50vh] w-[100%]
            py-4 px-2 md:py-8 lg:py-10 xl:py-16
            
            leading-5 sm:leading-[2.5em] xl:leading-[3em]
            tracking-[0.20em] sm:tracking-[0.28em] md:tracking-[0.35em]
        "
    >
      <div className="flex flex-col justify-center w-[100%] text-right mt-4">
        <h1 className="pr-2 text-[2.2em] sm:text-[2.2em] xl:text-[2.4em] leading-9 ">
          “You might not think that programmers are artists but programming is
          an extremely creative profession. It’s logic-based creativity”
        </h1>
        <p className=" pr-8 mt-3  text-[1em] sm:text-[2em] xl:text-[2.4em]">
          – John Romero
        </p>
      </div>

      <div className="w-[40%] flex justify-between items-center">
        <a href="/">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-[#eee5e5] text-3xl hover:text-[#28afb0] transition duration-500 ease-in-out"
          />
        </a>
        <a href="/">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-[#eee5e5] text-3xl  hover:text-[#28afb0] transition duration-500 ease-in-out"
          
          />
        </a>
        <a href="/">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-[#eee5e5] text-3xl  hover:text-[#28afb0] transition duration-500 ease-in-out"
          
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
