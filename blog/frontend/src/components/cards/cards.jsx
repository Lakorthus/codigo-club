import React from "react";
import Card from "../Card/Card";

let blogPosts = [
  {
    author: "John Doe",
    date: "12/12/2020",
    title: "Blog Post 1",
    src: "https://picsum.photos/200/300",
    text: "Helloooooo World"
  },
  {
    author: "John Doe",
    date: "12/12/2020",
    title: "Blog Post 1",
    src: "https://picsum.photos/200/300",
    text: "Helloooooo World"
  },
  {
    author: "John Doe",
    date: "12/12/2020",
    title: "Blog Post 1",
    src: "https://picsum.photos/200/300",
    text: "Helloooooo World"
  },
]

export default function Cards() {
  return (
    <div className="cards">
      {blogPosts.map((post,index) => {
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
