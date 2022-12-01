import React from "react";

function Navbar() {
  return (
    <div className="navbar md:bg-[#303229] bg-[transparent] absolute">
      <div className="flex-1 hidden md:block">
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
        {/* Button + */}
        <a
          href="/"
          className="btn btn-ghost normal-case text-3xl text-[#4AA4B9]"
        >
          {" "}
          +{" "}
        </a>
      </div>

      <div className="flex-none hidden md:block ">
        <button className="btn btn-square btn-ghost">
          <a
            href="/"
            className="btn btn-ghost normal-case text-xl text-[#CC5756]"
          >
            Blog
          </a>
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
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="about-us">About us</a>
            </li>
            <li>
              <a href="our-projects">Our Projects</a>
            </li>
            <li>
              <a href="blog">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
