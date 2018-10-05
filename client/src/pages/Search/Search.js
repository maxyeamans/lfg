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
          <Col size="xl-4 lg-3" />
          <Col size="xl-4 lg-6">
          <h1>Search for a group below</h1>
            <SearchBar />
          </Col>
          <Col size="xl-4 lg-3" />
        </Row>

        <Row>
          <Col size="xl-4 lg-3" />
          <Col size="xl-4 lg-6">
            <div id="search-results">
              <SearchGroup />
             
            </div>
          </Col>
          <Col size="xl-4 lg-3" />
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Search;
