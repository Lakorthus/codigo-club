import React from "react";
import Body from "../components/Body/Body";
import Main from "../components/Body/Main/Main";
import Header from "../components/Body/Header/Header";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Body className="flex flex-col md:flex-col-reverse">
        {loading ? (
          <div className="h-[100vh] w-[100vw] flex items-center justify-center">
            <HashLoader color={"#fff"} loading={loading} size={120} />
          </div>
        ) : (
          <>
            <Main />
            <Header
              title="Codigo Club is a programming club dedicated to helping aspiring coders learn the fundamentals of coding."
              paragraph="Our blog provides insightful and informative content on everything from the basics of programming to the latest trends in the coding world."
              paragraph2="We also provide tutorials, resources, and discussion boards to help our members stay up to date with the latest coding practices."
              paragraph3="We are committed to helping our members become the best coders they can be and create amazing applications."
              className="text-[2em]"
            />
          </>
        )}
      </Body>
    </>
  );
}
