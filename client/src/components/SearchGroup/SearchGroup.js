import React from "react";
import "./SearchGroup.css";

const SearchGroup = props => (


  <div data-id={props.group._id} className="card my-3" >
 
    <ul className="list-group">
      <li className="list-group-item">
        <strong>Name:</strong>
        {props.group.groupName}
      </li>
      <li className="list-group-item">
        <strong>Console:</strong>
        {props.group.platform}
      </li>
      <li className="list-group-item">
        <strong>Rank:</strong>
        {props.group.groupRank}
      </li>
      <li className="list-group-item">
        <strong>Time Played:</strong>
        {props.group.time}
      </li>
      <button className="btn btn-primary search-group-btn" id={props.group._id} onClick={props.handleGroupJoin}>Request Join</button>
    </ul>
  </div>
);

export default SearchGroup;
