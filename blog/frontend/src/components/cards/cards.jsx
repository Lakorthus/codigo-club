import React from "react";

var User = "Ferreira91";
var info = {
  User: "Ferreira91",
  Title: "Title of the Blog Postt",
  Image: "https://ychef.files.bbci.co.uk/976x549/p0202jwh.jpg",
  Date: "21/01/2010",
};
export default function Cards(props) {
  return (
    <div className="container row p-5 " style={{ maxWidth: "375px", maxHeigth : "100vh", gap : '20px'}}>
      <a
        href="localhost:3000"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="post1 card pl-30 p-2 d-flex ">
          <div className="d-flex justify-content-between">
            <p>{info.User}</p>

            <p>{info.Date}</p>
          </div>
          <img
            className="card-img-top"
            style={{ maxHeight: "375px", maxWidth: "768px" }}
            src={info.Image}
            alt=""
          />
          <div className="text">{info.Title}</div>
        </div>

        {/* <Card/> */}
      </a>
      <a
        href="localhost:3000"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="post1 card pl-30 p-2 d-flex ">
          <div className="d-flex justify-content-between">
            <p>{info.User}</p>

            <p>{info.Date}</p>
          </div>
          <img
            className="card-img-top"
            style={{ maxHeight: "375px", maxWidth: "768px" }}
            src={info.Image}
            alt=""
          />
          <div className="text">{info.Title}</div>
        </div>

        {/* <Card/> */}
      </a>
      <a
        href="localhost:3000"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="post1 card pl-30 p-2 d-flex ">
          <div className="d-flex justify-content-between">
            <p>{info.User}</p>

            <p>{info.Date}</p>
          </div>
          <img
            className="card-img-top"
            style={{ maxHeight: "375px", maxWidth: "768px" }}
            src={info.Image}
            alt=""
          />
          <div className="text">{info.Title}</div>
        </div>

        {/* <Card/> */}
      </a>
    </div>
  );
}
