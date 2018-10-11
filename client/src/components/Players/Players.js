import React from "react";
import "./Players.css";
import { Col, Row, Container } from "../Grid";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import ManagePlayersModal from "../../components/ManagePlayersModal";

const Players = props => (
  <div className="card">
    <Row>
      <Col size="xl-3 sm-3">
        <div id="player-name">
          <strong>{props.gamertag}</strong>
        </div>
      </Col>
      <Col size="xl-6 sm-6">
        <Row>
          <Col size="xl-6 sm-6">
            <div class="player-item">{props.role}</div>
          </Col>
          <Col size="xl-6 sm-6">
            <div class="player-item">{props.rank}</div>
          </Col>
        </Row>
      </Col>
      <Col size="xl-3 sm-3">
        <ManagePlayersModal />
      </Col>
    </Row>
  </div>
);

export default Players;
