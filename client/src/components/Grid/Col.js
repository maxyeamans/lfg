import React from "react";

export const Col = ({ size, children , style = {}}) => (
  <div style={style} className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>
);
