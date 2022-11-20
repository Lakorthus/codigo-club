import React from "react";
import Cards from "../Cards/Cards";
import { data } from "../../db/data";
import MainCard from "../MainCard/MainCard";

export default function Body(props) {
  return (
    //row d-flex 
    <div className="container d-flex flex-column flex-lg-row justify-content-between ">
      <div className="main-card">
        <MainCard {...data[0]}/>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
        <Cards />
      </div>

    </div>
  );
}
