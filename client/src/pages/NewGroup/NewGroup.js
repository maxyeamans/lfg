import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import API from "../../utils/API";

class NewGroup extends Component {
  state = {
    groupName: "",
    platform: "",
    groupRank: "",
    time: "",
    gamertag: "",
    role: "",
    rank: "",
    user: ""
    
};

  componentDidMount() {}

  loadGroups = () => {
    // gets all users
    API.getGroups()
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
  };

  createNewGroup = (groupName, platform, groupRank, time, gamertag, role, rank) => {
    console.log(groupName);
    API.saveGroup({
      groupName: groupName,
      platform: platform,
      groupRank: groupRank,
      time: time,
      player1: {
        gamertag: gamertag,
        role: role,
        state: 2,
        rank: rank,
        user: "5bb55f5c34be1235a0edeeed"
      }
      
    })
      .then(res => this.loadGroups())
      .catch(err => console.log(err));
  }

  // _onChange = event => {
  //   event.preventDefault();
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // action="/register" method="post" // took this out of form.

  render() {
    return (
      // NAV IS RIGHT HERE
      <Container fluid>
        <Row>
          <Col size="xl-2 sm-2"/>
          <Col size="xl-8 sm-8">
            <form className="m-4">
              <div className="form-group">
                <label for="groupName">Group Name</label>
                <input
                  type="groupName"
                  className="form-control"
                  name="groupName"
                  placeholder="Group Name"
                  onChange={this.handleInputChange}
                  value={this.state.groupName}
                />
              </div>
              <div className="form-group">
                <label for="platform">Platform</label>
                <input
                  type="platform"
                  className="form-control"
                  name="platform"
                  placeholder="Platform"
                  onChange={this.handleInputChange}
                  value={this.state.platform}
                />
              </div>
              <div className="form-group">
                <label for="groupRank">Group Rank</label>
                <input
                  type="groupRank"
                  className="form-control"
                  name="groupRank"
                  placeholder="Group Rank"
                  onChange={this.handleInputChange}
                  value={this.state.groupRank}
                />
              </div>
              <div className="form-group">
                <label for="time">Game Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  placeholder="Game Time"
                  onChange={this.handleInputChange}
                  value={this.state.time}
                />
              </div>
              <div className="form-group">
                <label for="gamertag">Gamertag</label>
                <input
                  type="gamertag"
                  className="form-control"
                  name="gamertag"
                  placeholder="Gamertag"
                  onChange={this.handleInputChange}
                  value={this.state.gamertag}
                />
              </div>
              <div className="form-group">
                <label for="role">Role</label>
                <input
                  type="role"
                  className="form-control"
                  name="role"
                  placeholder="Role"
                  onChange={this.handleInputChange}
                  value={this.state.role}
                />
              </div>
              <div className="form-group">
                <label for="rank">Player Rank</label>
                <input
                  type="rank"
                  className="form-control"
                  name="rank"
                  placeholder="Player Rank"
                  onChange={this.handleInputChange}
                  value={this.state.rank}
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={() => this.createNewGroup(this.state.groupName, this.state.platform, this.state.groupRank, this.state.time, this.state.gamertag, this.state.role, this.state.rank)}>
                Submit
              </button>
            </form>
          </Col>
          <Col size="xl-2 sm-2"/>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default NewGroup;
