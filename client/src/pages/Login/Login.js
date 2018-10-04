import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Background from "../../images/background-image.jpg";
import Passport from "../../components/Passport";
import "./Login.css";
import API from "../../utils/API";

let styles = {
  position: "fixed",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
  zIndex: 10,
  backgroundImage: "url(" + Background + ")"
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() { }

  handleInputChange = event => {
    const { name, value } = event.target;
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
      
      <Container fluid style={styles}>
        <form className="m-4" action="/login" method="post">
          <div className="form-group">
            <label for="username" className="bg-secondary">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Username"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
          </div>
          <div className="form-group">
            <label for="password" className="bg-secondary">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Container>
    );
  }
}

export default Login;
