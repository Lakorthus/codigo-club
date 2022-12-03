import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div
      className="
      navbar bg-[transparent] absolute w-[100%]
      md:bg-[#303229] md:relative"
    >
      <div className="w-[100%] md:flex hidden md:justify-between">
      <div>
      <a
          href="/"
          className="btn btn-ghost normal-case text-xl text-[#AE62A1]"
        >
          Home
        </a>
        <a
          href="/"
          className="btn btn-ghost normal-case text-xl text-[#54A1E3]"
        >
          About us
        </a>

        {"  "}
        <a
          href="/"
          className="btn btn-ghost normal-case text-xl text-[#E1C515]"
        >
          Our Projects
        </a>
        <a
          href="/"
          className="btn btn-ghost normal-case text-3xl text-[#4AA4B9]"
        >
          {" "}
          +{" "}
        </a>

      </div>
      
        <div>
          <a
            href="/"
            className="btn btn-ghost normal-case text-xl text-[#CC5756]"
          >
            Blog
          </a>
        </div>
      </div>

      <div className="navbar md:hidden justify-end">
        <a
          href="/"
          className="btn btn-ghost normal-case text-3xl text-[#eee5e5] bg-[#37392e] md:text-4xl md:hidden md:navbar-end"
        >
          <FontAwesomeIcon icon={faBars} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
