import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Social = ({ className, icon }) => {
  return (
    <>
      <a href="/">
        <FontAwesomeIcon icon={icon} className={className} />
      </a>
    </>
  );
};
