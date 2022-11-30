import React from "react";

function Navbar() {
  return (
    <div className="">
      <div className="navbar bg-transparent md:bg-[#303229] ">
        <div className="flex-1 hidden md:block">
          <div></div>
          <a className="btn btn-ghost normal-case text-xl text-[#AE62A1]">
            Home
          </a>
          <a className="btn btn-ghost normal-case text-xl text-[#54A1E3]">
            About us
          </a>

          {"  "}
          <a className="btn btn-ghost normal-case text-xl text-[#E1C515]">
            Our Projects
          </a>
          <a className="btn btn-ghost normal-case text-3xl text-[#4AA4B9]">
            {" "}
            +{" "}
          </a>
        </div>

        <div className="flex-none hidden md:block ">
          <button className="btn btn-square btn-ghost">
            <a className="btn btn-ghost normal-case text-xl text-[#CC5756]">
              Blog
            </a>

            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg> */}
          </button>
        </div>
     <div className="navbar md:hidden justify-end">
        <a className="btn btn-ghost normal-case text-3xl text-[#000000] md:text-4xl md:hidden md:navbar-end">
          {" "}
          +{" "}
         
        </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
