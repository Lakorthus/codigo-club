import React from "react";
import Profiles from "../components/Profiles/Profiles";
import Body from "../components/Body/Body";
import Header from "../components/Body/Header/Header";

function AboutUs() {
  return (
    <Body className=''>

      <Profiles />
      <Header title='We are passionate about building beautiful and functional websites that
help businesses succeed online. With a team of experienced and skilled
web developers, we specialize in creating custom-tailored solutions that
meet the unique needs of each of our clients. We believe in using the
latest technologies and industry best practices to deliver high-quality
websites that drive results. Whether you are looking to launch a new
website or redesign an existing one, we can help you achieve your goals.
Contact us today to learn more.' className='text-[1.7em]'/>
    
    
    </Body>
  );
  // TODO add content
}

export default AboutUs;
