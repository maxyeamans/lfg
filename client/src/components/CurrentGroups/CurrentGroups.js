import React from "react";
import "./CurrentGroups.css";
import { Col, Row, Container } from "../Grid";

const CurrentGroups = props => (

  <div className="card current-groups">
    <Row>
      <Col size="xl-6 sm-6">
        <ul className="list-group">

          <li id="group-name" className="list-group-item">
            <strong>Group name:</strong>
            {/* {props.groupName} */}
          </li>
          <li className="list-group-item">
            <strong>Members:</strong>
            {/* {props.members} */}
          </li>
          <li className="list-group-item">
            <strong>Platform:</strong>
            {/* {props.platform} */}
          </li>
          <li className="list-group-item">
            <strong>Group Rank:</strong>
            {/* {props.groupRank} */}
          </li>
          <li className="list-group-item">
            <strong>Times:</strong>
            {/* {props.time} */}
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
          
        </ul>
      </Col>
    </Row>
    <button className="manage-groups-btn"
    // onClick={() => props.saveArticles(props.data)}
    >

      Manage
      </button>

  </div>
);

export default CurrentGroups;