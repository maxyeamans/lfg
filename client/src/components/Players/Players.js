import React from "react";
import "./Players.css";
import { Col, Row, Container } from "../Grid";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import UpdatePlayerBtn from "../UpdatePlayerBtn";
import API from "../../utils/API";
import ManagePlayersModal from "../../components/ManagePlayersModal";

class Players extends React.Component {
  constructor(props) {
    super(props);

    this.determineLeader = this.determineLeader.bind(this);

    this.state = {
      show: false,
      gamertag: "",
      role: this.props.role,
      rank: this.props.rank,
      _id: this.props.id,
      user: localStorage.getItem("globalId"),
      player: this.props.data,
      playerInfo: {},
      state: this.props.state,
      isLeader: false,
      partyPostion: 1
    };
  }

  componentDidMount() {
    // this.handleGroupId();
    this.loadGroup();
    // this.readPlayer();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  determineLeader = () => {
    if (this.state.playerInfo.player1.user === this.state.user) {
      this.setState({ isLeader: true });
      console.log("User is leader of party, loading leader functionality...");
    } else if (this.state.playerInfo.player2.user === this.state.user) {
      this.setState({ partyPostion: 2 });
      console.log("You are player 2 in this group!");
    } else if (this.state.playerInfo.player3.user === this.state.user) {
      this.setState({ partyPostion: 3 });
      console.log("You are player 3 in this group!");
    } else if (this.state.playerInfo.player4.user === this.state.user) {
      this.setState({ partyPostion: 4 });
      console.log("You are player 4 in this group!");
    } else if (this.state.playerInfo.player5.user === this.state.user) {
      this.setState({ partyPostion: 5 });
      console.log("You are player 5 in this group!");
    } else if (this.state.playerInfo.player6.user === this.state.user) {
      this.setState({ partyPostion: 6 });
      console.log("You are player 6 in this group!");
    }
  };

  loadGroup = () => {
    API.getGroup(this.state._id)
      .then(res =>
        this.setState({ playerInfo: res.data }, function() {
          // Determine Leader function is loaded only after the playerInfo state is updated.
          this.determineLeader();
        })
      )
      .catch(err => console.log(err));
  };

  readPlayer = () => {
    console.log(this.state.player);
    console.log("Player info " + this.state.playerInfo);
  };

  updateCurrentPlayer = (_id, gamertag, role, rank, state, user) => {
    console.log(this.state.rank);
    if (this.state.playerInfo.player1.user === this.state.user) {
      API.updateGroup({
        _id: _id,
        player1: {
          state: state,
          gamertag: gamertag,
          role: role,
          rank: rank,
          user: user
        }
      })
        //.then(res => this.loadGroups())
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player2.user === this.state.user) {
      API.updateGroup({
        _id: _id,
        player2: {
          state: state,
          gamertag: gamertag,
          role: role,
          rank: rank,
          user: user
        }
      })
        //.then(res => this.loadGroups())
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player3.user === this.state.user) {
      API.updateGroup({
        _id: _id,
        player3: {
          state: state,
          gamertag: gamertag,
          role: role,
          rank: rank,
          user: user
        }
      })
        //.then(res => this.loadGroups())
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player4.user === this.state.user) {
      API.updateGroup({
        _id: _id,
        player4: {
          state: state,
          gamertag: gamertag,
          role: role,
          rank: rank,
          user: user
        }
      })
        //.then(res => this.loadGroups())
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player5.user === this.state.user) {
      API.updateGroup({
        _id: _id,
        player5: {
          state: state,
          gamertag: gamertag,
          role: role,
          rank: rank,
          user: user
        }
      })
        //.then(res => this.loadGroups())
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player6.user === this.state.user) {
      API.updateGroup({
        _id: _id,
        player6: {
          state: state,
          gamertag: gamertag,
          role: role,
          rank: rank,
          user: user
        }
      })
        //.then(res => this.loadGroups())
        .catch(err => console.log(err));
    }
  };

