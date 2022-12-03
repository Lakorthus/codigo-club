import React from "react";
import { Link } from "react-router-dom";
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
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-[#AE62A1]"
          >
            Home
          </Link>

          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-[#54A1E3]"
          >
            About us
          </Link>

          {"  "}
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-[#E1C515]"
          >
            Our Projects
          </Link>
          {/* Button + */}
          <Link
            to="/"
            className="btn btn-ghost normal-case text-3xl text-[#4AA4B9]"
          >
            {" "}
            +{" "}
          </Link>
        </div>

        <div>
          <Link
            to="/blog"
            className="btn btn-ghost normal-case text-xl text-[#CC5756]"
          >
            Blog
          </Link>
        </div>
      </div>

      <div className="navbar md:hidden justify-end">
        <div className="dropdown z-10">
          <label
            tabIndex={0}
            className="btn btn-ghost normal-case text-3xl text-[#eee5e5] bg-[#37392e] md:text-4xl md:hidden md:navbar-end"
          >
            <FontAwesomeIcon icon={faBars} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content right-2 mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="about-us">About us</Link>
            </li>
            <li>
              <Link to="our-projects">Our Projects</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
