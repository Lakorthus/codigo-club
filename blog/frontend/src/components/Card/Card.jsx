import React from "react";

const Card = (props) => {
  return (
    <div className="container ps-3 pe-3 pb-1 pt-4">
      <div className="card d-flex" 
>
          <div className="d-flex ms-1 me-1 justify-content-between p-2">
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
                 
        <p className="text">{props.title}</p>
        <p className="text">{props.text}</p>

      </div>
    </div>
  );
};

export default Card;  
