import React from "react";
import Card from "../Card/Card";
var User = "Ferreira91";
var info = {
  User: "Ferreira91",
  Title: "Title of the Blog Postt",
  Image: "https://ychef.files.bbci.co.uk/976x549/p0202jwh.jpg",
  Date: "21/01/2010",
};
export default function Cards(props) {
  return (

    <div className="container row p-5 ">
      <div className="post1 card pl-30 p-2 d-flex ">
        <div className="d-flex justify-content-between">
        <p>{info.User}</p>


        <p>{info.Date}</p>
        </div>
        <img className="card-img-top" src={info.Image} />
        <div className="text">{info.Title}</div>
        </div>

      {/* <Card/> */}
    </div>
  );
}
