import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import SearchBtn from "../../components/SearchBtn";
import CreateGroupBtn from "../../components/CreateGroupBtn";
import CurrentGroups from "../../components/CurrentGroups";
import Profile from "../../components/Profile";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import MainProfile from "../../components/MainProfile";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // globalId: localStorage.getItem('globalId')
    };

  }

  componentDidMount() {
    // this.loadUser();
    this.loadUsers();
    this.loadProfiles();
    this.loadGroups();
    this.deleteGroupId();
    
  }

  // loadUser = () => {
  //   let username = localStorage.getItem("username");
  //   console.log(username);
  //   API.getUsers()
  //     // .then(res => this.setState({ globalId: res.data._id }))
  //     // .then(res => localStorage.setItem("globalId", res.data._id))
  //     .then(res => res.data.map(group => {
  //       if (username === group.username) {
  //         this.setState({ globalId: group._id });
  //         localStorage.setItem("globalId", group._id);
  //       }
  //     }),
  //     )
  //     // .then(this.handleGroups())
  //     .catch(err => console.log(err));

  // };

  loadUsers = () => {
    // gets all users
    API.getUsers()
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  };
  loadProfiles = () => {
    // gets all profiles
    API.getProfiles()
      .then(res => this.setState({ profiles: res.data }))
      .catch(err => console.log(err));
  };
  loadGroups = () => {
    // gets all groups
    API.getGroups()
      .then(res => {
        if (this.state.globalId === res.data.player1.user || res.data.player2.user || res.data.player3.user || res.data.player4.user || res.data.player5.user || res.data.player6.user) {
        this.setState({ groups: res.data })
        }
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
  };

  deleteGroupId = () => {
    localStorage.removeItem("groupId");
  }

  render() {
    return (
      // NAV IS RIGHT HERE
      <Container fluid>
        <Row>
          {/* Start Column 1 */}
          <Col size="xl-6 sm-6">
            <MainProfile />
            {/* PROPS NEEDED: P1(profile 1) Time Played, P1 Most Played, P1 Ranking */}
          </Col>
          {/* Start Column 2 */}
          <Col size="xl-6 sm-6">
            <Row>
              <Col size="xl-12 sm-12">
                <Profile />
                {/* PROPS NEEDED: P2 Time Played, P2 Most Played, P2 Ranking */}
              </Col>
            </Row>
            <Row>
              <Col size="xl-12 sm-12">
                <Profile />
                {/* PROPS NEEDED: P3 Time Played, P3 Most Played, P3 Ranking */}
              </Col>
            </Row>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Profiles;
