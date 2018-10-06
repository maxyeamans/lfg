import React from "react";
import "./SearchGroup.css";

const SearchGroup = props => (
  <div className="card my-3">
    <ul className="list-group">
      <li className="list-group-item">
        <strong>Name:</strong>
        {props.groupName}
      </li>
      <li className="list-group-item">
        <strong>Console:</strong>
        {props.platform}
      </li>
      <li className="list-group-item">
        <strong>Rank:</strong>
        {props.groupRank}
      </li>
      <button className="btn btn-primary search-group-btn">Request Join</button>
    </ul>
  </div>
);

export default SearchGroup;
