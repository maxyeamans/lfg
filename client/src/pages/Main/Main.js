import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import SearchList from "../../components/SearchList";
import SearchBtn from "../../components/SearchBtn";
import CreateGroupBtn from "../../components/CreateGroupBtn";
import CurrentGroups from "../../components/CurrentGroups";
import Profile from "../../components/Profile";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  _onChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    return (
      // NAV IS RIGHT HERE
      <Container fluid>
        <Row>
          {/* Start Column 1 */}
          <Col size="xl-6 sm-6">
              <h1>Groups</h1>
              <CurrentGroups />
              {/* PROPS NEEDED: Group Name, Members, Group Image */}
          </Col>
          {/* Start Column 2 */}
          <Col size="xl-6 sm-6">
            <Row>
              <Profile />
            </Row>
            
            <Row>
              <Col size="xl-6 sm-6">
                <CreateGroupBtn />
              </Col>
              <Col size="xl-6 sm-6">
                <SearchBtn />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
