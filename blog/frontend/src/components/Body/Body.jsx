import React from "react";
import Cards from "../Cards/Cards";
import Card from "../Card/Card";
import { data } from "../../db/data";

export default function Body(props) {
  return (
    <div className="row d-flex flex-column flex-lg-row justify-content-between">
      <div className="col-8">
        <Card {...data[0]}/>
      </div>
      <div className="scrollCards col-12 col-sm-12 col-md-4 col-lg-4">
        <Cards />
      </div>
      
    </div>
  );
}
