import React from "react";
import SearchBar from "../SearchBar/SearchBar";

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark d-flex justify-space-between px-4"
        style={{ backgroundColor: "#003566" }}
      >
        <a className="navbar-brand" href="localhost:3000">
          <img
            src={require("../../components/images/logo_icon.png")}
            className="d-inline-block align-top w-50 h-50"
            alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="localhost:3000">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <SearchBar />
    </>
  );
}

export default NavBar;
