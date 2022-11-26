import React, { useEffect } from "react";
import "./MainCard.css";

const MainCard = (props) => {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    fetch("https://codigo-club-production.up.railway.app/blog/")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="card main-card">

      {/* Mapping through the items, stop after the first item in the array */}
      {items.map((post, index) => {
        if (index === 0) {
          return (
            <div key={index}>
              <img
                className="card-img-top style-main-img"
                src={post.post_picture_0}
                alt={post.author}
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p>{post.author}</p>
                <p className="card-text">{post.content}</p>
                <p className="card-text">
                  <small className="text-muted">{post.created_on}</small>
                </p>
              </div>
            </div>
          );
        }
        else return null;
      })}
    </div>
  );
};


export default MainCard;
