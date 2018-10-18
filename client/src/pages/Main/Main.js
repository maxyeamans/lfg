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


        <div id="main-first">
        </div>

        <div id="main-second">

          Recently Created

          <div className="main-groups">
            {this.state.groups.map(group => (
              <RecentGroups group={group} handleGroupJoin={this.handleGroupJoin} />
            ))}

          </div>

        </div>

        <div id="main-next">


          <form action="/search">
            <input type="submit" value="search all" className="see-all-btn" />
          </form>
        </div>



        <div id="main-third">
        

        <Row>

          <Col size="xl-7 sm-8">

            <div id="about-us">

              Meet the Development Team
              <a href="https://www.linkedin.com/in/maxyeamans/">  Max Yeamans</a>
              <a href="https://www.linkedin.com/in/daniel-grantham-7852a4a0/"> Daniel Grantham</a>
              <a href="https://www.linkedin.com/in/katri-morrison-goulias/"> Katri Morrison</a>
              <a href="https://www.linkedin.com/in/michael-schumann-0a39991/"> Mike Schumann</a>
             
              
              
            </div>
          </Col>
          <Col size="xl-5 sm-8">

            <div id="overwatch-char">
            </div>

          </Col>
        </Row>
        </div>

     


        <Footer />
      </Container>
    );
  }
}

export default Main;
