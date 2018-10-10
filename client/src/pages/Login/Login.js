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
  state = {
    username: "",
    password: ""
  };


  componentDidMount() { }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };

  loginUser = (username, password) => {
    console.log(username, password);
    API.loginUser({
      username: username,
      password: password
    })
      .then( res => console.log(res + "login.js page") )
      .catch(err => console.log(err));
  }

  // _onChange = event => {
  //   event.preventDefault();
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  render() {
    return (

      <Container fluid style={styles}>
        <form className="m-4" action="/main">
          <div className="form-group">
            <label for="username" className="bg-secondary">Username</label>
            <input type="text" className="form-control" name="username" placeholder="Username"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
          </div>
          <div className="form-group">
            <label for="password" className="bg-secondary">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => this.loginUser(this.state.username, this.state.password)}>Submit</button>
        </form>
      </Container>
    );
  }
}

export default Login;