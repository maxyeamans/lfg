import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import SearchBtn from "../../components/SearchBtn";
import CreateGroupBtn from "../../components/CreateGroupBtn";
import Footer from "../../components/Footer";
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
    this.loadNewGroups();
  }

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
        <Row>
          <Col size="xl-2 sm-0" />
          <Col size="xl-8 sm-12">
          <h2>MOST RECENT GROUPS ▼</h2>
            <div className="mygroups">
              {this.state.groups.map(group => (
                <SearchGroup
                  group={group}
                  handleGroupJoin={this.handleGroupJoin}
                />
              ))}
            </div>
          </Col>
          <Col size="xl-2 sm-0" />
        </Row>

        <Footer />
      </Container>
    );
  }
}

export default Main;
