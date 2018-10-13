import React from "react";
import "./CurrentGroups.css";
import { Col, Row, Container } from "../Grid";
import ManageGroupModal from "../ManageGroupModal";
import ManagePlayersModal from "../ManagePlayersModal";



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
            {props.player1}
          </li>
          <li className="list-group-item">
            <strong>My Role:</strong>
            {props.player1Role}
          </li>
          <li className="list-group-item">
            <strong>My Rank:</strong>
            {props.player1Rank}
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

    </Row>
  </div>
);

export default CurrentGroups;
