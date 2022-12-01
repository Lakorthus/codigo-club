import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar md:bg-[#303229] bg-[transparent] absolute">
      <div className="flex-1 hidden md:block">
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

      <div className="flex-none hidden md:block ">
        <button className="btn btn-square btn-ghost">
        <Link to="/blog"
               className="btn btn-ghost normal-case text-xl text-[#CC5756]"
                >
                  Blog
                  </Link>

        </button>
      </div>
      <div className="navbar md:hidden justify-end">
        <div className="dropdown z-10">
          <label
            tabIndex={0}
            className="btn btn-ghost normal-case text-3xl text-[#eee5e5] bg-[#37392e] md:text-4xl md:hidden md:navbar-end"
          >
            +
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
