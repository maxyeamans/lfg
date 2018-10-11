import React from "react";
import "./CurrentGroups.css";
import { Col, Row, Container } from "../Grid";
import ManageGroupModal from "../ManageGroupModal";
import ManagePlayersModal from "../ManagePlayersModal";
import { Link } from 'react-router-dom'




const CurrentGroups = props => (
  <div className="card current-groups">
    <Row>
      <Col size="xl-6 sm-6">
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Group name:</strong>
            {props.groupName}
          </li>
          <li className="list-group-item">
            <strong>Members:</strong>
            {props.player1}, {props.player2}, {props.player3}, {props.player4},{" "}
            {props.player5}, {props.player6}
          </li>
          <li className="list-group-item">
            <strong>Console:</strong>
            {props.platform}
          </li>
          <li className="list-group-item">
            <strong>Group Rank:</strong>
            {props.groupRank}
          </li>
          <li className="list-group-item">
            <strong>Times:</strong>
            {props.time}
          </li>
        </ul>
      </Col>
      <Col size="xl-6 sm-6">
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Gamer Tag:</strong>
            {/* {props.gamertag} */}
          </li>
          <li className="list-group-item">
            <strong>My Role:</strong>
            {/* {props.role} */}
          </li>
          <li className="list-group-item">
            <strong>My Rank:</strong>
            {/* {props.rank} */}
          </li>
          <li className="list-group-item">
            <strong>User ID:</strong>
            {/* {props.user} */}
          </li>
          <li hidden id={props._id} className="list-group-item">
            
            {/* {props._id} */}
          </li>
        </ul>
      </Col>
    </Row>
    <Row>
<<<<<<< HEAD
      <ManageGroupModal />
      <ManagePlayersModal groupInfo={props.data} />
      <Link to={`/updategroup/${props.data._id}`} activeClassName="manage-groups-btn">View Group</Link>
=======
      <ManageGroupModal idGroup={props._id}/>
      <ManagePlayersModal groupInfo={props.data}/>
>>>>>>> c43f80c9aa98b15838b2717a16c1c9d1d49ba85f
    </Row>
  </div>
);

export default CurrentGroups;
