import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    
      <div className="card mb-4 ">
        <img className="card-img-top style-card-img" src={props.src} alt={props.author} />
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

export default Card;
