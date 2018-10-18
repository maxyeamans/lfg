import React from "react";
import "./CurrentMessage.css";
import { Col, Row, Container } from "../Grid";
// import { Button } from "react-bootstrap";




const CurrentMessage = props => (
  <div className="card current-groups">
    <Row>
      <Col size="xl-12 sm-12">
        <ul className="list-group">
          <li className="list-group-item">
            Gamertag:
            {props.gamertag}
          </li>
          <li className="list-group-item">
            Date:
            {props.date}
          </li>
          <li className="list-group-item">
            Message:
            {props.message}
          </li>
          
        </ul>
      </Col>
      
    </Row>
  </div>
);

export default CurrentMessage;
