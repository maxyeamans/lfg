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
    
    this.state = {
      show: false,
      gamertag: this.props.gamertag,
      role: this.props.role,
      rank: this.props.rank,
      _id: this.props.id,
      user: localStorage.getItem("globalId"),
      player: this.props.data,
      playerInfo: {},
      state: this.props.state,
      isLeader: false,
      partyPostion: 1,
      globalId: localStorage.getItem("globalId")
     
    }
  }

  componentDidMount() {
    this.loadGroup();
    
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  

  loadGroup = () => {
    API.getGroup(this.state._id)
      .then(res =>
        this.setState({ playerInfo: res.data }, function() {
          // Determine Leader function is loaded only after the playerIno state is updated.
          // this.determineLeader();

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
    if (this.state.playerInfo.player1.user === this.state.globalId) {
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
        // .then(res => this.loadGroup())
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
        // .then(res => this.loadGroup())
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
/////////////////////////////////////
  handleDelete = (_id) => {
    if (this.state.playerInfo.player1.user === this.state.user) {
      API.updateGroup({
        _id: _id,
        player1: {
          state: 0,
          gamertag: "Player 1",
          // role: "",
          // rank: "",
          // user: ""
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
          // role: "",
          // rank: "",
          // user: ""
        }
      })
        // .then(res =>
        //   console.log("Sucessfully removed player from group! " + res)
        // )
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player3.user === this.state.user) {
      API.updateGroup({
        _id: _id,
        player3: {
          state: 0,
          gamertag: "Player 3",
          // role: "",
          // rank: "",
          // user: ""
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
          // role: "",
          // rank: "",
          // user: ""
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
          // role: "",
          // rank: "",
          // user: ""
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
          // role: "",
          // rank: "",
          // user: ""
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
    
    if (this.state.playerInfo.player1.user === this.state.globalId) {
      this.handleDelete(this.state._id);
    }
    else if (this.state.playerInfo.player2.user === this.state.user) {
      this.handleDelete(this.state._id);
    }
    else if (this.state.playerInfo.player3.user === this.state.user) {
      this.handleDelete(this.state._id);
    }
    else if (this.state.playerInfo.player4.user === this.state.user) {
      this.handleDelete(this.state._id);
    }
    else if (this.state.playerInfo.player5.user === this.state.user) {
      this.handleDelete(this.state._id);
    }
    else if (this.state.playerInfo.player6.user === this.state.user) {
      this.handleDelete(this.state._id);
    }
    else {
      console.log("not a match");
    }
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.updateCurrentPlayer(
  //     this.state._id,
  //     this.state.gamertag,
  //     this.state.role,
  //     this.state.rank,
  //     this.state.state,
  //     this.state.user
  //   );
  // };

  handleUpdateSubmit = event => {
    event.preventDefault();
    console.log(this.state.user);
    console.log(this.state.globalId);
    if (this.state.playerInfo.player1.user === this.state.globalId) {
      this.updateCurrentPlayer(
        this.state._id,
        this.state.gamertag,
        this.state.role,
        this.state.rank,
        this.state.state,
        this.state.user
      );
    }
    else if (this.state.playerInfo.player2.user === this.state.user) {
      this.updateCurrentPlayer(
        this.state._id,
        this.state.gamertag,
        this.state.role,
        this.state.rank,
        this.state.state,
        this.state.user
      );
    }
    else if (this.state.playerInfo.player3.user === this.state.user) {
      this.updateCurrentPlayer(
        this.state._id,
        this.state.gamertag,
        this.state.role,
        this.state.rank,
        this.state.state,
        this.state.user
      );
    }
    else if (this.state.playerInfo.player4.user === this.state.user) {
      this.updateCurrentPlayer(
        this.state._id,
        this.state.gamertag,
        this.state.role,
        this.state.rank,
        this.state.state,
        this.state.user
      );
    }
    else if (this.state.playerInfo.player5.user === this.state.user) {
      this.updateCurrentPlayer(
        this.state._id,
        this.state.gamertag,
        this.state.role,
        this.state.rank,
        this.state.state,
        this.state.user
      );
    }
    else if (this.state.playerInfo.player6.user === this.state.user) {
      this.updateCurrentPlayer(
        this.state._id,
        this.state.gamertag,
        this.state.role,
        this.state.rank,
        this.state.state,
        this.state.user
      );
    }
    else {
      console.log("not a match");
    }
    
  }

  render() {
    
    return (
      <Container>
        <div className="card1">
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
                  id="player-name"
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
            <Col size="xl-2 lg-6"><UpdatePlayerBtn type="submit" onClick={this.handleUpdateSubmit} /></Col>
            <Col size="xl-2 lg-6"><DeleteBtn type="submit" onClick={this.handleDeleteSubmit} /></Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Players;
