import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import SearchBtn from "../../components/SearchBtn";
import CreateGroupBtn from "../../components/CreateGroupBtn";
// import CurrentGroups from "../../components/CurrentGroups";
// import MainProfile from "../../components/MainProfile";
import Footer from "../../components/Footer";
// import ProfileModal from "../../components/ProfileModal";
import API from "../../utils/API";
import "./main.css";
import SearchGroup from "../../components/SearchGroup";
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
    // this.loadUser();
    // this.deleteGroupId();
    // this.loadLogin();
    this.loadNewGroups();
    // this.handleGroups();
  }

  // loadUser = () => {
  //   let username = localStorage.getItem("username");
  //   console.log(username);
  //   API.getUsers()
  //     // .then(res => this.setState({ globalId: res.data._id }))
  //     // .then(res => localStorage.setItem("globalId", res.data._id))
  //     .then(res =>
  //       res.data.map(group => {
  //         if (username === group.username) {
  //           this.setState({ globalId: group._id });
  //           localStorage.setItem("globalId", group._id);
  //         }
  //       })
  //     )
  //     .then(this.handleGroups())
  //     .catch(err => console.log(err));
  // };

  // loadUser = () => {
  //   let username = localStorage.getItem("username");
  //   console.log(username);
  //   API.getUserName(username)
  //     .then(res => this.setState({ globalId: res.data._id }))
  //     .then(res => localStorage.setItem("globalId", res.data._id))

  //     .then(this.handleGroups())
  //     .catch(err => console.log(err));

  // deleteGroupId = () => {
  //   localStorage.removeItem("groupId");
  // };

  // loadProfiles = () => { // gets all profiles
  //   API.getProfiles()
  //     .then(res => this.setState({ profiles: res.data }))
  //     .catch(err => console.log(err));
  // };

  loadNewGroups = () => {
    // gets all groups
    API.getNewGroups()
      .then(res =>
        this.setState(
          {
            groups: res.data
          },
          () => {
            console.log(this.state.groups + " groups! :D");
          }
        )
      )
      .catch(err => console.log(err));
  };

  handleGroupJoin = id => {
    // event.preventDefault();
    // this.setState({
    //   joinGroup: event.target.id
    // });
    console.log("Group ID getting sent to API.joinGroup", this.state.joinGroup);
    API.joinGroup({
      id: id,
      user: localStorage.getItem("globalId")
    });
    console.log("Request to Join was clicked.", this.state.joinGroup);
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleGroups = () => {
  //   console.log("Global ID: " + this.state.globalId);
  //   console.log(this.state.groups);
  //   this.state.groups.map(group => {
  //     if (
  //       this.state.globalId === group.player1.user ||
  //       group.player2.user ||
  //       group.player3.user ||
  //       group.player4.user ||
  //       group.player5.user ||
  //       group.player6.user
  //     ) {
  //       this.state.userGroups.push(group);
  //     }
  //   });
  // };

  // _onChange = event => {
  //   event.preventDefault();
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  //test message to see if my git commit is working
  render() {
    return (
      <Container fluid>
        <Nav />

        <div id="mainpage-content">
          <h1> Looking For Group</h1>

          <h3>Create and join groups with other Overwatch players!</h3>
        </div>

        <Row>

          <div class="button1">
            <CreateGroupBtn />
          </div>

          <div class="button2">
            <SearchBtn />
          </div>


        </Row>

        {/* <div id="main-first">
        </div>

        <div id="main-second">

          Most recent groups

           {this.handleGroups()}
              {this.state.userGroups.map(group => (
                <CurrentGroups
                  data={group}
                  _id={group._id}
                  groupName={group.groupName}
                  platform={group.platform}
                  groupRank={group.groupRank}
                  time={group.time}
                  
                />
              ))}
        </div>

        <div id="main-third">
        </div> */}


          <Row>

            <Col size="xl-7 sm-8">

              <div id="about-us">

                Meet the Development Team
                <h5>Max Yeamans</h5>
                <h5>Daniel Grantham</h5>
                <h5>Katri Morrison</h5>
                <h5>Mike Schumann</h5>
         </div>
            </Col>
            <Col size="xl-5 sm-8">

              <div id="overwatch-char">
              </div>

            </Col>
          </Row>

        <h2>MOST RECENT GROUPS ▼</h2>

        <div className="mygroups">
          {this.state.groups.map(group => (
            <SearchGroup group={group} handleGroupJoin={this.handleGroupJoin} />
          ))}

        </div>

        <Footer />
      </Container>
    );
  }
}

export default Main;
