import React from "react";
import "./UpdateGroupBtn.css";

const UpdateGroupBtn = props => (
  <form action="/updategroup">
    <input type="submit" value="Update Group" className="update-groups-btn" />
  </form>
);

export default UpdateGroupBtn;
