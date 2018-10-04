import React from "react";
import "./ProfileModal.css";
import { Modal } from "react-bootstrap";
import { Popover } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import API from "../../utils/API";

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

  createUpdatedUser = (username, password, email) => { 
    API.updateUser({
      username: username, // select what you want updated
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

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Edit Profile
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="m-4" action="" method="post" onSubmit="">
              <div className="form-group">
                <label for="username">Username</label>
                <input
                  type="name"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  onChange={this.handleInputChange}
                  value={this.state.username}
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                  value={this.state.password}
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  onChange={this.handleInputChange}
                  value={this.state.email}
                />
              </div>
              <button type="submit" className="btn btn-primary">
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
