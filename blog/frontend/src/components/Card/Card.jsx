import React from "react";

const Card = (props) => {
  return (
    <div className="container row p-5 ">
      <div className="post1 card pl-30 p-2 d-flex ">
        <div className="d-flex justify-content-between">
          <p>{props.author}</p>

          <p>{props.date}</p>
        </div>
        <img className="card-img-top" src={props.src} alt={props.author}/>
        <div className="text">{props.title}</div>
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
