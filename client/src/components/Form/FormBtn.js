import React from "react";

export const FormBtn = props => (
  <button {...props} style={{  marginBottom: 20  }} className="btn btn-success">
    {props.children}
  </button>
);