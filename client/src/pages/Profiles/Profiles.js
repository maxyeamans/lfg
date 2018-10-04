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
    this.state = {};
  }

  componentDidMount() {
    this.loadUsers();
    this.loadProfiles();
    this.loadGroups();
  }

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
      .then(res => this.setState({ groups: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
  };

  // _onChange = event => {
  //   event.preventDefault();
  //   this.setState({ [event.target.name]: event.target.value });
  // };

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
