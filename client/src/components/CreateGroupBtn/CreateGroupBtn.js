import React from "react";
import "./CreateGroupBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const CreateGroupBtn = props => (
  <form action="/newgroup">
    <input type="submit" value="Create New Group" className="group-btn" />
  </form>
);

export default CreateGroupBtn;
