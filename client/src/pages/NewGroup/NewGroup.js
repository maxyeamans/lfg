import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import "./NewGroup.css";
import Nav from "../../components/Nav";

class NewGroup extends Component {
  state = {
    groupName: "",
    platform: "",
    groupRank: "",
    time: "",
    gamertag: "",
    role: "",
    rank: "",
    user: localStorage.getItem("globalId"),
    groups: []
    
};

  componentDidMount() {
    this.loadLogin();
    this.deleteGroupId();
    console.log("this is our initial state: ", this.state)
  }

  componentDidUpdate(){
    console.log("our component updated, here is the new state: ", this.state)
  }

  loadLogin = () => {
    this.setState({ user: localStorage.getItem("globalId") });
    
    
  }

  loadGroups = () => {
    // gets all users
    API.getGroups()
      .then(res => this.setState({ groups: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
  };

  createNewGroup = (groupName, platform, groupRank, time, gamertag, role, rank, user) => {
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
        user: user
      }
      
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  deleteGroupId = () => {
    localStorage.removeItem("groupId");

  };

  // _onChange = event => {
  //   event.preventDefault();
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // action="/register" method="post" // took this out of form.

  render() {
    return (
      // NAV IS RIGHT HERE
      <Container fluid>
      <Nav/>
        <Row>
          <Col size="xl-2 sm-2"/>
          <Col size="xl-8 sm-8">
            <form className="m-4">
            <h1> Create a New Group</h1>
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
                <select className="form-control" name="platform" value={this.state.platform} onChange={this.handleInputChange}>
                  <option value="">Choose Platform</option>
                  <option value="PC">PC</option>
                  <option value="Xbox">Xbox</option>
                  <option value="Playstation">Playstation</option>
                  
                </select>
              </div>
              <div className="form-group">
                <label for="groupRank">Group Rank</label>
                <select className="form-control" name="groupRank" value={this.state.groupRank} onChange={this.handleInputChange}>
                  <option value="">Choose Rank (7)</option>
                  <option value="Bronze">Bronze</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                  <option value="Platinum">Platinum</option>
                  <option value="Diamond">Diamond</option>
                  <option value="Master">Master</option>
                  <option value="Grand Master">Grand Master</option>
                </select>
              </div>
              <div className="form-group">
                <label for="time">Game Time</label>
                <input
                  type="gametime"
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
                <select className="form-control" name="rank" value={this.state.rank} onChange={this.handleInputChange}>
                  <option value="">Choose Rank (7)</option>
                  <option value="Bronze">Bronze</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                  <option value="Platinum">Platinum</option>
                  <option value="Diamond">Diamond</option>
                  <option value="Master">Master</option>
                  <option value="Grand Master">Grand Master</option>
                </select>
              </div>
              <button type="submit" className="newGroup-submit" onClick={() => this.createNewGroup(this.state.groupName, this.state.platform, this.state.groupRank, this.state.time, this.state.gamertag, this.state.role, this.state.rank, this.state.user)}>
                Submit
              </button>
            </form>
          </Col>
          <Col size="xl-2 sm-2"/>
        </Row>
        <div id="footer-space">

        </div>

        <Footer />
      </Container>
    );
  }
}

export default NewGroup;
