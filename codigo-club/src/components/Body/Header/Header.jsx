import React from "react";

function Header() {
  return (
    <div
      className="
            bg-[#19647E] text-[#EEE5E5]
            font-[inter] h-[100vh] w-[100%]
            py-4 px-2 md:py-8 lg:py-10 xl:py-16
            text-right
            leading-5 sm:leading-[2.5em] xl:leading-[3em]
            tracking-[0.20em] sm:tracking-[0.28em] md:tracking-[0.35em]
        "
    >
      <h1 className="text-[1em] sm:text-[2em] xl:text-[2.4em]">
        “You might not think that programmers are artists, but programming is an
        extremely creative profession. It’s logic-based creativity”
      </h1>
      <p className="text-[1em] sm:text-[2em] xl:text-[2.4em]">– John Romero</p>
    </div>
  );
}

export default Header;
