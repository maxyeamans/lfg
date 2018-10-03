import React from "react";
import "./CurrentGroups.css";

const CurrentGroups = props => (

  <div className="card current-groups">

    <ul className="list-group">

      <li className="list-group-item">
        <strong>Group name:</strong> 
        {/* {props.name} */}
      </li>
      <li className="list-group-item">
        <strong>Members:</strong> 
        {/* {props.members} */}
      </li>
      <button className="manage-groups-btn" 
      // onClick={() => props.saveArticles(props.data)}
      >
        Manage
      </button>
    </ul>
  </div>
);

export default CurrentGroups;