import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import API from "../../utils/API";

class NewGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  loadUsers = () => {
    // gets all users
    API.getUsers()
      .then(res => this.setState({ users: res.data }))
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

  render() {
    return (
      // NAV IS RIGHT HERE
      <Container fluid>
        <Row>
          <Col size="xl-2 sm-2"/>
          <Col size="xl-8 sm-8">
            <form className="m-4" action="/register" method="post">
              <div className="form-group">
                <label for="groupName">Group Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="Group Name"
                  onChange={this.handleInputChange}
                  value={this.state.groupName}
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                  value={this.state.password}
                />
              </div>
              <div className="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={this.handleInputChange}
                  value={this.state.confirmPassword}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Col>
          <Col size="xl-2 sm-2"/>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default NewGroup;
