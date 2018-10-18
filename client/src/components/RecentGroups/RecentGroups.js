import React from "react";
import "./RecentGroups.css";
import JoinGroupModal from "../JoinGroupModal";

const RecentGroups = props => (


  <div data-id={props.group._id} className="recent-results" >
 
    <ul className="list-group">
      <li className="list-group-item-a">
     <h5> 
        {props.group.groupName}
        </h5>
      </li>
      <li className="list-group-item1">
        Console:
        {props.group.platform}
      </li>
      <li className="list-group-item1">
        Rank:
        {props.group.groupRank}
      </li>
      <li className="list-group-item1">
        Next Session:
        {props.group.time}
      </li>
      {/* <button className="btn btn-primary search-group-btn" id={props.group._id} onClick={ () => props.handleGroupJoin(props.group._id) }>Request Join</button> */}
      <JoinGroupModal id={props.group._id} />
    </ul>
  </div>
);

export default RecentGroups;
