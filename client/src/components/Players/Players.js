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

    // this.handleShow = this.handleShow.bind(this);
    // this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      gamertag: "",
      role: this.props.role,
      rank: this.props.rank,
      _id: this.props.id,
      user: this.props.user,
      player: this.props.data,
      playerInfo: {},

      state: this.props.state
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

  // handleGroupId = () => {
  //   this.setState({_id: this.props.idGroup})
  // }

  loadGroup = () => {
    // console.log()
    API.getGroup(this.state._id)
      .then(res =>
        this.setState({
          playerInfo: res.data
        })
      )
      .catch(err => console.log(err));
  };

  readPlayer = () => {
    console.log(this.state.player);
    console.log(this.state.playerInfo);
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

  handleDelete = event => {
    event.preventDefault();

    if (this.state.playerInfo.player1.user === this.state.user) {
      API.updateGroup({
        _id: this.state._id,
        player1: {
          state: 0,
          gamertag: "Player 1",
          role: "none",
          rank: "",
          user: ""
        }
      })
        .then(res =>
          console.log("Sucessfully removed player from group! " + res)
        )
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player2.user === this.state.user) {
      API.updateGroup({
        _id: this.state._id,
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
        _id: this.state._id,
        player3: {
          state: 0,
          gamertag: "Player 3",
          role: "",
          rank: "",
          user: ""
        }
      })
        .then(res =>
          console.log("Sucessfully removed player from group! " + res)
        )
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player4.user === this.state.user) {
      API.updateGroup({
        _id: this.state._id,
        player4: {
          state: 0,
          gamertag: "Player 4",
          role: "",
          rank: "",
          user: ""
        }
      })
        .then(res =>
          console.log("Sucessfully removed player from group! " + res)
        )
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player5.user === this.state.user) {
      API.updateGroup({
        _id: this.state._id,
        player5: {
          state: 0,
          gamertag: "Player 5",
          role: "",
          rank: "",
          user: ""
        }
      })
        .then(res =>
          console.log("Sucessfully removed player from group! " + res)
        )
        .catch(err => console.log(err));
    } else if (this.state.playerInfo.player6.user === this.state.user) {
      API.updateGroup({
        _id: this.state._id,
        player6: {
          state: 0,
          gamertag: "Player 6",
          role: "",
          rank: "",
          user: ""
        }
      })
        .then(res =>
          console.log("Sucessfully removed player from group! " + res)
        )
        .catch(err => console.log(err));
    }
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
    return (
      <Container>
        <div className="card">
          <Row>
            <Col size="xl-12 sm-12">
              <UpdatePlayerBtn type="submit" onClick={this.handleFormSubmit} />
              <DeleteBtn type="" onClick={this.handleDelete} />
              <div id="player-name">
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
            <Col size="xl-8 sm-8">
              <Row>
                <Col size="xl-6 sm-6">
                  <div class="player-item">
                    <input
                      className="form-control"
                      type="text"
                      name="role"
                      placeholder={this.props.role}
                      onChange={this.handleInputChange}
                      value={this.state.role}
                    />
                  </div>
                </Col>
                <Col size="xl-6 sm-6">
                  <div class="player-item">
                    <select
                      className="form-control"
                      name="rank"
                      value={this.state.rank}
                      onChange={this.handleInputChange}
                    >
                      <option value="">Update Rank (7)</option>
                      <option value="Bronze">Bronze</option>
                      <option value="Silver">Silver</option>
                      <option value="Gold">Gold</option>
                      <option value="Platinum">Platinum</option>
                      <option value="Diamond">Diamond</option>
                      <option value="Master">Master</option>
                      <option value="Grand Master">Grand Master</option>
                    </select>
                    <DeleteBtn />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Players;
