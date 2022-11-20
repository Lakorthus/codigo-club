import React from "react";
import Card from "../Card/Card";
import './Cards.css'
import {data} from '../../db/data';

export default function Cards() {
  return (
    // "row row-cols-1 row-cols-sm-1 row-cols-md-1 g-1  ps-3 pe-3 pb-1 pt-4"
    //col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4
    <div className="scrollCards">
      {data.map((post,index) => {
        return (
          <Card
            key={index}
            author={post.author}
            date={post.date}
            title={post.title}
            src={post.src}
            text={post.text}
          />
        );
      })}
    </div>
  );

}