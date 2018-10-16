import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import SearchBar from "../../components/SearchBar";
import SearchPlayer from "../../components/SearchPlayer";
import SearchGroup from "../../components/SearchGroup";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "./Search.css";
import API from "../../utils/API";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      currentGroups: [],
      groupName: "",
      platform: "",
      groupRank: "",
      joinGroup: ""
    };
  }

  loadGroups = () => {
    // gets all groups
    API.getGroups()
      .then(res => this.setState({ groups: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  _onChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  returnSearchParams = () => {
    let searchParams = {};
    const s = this.state;
    if (s.groupName) { searchParams["groupName"] = s.groupName };
    if (s.platform) { searchParams["platform"] = s.platform };
    if (s.groupRank) { searchParams["groupRank"] = s.groupRank };

    return searchParams;
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getGroups(this.returnSearchParams())
      .then(res => this.setState({ groups: res.data }));
  }

  // ! TODO: Needs a way to get user info.
  handleGroupJoin = (event) => {
    event.preventDefault();
    this.setState({
      joinGroup: event.target.id
    });
    console.log("Group ID getting sent to API.joinGroup", this.state.joinGroup);
    API.joinGroup({
      id: event.target.id,
      user: localStorage.getItem("globalId")
    })
    console.log("Request to Join was clicked.", this.state.joinGroup);
  }

  componentDidMount() {
    // TODO: Insert code to set state.currentGroups to an array of groupIDs to which the logged in user currently belongs.
    // I think we'll need this info to do a client-side check to make sure the user isn't joining a group to which they already belong.
  }

  render() {
    return (
      // NAV IS RIGHT HERE
      <Container fluid>
        <Row>
          <Col size="xl-12 lg-6">
            <div id="search-groups">
              <h4>Search for a group below</h4>
              <SearchBar
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </div>
          </Col>
        </Row>

        <div id="search-results">
          <h5> ▼ </h5>
          <h4> results</h4>
          {this.state.groups.map(group => <SearchGroup group={group} handleGroupJoin={this.handleGroupJoin}/>)}
        </div>

        <Footer />
      </Container>
    );
  }
}

export default Search;
