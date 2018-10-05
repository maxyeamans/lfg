import React from "react";
import "./ProfileModal.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import API from "../../utils/API";
import Login from "../../pages/Login/Login";//trying to bring in current username and pass


// We need to pass in the User ID prop so that we can include it in our post request

class ProfileModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  //this is a template for how we will change user info after editing:
  //   handleUserNameChange = e => {
  //     this.setState({ UserName: e.target.value });
  //     // Make call to API to save changes here
  //     User.save({ UserName: e.target.value });
  // };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  updateUser = (username, password, email) => { 
    console.log(username + " is updating user information");
    API.updateUser({
      username: username, 
      password: password,
      email: email

    })
      //.then(res => this.loadGroups())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {/* <p> Text above modal</p> */}

        <Button id="settings-btn" bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Settings
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="m-4" action="" method="post" onSubmit="">
              <div className="form-group">
                <label for="username">
                Change current Username:</label>
                <input
                  type="name"
                  className="form-control"
                  id="username"
                  placeholder="New Username"
                  onChange={this.handleInputChange}
                  value={this.state.username}
                />
              </div>
              <div className="form-group">
                <label for="password">Change current Password:</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="New Password"
                  onChange={this.handleInputChange}
                  value={this.state.password}
                />
              </div>
              <div className="form-group">
                <label for="email">Change current Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="New Email"
                  onChange={this.handleInputChange}
                  value={this.state.email}
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={() => this.updateUser(this.state.username, this.state.password, this.state.email)}>
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
