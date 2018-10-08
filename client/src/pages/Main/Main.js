import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import SearchBtn from "../../components/SearchBtn";
import CreateGroupBtn from "../../components/CreateGroupBtn";
import CurrentGroups from "../../components/CurrentGroups";
// import MainProfile from "../../components/MainProfile";
import Footer from "../../components/Footer";
// import ProfileModal from "../../components/ProfileModal";
import API from "../../utils/API";
import "./main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      login: [],
      globalId: ""
      

    };
  }

  componentDidMount() {
    // this.loadUsers();
    // this.loadProfiles();
    this.loadLogin();
    this.loadGroups();
    
  }



  loadUsers = () => {
    // gets all users
    API.getUsers()
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  };

  loadLogin = () => {
    API.getLogin()
    .then(res => this.setState({ login: res.data }))
    .catch(err => console.log(err));
    console.log(this.state.login);
    
  }

  // loadProfiles = () => { // gets all profiles
  //   API.getProfiles()
  //     .then(res => this.setState({ profiles: res.data }))
  //     .catch(err => console.log(err));
  // };

  // ######################################################
  // WE WILL NEED TO UPDATE LOAD GROUPS TO ONLY LOAD GROUPS OUR USER BELONGS TO
  // #####################################################
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
          <Col size="xl-8 sm-8">
            <div className="mygroups">
              <h1>MY GROUPS</h1>

              {/* PLAYER TAG IS DEFAULTED TO PLAYER # IF PLAYER DOES NOT EXIST, MAY NEED AN IF COMMAND TO PREVENT THIS FROM RENDERING */}
              {this.state.groups.map(group => (
                <CurrentGroups
                  data={group}
                  groupName={group.groupName}
                  platform={group.platform}
                  groupRank={group.groupRank}
                  time={group.time}
                  player1={group.player1.gamertag}
                  player2={group.player2.gamertag}
                  player3={group.player3.gamertag}
                  player4={group.player4.gamertag}
                  player5={group.player5.gamertag}
                  player6={group.player6.gamertag}
                />
              ))}
            </div>
          </Col>
          {/* Start Column 2 */}

          <Col size="xl-4 sm-4">
            <Row>
              {/* <container className="creategroupSearch"> */}
              <Col size="xl-6 sm-6">
                <Row>
                  <div class="buttons">
                    <CreateGroupBtn />
                  </div>
                </Row>
                <Row>
                  <div class="buttons">
                    <SearchBtn />
                  </div>
                </Row>
              </Col>

              {/* </container> */}
            </Row>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Main;
