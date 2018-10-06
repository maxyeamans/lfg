import React from "react";
import "./EditProfileBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const EditProfileBtn = props => (
  <button className="edit-profile-btn" {...props}>
    Settings
  </button>
);

export default EditProfileBtn;
