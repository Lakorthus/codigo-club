import React from "react";

var User = "Ferreira91";
var info = {
  User: "Ferreira91",
  Title: "Title of the Blog Postt",
  Image: "https://ychef.files.bbci.co.uk/976x549/p0202jwh.jpg",
  Date: "21/01/2010",
  Text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
};
export default function Card(props) {
  return (
    <div className="container row p-5 " style={{ maxWidth: "850px", maxHeigth : "100vh" , position : 'sticky'}}>
      <a
        href="localhost:3000"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="post1 card pl-30 p-2 d-flex ">
          <div className="text">{info.Title}</div>
          <img
            className="card-img-top"
            style={{ maxHeight: "375px", maxWidth: "768px" }}
            src={info.Image}
            alt=""
          />
          <div className="d-flex justify-content-between">
            <p>{info.User}</p>

            <p>{info.Date}</p>
          </div>
          <div className="text">{info.Text}</div>
        </div>

        {/* <Card/> */}
      </a>
    </div>
  );
}