import React, { Component } from "react";
import API from "../../utils/API";
import { Input } from "./../../components/Form"
import "./Register.css";
import { Col, Row, Container } from "../../components/Grid";

class Register extends Component {
    state = {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        group: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    createNewUser = (username, password, email, group) => {
        console.log(username, " ", password, " ", email, " ", group);
        API.saveUser({
            username: username,
            password: password,
            email: email,
            group: group

        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    loadGroups() { // I put this function here but it might need to be on the profile/user page (whatever we end up calling it)
        API.getGroups()
            .then(res =>
                this.setState({ groups: res.data })
            )
            .catch(err => console.log(err));
    }
    // was in form action="/register" method="post"

    render() {
        return (
            <Container fluid>

             <nav>
          <header className="header">
            <a href="/register" className="logo">LFG</a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>

          </header>
        </nav>

                <div id="register-form">
                    <form className="m-5">
                        <div id="register-text">
                            <h7>Sign up </h7>

                        </div>
                        <p> fill out the form below</p>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="text" className="form-control" name="email" placeholder="Email"
                                onChange={this.handleInputChange}
                                value={this.state.email}
                            />
                        </div>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" name="username" placeholder="Username"
                                onChange={this.handleInputChange}
                                value={this.state.username}
                            />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Password"
                                onChange={this.handleInputChange}
                                value={this.state.password}
                            />
                        </div>
                        <div className="form-group">
                            <label for="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password"
                                onChange={this.handleInputChange}
                                value={this.state.confirmPassword}
                            />
                        </div>
                        <button type="submit" className="submit-button1" onClick={() => this.createNewUser(this.state.username, this.state.password, this.state.email, this.state.group)}>Sign up</button>


                    </form>

                    <div id="bottom-reg">

                        <a id="ha-text" href="/"> Already have an account? </a>

                        <a className="reg-l-btn" href="/" role="button"><p>Log in</p></a>
                    </div>

                </div>

            </Container>
        )
    };
}

export default Register;