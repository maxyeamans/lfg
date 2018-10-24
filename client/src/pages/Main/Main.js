import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import SearchBtn from "../../components/SearchBtn";
import CreateGroupBtn from "../../components/CreateGroupBtn";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import "./main.css";
import RecentGroups from "../../components/RecentGroups";
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
    this.loadNewGroups();
    this.loadUser();
    this.deleteGroupId();
  }

  deleteGroupId = () => {
    localStorage.removeItem("groupId");
  };

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
      // .then(this.handleGroups())
      .catch(err => console.log(err));
  };

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
    console.log("Group ID getting sent to API.joinGroup", this.state.joinGroup);
    API.joinGroup({
      id: id,
      user: localStorage.getItem("globalId")
    });
    console.log("Request to Join was clicked.", this.state.joinGroup);
  };

  render() {
    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}>
        <Nav />

        <div id="mainpage-content">
          <h1> Looking For Group</h1>
          <h3>Create and join groups with other Overwatch players!</h3>
        </div>

        <div id="main-options">
          <div class="button1">
            <CreateGroupBtn />
          </div>
          <div class="button2">
            <SearchBtn />
          </div>
        </div>

        <div id="main-first" />

        <div id="main-second">
          Recently Created
          <div className="main-groups">
            {this.state.groups.map(group => (
              <RecentGroups
                group={group}
                handleGroupJoin={this.handleGroupJoin}
              />
            ))}
          </div>
        </div>

        <div id="main-next">
          <form action="/search">
            <input type="submit" value="search all" className="see-all-btn" />
          </form>
        </div>

        <div id="main-third">
          <div id="about-us">
            Meet the Development Team
            <a href="https://www.linkedin.com/in/maxyeamans/"> Max Yeamans</a>
            <a href="https://www.linkedin.com/in/daniel-grantham-7852a4a0/">
              {" "}
              Daniel Grantham
            </a>
            <a href="https://www.linkedin.com/in/katri-morrison-goulias/">
              {" "}
              Katri Morrison-Goulias
            </a>
            <a href="https://www.linkedin.com/in/michael-schumann-0a39991/">
              {" "}
              Mike Schumann
            </a>
          </div>

          <div id="overwatch-char" />
        </div>

        <Footer />
      </Container>
    );
  }
}

export default Main;
