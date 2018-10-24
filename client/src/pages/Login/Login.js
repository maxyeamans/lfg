import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Background from "../../images/background-image.jpg";
import Passport from "../../components/Passport";
import "./Login.css";
import API from "../../utils/API";

class Login extends Component {
  state = {
    username: "",
    password: ""

  };


  componentDidMount() {
    this.deleteGroupId();
   }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.logUser(this.state.username, this.state.password);
  };

  logUser = (username, password) => {
    console.log(username, password);
    localStorage.setItem("username", username);

    API.loginUser({
      username: username,
      password: password
    })
      .then(res => localStorage.setItem("globalId", res.data._id))
      .catch(err => console.log(err));
  }

  deleteGroupId = () => {
    localStorage.removeItem("groupId");

  };

  // _onChange = event => {
  //   event.preventDefault();
  //   this.setState({ [event.target.name]: event.target.value });
  // };
  // action="/main"
  render() {
    return (

      <Container fluid
      // style={styles}
      >


        <nav>
          <header className="header">
            <a href="/" className="logo">LFG</a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>

          </header>
        </nav>

        <div id="login-form">
          <form className="m-5" action="/main">
            <div id="login-text">

              <h7>Login </h7>
            </div>
            <br></br>
            <div className="form-group">
              <label for="username" className="login-text">Username</label>
              <input type="text" className="form-control" name="username" placeholder="Username"
                onChange={this.handleInputChange}
                value={this.state.username}
              />
            </div>
            <div className="form-group">
              <label for="password" className="login-text">Password</label>
              <input type="password" className="form-control" name="password" placeholder="Password"
                onChange={this.handleInputChange}
                value={this.state.password}
              />
            </div>
            <button type="submit" className="submit-button1" onClick={() => this.logUser(this.state.username, this.state.password)}>Login</button>
          </form>

          <div id="bottom-reg">
            <a id="ha-text" href="/register"> Don't have an account? </a>
            <a className="reg-l-btn" href="/register" role="button"><p>Register</p></a>
          </div>


        </div>



      </Container>
    );
  }
}

export default Login;
