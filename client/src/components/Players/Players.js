import React from "react";
import "./Players.css";
import { Col, Row, Container } from "../Grid";
import DeleteBtn from "../DeleteBtn/DeleteBtn";

const Players = props => (
  <div className="card">
    <Row>
      <Col size="xl-4 sm-4">
        <div id="player-name">
          <strong>{props.gamertag}</strong>
        </div>
      </Col>
      <Col size="xl-8 sm-8">
        <Row>
          <Col size="xl-6 sm-6">
            <div class="player-item">
              {props.role}
            </div>
          </Col>
          <Col size="xl-6 sm-6">
            <div class="player-item">
              {props.rank}
              <DeleteBtn />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default Players;
