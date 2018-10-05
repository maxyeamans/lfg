import React from "react";
import "./ProfileModal.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import API from "../../utils/API";
import Login from "../../pages/Login/Login"; //trying to bring in current username

class ProfileModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      username: "",
      password: "",
      email: "",
      id: "5bb6d75eabd64c45c4525304"
    };
  }

  //this is a template for how we will change user info after editing:
  //   handleUserNameChange = e => {
  //     this.setState({ UserName: e.target.value });
  //     // Make call to API to save changes here
  //     User.save({ UserName: e.target.value });
  // };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUser(this.state.id)
      .then(res =>
        this.setState({
          username: res.data.username,
          password: res.data.password,
          email: res.data.email
        })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.loadUsers();
    this.setState({ show: true });
  }

  updateCurrentUser = (username, password, email, id) => {
    API.updateUser({
      _id: id,
      username: username,
      password: password,
      email: email
    })
      .then(res => this.loadGroups())
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.updateCurrentUser({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      id: this.state.id
    });
  };

  render() {
    return (
      <div>
        {/* <p> Text above modal</p> */}

        <Button
          id="settings-btn"
          bsStyle="primary"
          bsSize="large"
          onClick={this.handleShow}
        >
          Settings
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="m-4">
              <div className="form-group">
                <label for="username">Current username: {this.state.username} </label>
                <input
                  type="name"
                  className="form-control"
                  name="username"
                  placeholder="New Username"
                  onChange={this.handleInputChange}
                  value={this.state.username}
                />
              </div>
              <div className="form-group">
                <label for="password">Change current password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="New Password"
                  onChange={this.handleInputChange}
                  value={this.state.password}
                />
              </div>
              <div className="form-group">
                <label for="email">Current Email: {this.state.email}</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="New Email"
                  onChange={this.handleInputChange}
                  value={this.state.email}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleFormSubmit}
              >
                Update
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button id="pmodal-button" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ProfileModal;
