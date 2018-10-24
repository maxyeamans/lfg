import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import SearchBtn from "../../components/SearchBtn";
import CreateGroupBtn from "../../components/CreateGroupBtn";
import CurrentGroups from "../../components/CurrentGroups";
// import MainProfile from "../../components/MainProfile";
import Footer from "../../components/Footer";
// import ProfileModal from "../../components/ProfileModal";
import API from "../../utils/API";
import "./MyPage.css";
// import SearchGroup from "../../components/SearchGroup";
import Nav from "../../components/Nav";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      userGroups: [],
      globalId: "",
      dataArray: []
    };
  }

  componentDidMount() {
    this.loadUser();
    // this.loadProfiles();
    // this.loadLogin();
    this.loadGroups();
    // this.handleGroups();
  }

  loadUser = () => {
    let username = localStorage.getItem("username");
    console.log(username);
    API.getUsers()
      // .then(res => this.setState({ globalId: res.data._id }))
      // .then(res => localStorage.setItem("globalId", res.data._id))
      .then(res =>
        res.data.map(group => {
          if (username === group.username) {
            this.setState({ globalId: group._id });
            localStorage.setItem("globalId", group._id);
          }
        })
      )
      .then(this.handleGroups())
      .catch(err => console.log(err));
  };

  // loadUser = () => {
  //   let username = localStorage.getItem("username");
  //   console.log(username);
  //   API.getUserName(username)
  //     .then(res => this.setState({ globalId: res.data._id }))
  //     .then(res => localStorage.setItem("globalId", res.data._id))

  //     .then(this.handleGroups())
  //     .catch(err => console.log(err));

  // };

  // loadProfiles = () => { // gets all profiles
  //   API.getProfiles()
  //     .then(res => this.setState({ profiles: res.data }))
  //     .catch(err => console.log(err));
  // };

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
      if (
        this.state.globalId === group.player1.user ||
        group.player2.user ||
        group.player3.user ||
        group.player4.user ||
        group.player5.user ||
        group.player6.user
      ) {
        if (this.state.globalId === group.player1.user) {
          group.playerName = group.player1.gamertag;
          group.role = group.player1.role;
          group.rank = group.player1.rank;
        } else if (this.state.globalId === group.player2.user) {
          group.playerName = group.player2.gamertag;
          group.role = group.player2.role;
          group.rank = group.player2.rank;
        } else if (this.state.globalId === group.player3.user) {
          group.playerName = group.player3.gamertag;
          group.role = group.player3.role;
          group.rank = group.player3.rank;
        } else if (this.state.globalId === group.player4.user) {
          group.playerName = group.player4.gamertag;
          group.role = group.player4.role;
          group.rank = group.player4.rank;
        } else if (this.state.globalId === group.player5.user) {
          group.playerName = group.player5.gamertag;
          group.role = group.player5.role;
          group.rank = group.player5.rank;
        } else if (this.state.globalId === group.player6.user) {
          group.playerName = group.player6.gamertag;
          group.role = group.player6.role;
          group.rank = group.player6.rank;
        } else {
          console.log("You are not a member of this group...");
        }
        this.state.userGroups.push(group);
      }
    });
  };

  // _onChange = event => {
  //   event.preventDefault();
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  render() {
    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Nav />

        <h1>MY CURRENT GROUPS </h1>

        <div id="groups-image" />

        <div className="mygroups">
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
              playerName={group.playerName}
              playerRole={group.role}
              playerRank={group.rank}
            />
          ))}
        </div>

        <Footer />
      </Container>
    );
  }
}

export default Main;
