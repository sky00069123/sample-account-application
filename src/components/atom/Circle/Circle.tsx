import React from "react";

import "./Circle.css";

export const Circle = ({ children }) => {
  return (
    <span className= "circle" data-test= "circle-span">
      {children}
    </span>
  );
};
