import React, { Component } from "react";

class Register extends Component {
    state = {
        email: "",
        name: "",
        password: "",
        confirmPassword: ""
    };

    handleInputChange = (event) => {
        const {id, value} = event.target;
        this.setState({
            [id]: value
        })
    };

    render() {
        return (
            <form className="m-4" action="/register" method="post">
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email"
                        onChange={this.handleInputChange}
                        value={this.state.email}
                    />
                </div>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Username"
                        onChange={this.handleInputChange}
                        value={this.state.name}
                    />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" 
                        onChange={this.handleInputChange}
                        value={this.state.password}
                    />
                </div>
                <div className="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" 
                        onChange={this.handleInputChange}
                        value={this.state.confirmPassword}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    };
}

export default Register;