import React from "react";
import "./UpdatePlayerBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const UpdatePlayerBtn = props => (
  <span className="updatep-btn"  {...props}>
    Update
  </span>
);

export default UpdatePlayerBtn;



