import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import SearchBtn from "../../components/SearchBtn";
import CreateGroupBtn from "../../components/CreateGroupBtn";
import CurrentGroups from "../../components/CurrentGroups";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import Players from "../../components/Players";
import "./UpdateGroup.css";
import { runInThisContext } from "vm";
import ManageGroupModal from "../../components/ManageGroupModal";

class UpdateGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: {},
      players: [],
      groupId: "",
      globalId: ""
    };
  }

  componentDidMount() {
    let url = window.location.pathname;
    this.getAllUrlParams(url);
  }

  loadGroup = groupId => {
    API.getGroup(groupId)
      .then(res =>
        this.setState({ group: res.data }, function() {
          console.log(this.state.group + " Group loaded!! :)");
          this.loadPlayers();
        })
      )
      .catch(err => console.log(err));
  };

  loadPlayers = () => {
    let players = [
      this.state.group.player1,
      this.state.group.player2,
      this.state.group.player3,
      this.state.group.player4,
      this.state.group.player5,
      this.state.group.player6
    ];

    this.setState({ players: players }, function() {
      console.log(this.state.players + " Players loaded!! :)");
    });
  };

  getAllUrlParams = url => {
    let queryString = url ? url.split("?")[0] : window.location.search.slice(1);
    let groupId;
    if (queryString) {
      queryString = queryString.split("updategroup/")[1];
      groupId = queryString;
    }
    this.setState({ groupId: groupId }, function() {
      this.loadGroup(this.state.groupId);
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      // NAV IS RIGHT HERE

      <Container fluid>
        <div className="card">
          <Row>
            <Col size="xl-12 sm-12">
              <ul className="list-group">
                <li id="group-name" className="list-group-item">
                  <strong>Group name:</strong>
                  {this.state.group.groupName}
                </li>
                <li className="list-group-item">
                  <strong>Members:</strong>
                  {this.state.group.groupName}
                </li>
                <li className="list-group-item">
                  <strong>Console:</strong>
                  {this.state.group.platform}
                </li>
                <li className="list-group-item">
                  <strong>Group Rank:</strong>
                  {this.state.group.groupRank}
                </li>
                <li className="list-group-item">
                  <strong>Times:</strong>
                  {this.state.group.time}
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <Row>
          {this.state.players
            .filter(player => player.state != 0)
            .map(player => (
              <Players
                data={player}
                gamertag={player.gamertag}
                role={player.role}
                state={player.state}
                rank={player.rank}
              />
            ))}
        </Row>
      </Container>
    );
  }
}

export default UpdateGroup;
