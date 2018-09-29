import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Background from "../../images/background-image.jpg";
import Passport from "../../components/Passport";
import "./Login.css";

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
      <Container fluid style={styles}>
        <Row>
          <Passport />
        </Row>
      </Container>
    );
  }
}

export default Login;
