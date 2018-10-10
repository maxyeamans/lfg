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
      filterGroup:[]
    };
  }



  componentDidMount() {
    this.loadGroups();
  }

  loadGroups = () => {
    // gets all groups
    API.getGroups()
      .then(res => this.setState({ groups: res.data }))
      .catch(err => console.log(err));
  };

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

  // //for rendering search groups on searchgroup component
  // renderSearchedGroups = () => {
  //   return this.state.groups.map(group => (
  //     <SearchGroup
  //       groupName={group.groupName}
  //       platform={group.platform}
  //       groupRank={group.groupRank}
  //       time={group.time}
  //     />
  //   ));
  // }

  // Keep track of what user types into topic input so that input can be grabbed later
  handleGroupNameChange = (event) => {
    this.setState({ groupName: event.target.value });
    var filterGroup=this.state.groups.filter(eachitem=>eachitem.groupName===this.state.groupName)
    this.setState({filterGroup: filterGroup})
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("works")
    // var filterGroup=this.state.groups.filter(eachitem=>eachitem.groupName===this.state.groupName )
    // this.setState({filterGroup: filterGroup})
  }

  //below code goes next to this.state.groupName
  //&& eachitem.platform===this.state.platform


  // Keep track of what user types into topic input so that input can be grabbed later
  handlePlatformChange = (event) => {
    this.setState({ platform: event.target.value });
    var filterGroup=this.state.groups.filter(eachitem=>eachitem.platform===this.state.platform)
    this.setState({filterGroup: filterGroup})
  }

  // Keep track of what user types into topic input so that input can be grabbed later
  handleGroupRankChange = (event) => {
    this.setState({ groupRank: event.target.value });
    var filterGroup=this.state.groups.filter(eachitem=>eachitem.groupRank===this.state.groupRank)
    this.setState({filterGroup: filterGroup})
  }

  // // Keep track of what user types into topic input so that input can be grabbed later
  // handleTimeChange = (event) => {
  //   this.setState({ time: event.target.value });
  // }



  render() {
    return (
      // NAV IS RIGHT HERE
      <Container fluid>
        <Row>
          
          <Col size="xl-12 lg-6">
          <div id="search-groups">
            <h4>Search for a group below</h4>
          
            <SearchBar
            handleGroupNameChange={this.handleGroupNameChange}
            handlePlatformChange={this.handlePlatformChange}
            handleGroupRankChange={this.handleGroupRankChange}
            // handleTimeChange={this.handleTimeChange}
            handleFormSubmit={this.handleFormSubmit}
            // renderSearchedGroups={this.renderArticles}
            />
          </div>
          <h5> ▼ </h5>

          </Col>
          
        </Row>


        <Row>
        
          <Col size="xl-12 lg-6">
            <div id="search-results">
              <h4> results</h4>
              {this.state.filterGroup.map(group => (
                <SearchGroup
                  data={group}
                  groupName={group.groupName}
                  platform={group.platform}
                  groupRank={group.groupRank}
                  time={group.time}
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

export default Search;
