import React from "react";
import Cards from "../Cards/Cards";
import Card from "../Card/Card";

export default function Body(props) {
  return (
    <div className="container row p-5 ">
      <div className="col-8">
        <Card />
      </div>
      <div className="col-4">
        <Cards />
      </div>
    </div>
  );
}