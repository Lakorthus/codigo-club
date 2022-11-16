import React from "react";
import Cards from "../Cards/Cards";
import Card from "../Card/Card";

export default function Body(props) {
  return (
    <div className="row d-flex justify-content-between">
      <div className="col-8">
        <Card />
      </div>
      <div className="col-4">
        <Cards />
      </div>
    </div>
  );
}
