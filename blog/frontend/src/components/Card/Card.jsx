import React from "react";

export default function Card  (props) {
  return (
    <div className="container ps-3 pe-3 pb-1 pt-4">
      <div className="card"
      style={{backgroundColor: '#E9ECEF'}} 
>
          <div className="d-flex ms-1 me-1 justify-content-between p-2"
               >
          <p>{props.author}</p>

          <p>{props.date}</p>
        </div>
        <img className="img-fluid" 
                    style={{
                      width: '100%',
                      height: '20rem'
                    }} 
                    src={props.src} 
                    alt={props.author}/>
                 <div className="ms-2 pt-2">
        <h2 className="text">{props.title}</h2>
        <p className="text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};


