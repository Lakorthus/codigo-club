import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = ({ className, icon }) => {
  return (
    <>
      <a href="/">
        <FontAwesomeIcon icon={icon} className={className} />
      </a>
    </>
  );
};

export default Social;