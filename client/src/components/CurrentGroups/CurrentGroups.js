import React from "react";
import "./CurrentGroups.css";
import { Col, Row, Container } from "../Grid";
import ManageGroupModal from "../ManageGroupModal";
import ManagePlayersModal from "../ManagePlayersModal";
import { Button } from "react-bootstrap";
import Messages from "./../../pages/Messages";




const CurrentGroups = props => (
  <div className="card current-groups">
    <Row>
      <Col size="xl-6 sm-6">
        <ul className="list-group">
          <li className="list-group-item">
            <h5>Group name:</h5>
            {props.groupName}
          </li>
          <li className="list-group-item">
            <h5>Members:</h5>
            {props.player1}, {props.player2}, {props.player3}, {props.player4},{" "}
            {props.player5}, {props.player6}
          </li>
          <li className="list-group-item">
            <h5>Console:</h5>
            {props.platform}
          </li>
          <li className="list-group-item">
            <h5>Group Rank:</h5>
            {props.groupRank}
          </li>
          <li className="list-group-item">
            <h5>Next session time:</h5>
            {props.time}
          </li>
        </ul>
      </Col>
      <Col size="xl-6 sm-6">
        <ul className="list-group">
          <li className="list-group-item">
            <h5>Gamer Tag:</h5>
            {props.playerName}
          </li>
          <li className="list-group-item">
            <h5>My Role:</h5>
            {props.playerRole}
          </li>
          <li className="list-group-item">
            <h5>My Rank:</h5>
            {props.playerRank}
          </li>
          <li hidden id={props.user} className="list-group-item">
            
            
          </li>
          <li hidden id={props._id} className="list-group-item">
            
            {/* {props._id} */}
          </li>
        </ul>
      </Col>
    </Row>
    {/* <button className="manage-groups-btn"
    // onClick={() => props.saveArticles(props.data)}
    >

      Manage
      </button> */}
    <Row>
      <ManageGroupModal idGroup={props._id}/>
      <ManagePlayersModal groupInfo={props.data} idGroup={props._id}/>
      <Button
          className="manage-groups-btn"
          onClick={() => localStorage.setItem("groupId", props._id)}
        >
          <a id="messages-btn" href="/messages" role="button">View Messages</a>
          
        </Button>

    </Row>
  </div>
);

export default CurrentGroups;
