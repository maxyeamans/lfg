import React from "react";
import "./RecentGroups.css";
import JoinGroupModal from "../JoinGroupModal";

const RecentGroups = props => (


  <div data-id={props.group._id} className="recent-results" >
 
    <ul className="list-group">
      <li className="list-group-item1">
        <strong>Name:</strong>
        {props.group.groupName}
      </li>
      <li className="list-group-item1">
        <strong>Console:</strong>
        {props.group.platform}
      </li>
      <li className="list-group-item1">
        <strong>Rank:</strong>
        {props.group.groupRank}
      </li>
      <li className="list-group-item1">
        <strong>Time Played:</strong>
        {props.group.time}
      </li>
      {/* <button className="btn btn-primary search-group-btn" id={props.group._id} onClick={ () => props.handleGroupJoin(props.group._id) }>Request Join</button> */}
      <JoinGroupModal id={props.group._id} />
    </ul>
  </div>
);

export default RecentGroups;
