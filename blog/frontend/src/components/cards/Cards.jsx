import React from "react";
import Card from "../Card/Card";
import {data} from '../../db/data';

export default function Cards() {
  return (
    <div className="row row-cols-1 row-cols-md-1 g-1">
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