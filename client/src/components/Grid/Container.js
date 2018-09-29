import React from "react";

export const Container = ({ fluid, children, style }) => (
  <div style={style} className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
