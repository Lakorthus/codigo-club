import React from "react";

function NavBar() {
  return (
    // Simple Navbar with a circular logo on the left and a menu icon on the right
    // The menu icon will be used to toggle the sidebar
    <nav 
      className="navbar navbar-expand-lg navbar-dark"
      style={
        {
          backgroundColor: "#003566"
        }
      }
    >
      <a className="navbar-brand" href="#">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/25/25694.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
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
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