  handleDelete = _id => {
    if (this.state.playerInfo.player1.user === this.state.user) {
      API.updateGroup({
        _id: _id,
        player1: {
          state: "0",
          gamertag: "Player 1"
        }
      })
        // .then(res =>
        //   console.log("Sucessfully removed player from group! " + res)
        // )
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player2.user === this.state.user) {
      API.updateGroup({
        _id: _id,
        player2: {
          state: 0,
          gamertag: "Player 2",
          role: "",
          rank: "",
          user: ""
        }
      })
        .then(res =>
          console.log("Sucessfully removed player from group! " + res)
        )
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player3.user === this.state.user) {
      API.updateGroup({
        _id: _id,
        player3: {
          state: 0,
          gamertag: "Player 3",
          role: "",
          rank: "",
          user: ""
        }
      })
        // .then(res =>
        //   console.log("Sucessfully removed player from group! " + res)
        // )
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player4.user === this.state.user) {
      API.updateGroup({
        _id: _id,
        player4: {
          state: 0,
          gamertag: "Player 4",
          role: "",
          rank: "",
          user: ""
        }
      })
        // .then(res =>
        //   console.log("Sucessfully removed player from group! " + res)
        // )
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player5.user === this.state.user) {
      API.updateGroup({
        _id: _id,
        player5: {
          state: 0,
          gamertag: "Player 5",
          role: "",
          rank: "",
          user: ""
        }
      })
        // .then(res =>
        //   console.log("Sucessfully removed player from group! " + res)
        // )
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player6.user === this.state.user) {
      API.updateGroup({
        _id: _id,
        player6: {
          state: 0,
          gamertag: "Player 6",
          role: "",
          rank: "",
          user: ""
        }
      })
        // .then(res =>
        //   console.log("Sucessfully removed player from group! " + res)
        // )
        .catch(err => console.log(err));
    }
  };

  handleDeleteSubmit = event => {
    event.preventDefault();
    this.handleDelete(this.state._id, this.state.user);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.updateCurrentPlayer(
      this.state._id,
      this.state.gamertag,
      this.state.role,
      this.state.rank,
      this.state.state,
      this.state.user
    );
  };

  render() {
    const isLeader = this.state.isLeader;
    let deleteBtn;
    let updateBtn;

    // If user is the leader of the group, this will allow the buttons to render to update players.
    if (isLeader) {
      updateBtn = (
        <UpdatePlayerBtn type="submit" onClick={this.handleFormSubmit} />
      );
      deleteBtn = <DeleteBtn type="submit" onClick={this.handleDeleteSubmit} />;
    } else {
      updateBtn = (
        <div>
          <p>You cannot update this player.</p>
        </div>
      );
      deleteBtn = (
        <div>
          <p>You cannot remove this player.</p>
        </div>
      );
    }
    return (
      <Container>
        <div className="card">
          <Row>
            <Col size="xl-12 sm-12">
              <div id="player-gamertag">{this.state.player.gamertag}</div>
            </Col>
          </Row>
          <Row>
            <Col size="xl-2 lg-6">
              <div class="player-item">
                <input
                  className="form-control"
                  type="text"
                  name="gamertag"
                  placeholder={this.props.gamertag}
                  onChange={this.handleInputChange}
                  value={this.state.gamertag}
                />
              </div>
            </Col>

            <Col size="xl-3 lg-6">
              <div class="player-item">
                <select
                  className="form-control"
                  name="role"
                  value={this.state.role}
                  onChange={this.handleInputChange}
                >
                  <option value="">Update role (7)</option>
                  <option value="Tank" name="role">
                    Tank
                  </option>
                  <option value="Support" name="role">
                    Support
                  </option>
                  <option value="Attack" name="role">
                    Attack
                  </option>
                </select>
              </div>
            </Col>

            <Col size="xl-3 lg-6">
              <div class="player-item">
                <select
                  className="form-control"
                  name="rank"
                  value={this.state.rank}
                  onChange={this.handleInputChange}
                >
                  <option value="">Update Rank (7)</option>
                  <option value="Bronze" name="rank">
                    Bronze
                  </option>
                  <option value="Silver" name="rank">
                    Silver
                  </option>
                  <option value="Gold" name="rank">
                    Gold
                  </option>
                  <option value="Platinum" name="rank">
                    Platinum
                  </option>
                  <option value="Diamond" name="rank">
                    Diamond
                  </option>
                  <option value="Master" name="rank">
                    Master
                  </option>
                  <option value="Grand Master" name="rank">
                    Grand Master
                  </option>
                </select>
              </div>
            </Col>

            <Col size="xl-2 lg-6">
              {updateBtn}
            </Col>
            <Col size="xl-2 lg-6">
              {deleteBtn}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Players;
