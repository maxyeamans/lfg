import React from "react";
import "./SearchGroup.css";
import JoinGroupModal from "../JoinGroupModal";

const SearchGroup = props => (


  <div data-id={props.group._id} className="results-box" >
 
    <ul className="list-group">
      <li className="list-group-item">
        <h5>
        {props.group.groupName}
        </h5>
      </li>
      <li className="list-group-item">
        Console:
        {props.group.platform}
      </li>
      <li className="list-group-item">
        Rank:
        {props.group.groupRank}
      </li>
      <li className="list-group-item">
        Time Played:
        {props.group.time}
      </li>
      {/* <button className="btn btn-primary search-group-btn" id={props.group._id} onClick={ () => props.handleGroupJoin(props.group._id) }>Request Join</button> */}
      <JoinGroupModal id={props.group._id} />
    </ul>
  </div>
);

export default SearchGroup;
