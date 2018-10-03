import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import SearchBar from "../../components/SearchBar";
import SearchPlayer from "../../components/SearchPlayer";
import SearchGroup from "../../components/SearchGroup";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "./Search.css";

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
        <Nav />
        <Row>
          <Col size="xl-4 lg-3" />
          <Col size="xl-4 lg-6">
            <SearchBar />
          </Col>
          <Col size="xl-4 lg-3" />
        </Row>

        <Row>
          <Col size="xl-4 lg-3" />
          <Col size="xl-4 lg-6">
            <div id="search-results">
              {/* Will need to find a way to determine which component to render, based on search filter of Players or Groups */}
              <SearchPlayer />
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
