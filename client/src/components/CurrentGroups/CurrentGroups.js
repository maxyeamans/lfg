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
            Group name:
            {props.groupName}
          </li>
          <li className="list-group-item">
            Members:
            {props.player1}, {props.player2}, {props.player3}, {props.player4},{" "}
            {props.player5}, {props.player6}
          </li>
          <li className="list-group-item">
            Console:
            {props.platform}
          </li>
          <li className="list-group-item">
            Group Rank:
            {props.groupRank}
          </li>
          <li className="list-group-item">
            Next session time:
            {props.time}
          </li>
        </ul>
      </Col>
      <Col size="xl-6 sm-6">
        <ul className="list-group">
          <li className="list-group-item">
            Gamer Tag:
            {props.player1}
          </li>
          <li className="list-group-item">
            My Role:
            {props.player1Role}
          </li>
          <li className="list-group-item">
            My Rank:
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
      <Button
          id="messages-btn"
          bsStyle="primary"
          bsSize="large"
          onClick={() => localStorage.setItem("groupId", props._id)}
        >
          <a className="btn btn-primary pmodal-button"  href="/messages" role="button">View Messages</a>
          
        </Button>

    </Row>
  </div>
);

export default CurrentGroups;
