import React from "react";
import "./MainCard.css";

const MainCard = (props) => {
  return (
    <div className="card">
      <img
        className="card-img-top style-main-img"
        src={props.src}
        alt={props.author}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p>{props.author}</p>
        <p className="card-text">{props.text}</p>
        <p className="card-text">
          <small className="text-muted">{props.date}</small>
        </p>
      </div>
    </div>
  );
};

export default MainCard;
