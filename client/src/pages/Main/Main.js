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
// import SearchGroup from "../../components/SearchGroup";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      userGroups: [],
      globalId: ""

    };
  }

  componentDidMount() {
    // this.loadUsers();
    // this.loadProfiles();
    this.loadLogin();
    this.loadGroups();
    this.handleGroups();
  }



  loadUsers = () => {
    // gets all users
    API.getUsers()
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  };

  loadLogin = () => {
    API.getLogin()
      .then(res => this.setState({ globalId: res.data._id }))
      .catch(err => console.log(err));


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

  handleGroups = () => {
    console.log("Global ID: " + this.state.globalId);
    console.log(this.state.groups);
    this.state.groups.map(group => {
      if (this.state.globalId === group.player1.user || group.player2.user || group.player3.user || group.player4.user || group.player5.user || group.player6.user) {
        this.state.userGroups.push(group);
      }
    });
  }


  // _onChange = event => {
  //   event.preventDefault();
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  render() {
    return (
      // NAV IS RIGHT HERE

      <Container fluid>
        
        <Row>
        
          <Col size="xl-12 lg-6">
          <div id="mainpage-content">
          <h1> Looking For Group</h1>
          
          
          <h3>Create and join groups with other Overwatch players!</h3>
          </div>
          </Col>
        </Row>

        <Row>
          {/* <container className="creategroupSearch"> */}
          <Col size="xl-6 lg-6">
            <div class="button1">
              <CreateGroupBtn />
            </div>
          </Col>
          <Col size="xl-6 lg-6">
            <div class="button2">
              <SearchBtn />
            </div>

          </Col>
        </Row>
        {/* </container> */}



        <Row>
          <Col size="xl-12 sm-8">
            <div className="mygroups">
              <h2>MY CURRENT GROUPS ▼</h2>

              {/* PLAYER TAG IS DEFAULTED TO PLAYER # IF PLAYER DOES NOT EXIST, MAY NEED AN IF COMMAND TO PREVENT THIS FROM RENDERING */}
              {this.handleGroups()}
              {this.state.userGroups.map(group => (
                <CurrentGroups
                  data={group}
                  _id={group._id}
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
                  player1Role={group.player1.role}
                  player1Rank={group.player1.rank}
                />
              ))}
            </div>
          </Col>
        </Row>
        <Footer />
    
      </Container>
    );
  }
}

export default Main;
