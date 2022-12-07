import React from "react";
import Body from "../components/Body/Body";
import Main from "../components/Body/Main/Main";
import Header from "../components/Body/Header/Header";

export default function Home() {
  return (
    <>
      <Body className="flex flex-col md:flex-col-reverse">
        <Main />
        <Header
          paragraph="Codigo Club is a programming club dedicated to helping aspiring coders learn the fundamentals of coding. Our blog provides insightful and informative content on everything from the basics of programming to the latest trends in the coding world.We also provide tutorials, resources, and discussion boards to help our members stay up to date with the latest coding practices. We are committed to helping our members become the best coders they can be and create amazing applications"
        />
      </Body>
    </>
  );
}