import React from "react";
import Carlos from "../../assets/img/carlos.jpg";
import Juan from "../../assets/img/juan.jpg";
import Julio from "../../assets/img/julio.jpg";
import Jean from "../../assets/img/jean.jpg";
import "./Profiles.scss";

function Profiles() {
  return (
    <div className="top-0  bg-red-500  min-h-[50vh] lg:min-h-[60vh] w-[100vw] flex md:justify-between md:items-center">
<div className="grid grid-cols-2 grid-rows-2">

    <picture>
       {/* <source srcSet="https://res.cloudinary.com/dzcmadjl1/image/upload/v1631000003/codigo-club/Profiles.webp" type="image/webp" /> */}
       <source srcSet={Carlos} type="image/jpg" />
       <img src={Carlos} alt="Portrait of Carlos Rodriguez" />
     </picture>
    <picture>
       {/* <source srcSet="https://res.cloudinary.com/dzcmadjl1/image/upload/v1631000003/codigo-club/Profiles.webp" type="image/webp" /> */}
       <source srcSet={Juan} type="image/jpg" />
       <img src={Juan} alt="Portrait of Juan Ferreira" />
     </picture>
    <picture>
       {/* <source srcSet="https://res.cloudinary.com/dzcmadjl1/image/upload/v1631000003/codigo-club/Profiles.webp" type="image/webp" /> */}
       <source srcSet={Julio} type="image/jg" />
       <img src={Julio} alt="Portrait of Julio Velezmoro" />
     </picture>
    <picture>
       {/* <source srcSet="https://res.cloudinary.com/dzcmadjl1/image/upload/v1631000003/codigo-club/Profiles.webp" type="image/webp" /> */}
       <source srcSet={Jean} type="image/jpg" />
       <img src={Jean} alt="Portrait of Jean Ferreira" />
     </picture>
</div>
   </div>
  )
}

export default Profiles;
