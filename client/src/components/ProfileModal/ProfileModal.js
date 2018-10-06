import React from "react";
import "./ProfileModal.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import API from "./../../utils/API";
import Login from "../../pages/Login/Login";//trying to bring in current username and pass

var id = "5bb5619e6cb97b6830ca34c8";



// We need to pass in the User ID prop so that we can include it in our post request

class ProfileModal extends React.Component {
  state = {
    show: false,
    username: "",
    password: "",
    email: "",
    users: []
  
    
  };

  

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    
  }

  //this is a template for how we will change user info after editing:
  //   handleUserNameChange = e => {
  //     this.setState({ UserName: e.target.value });
  //     // Make call to API to save changes here
  //     User.save({ UserName: e.target.value });
  // };

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
    this.setState({ show: true });
  }

  loadUsers(){ // I put this function here but it might need to be on the profile/user page (whatever we end up calling it)
    API.getUsers()
    .then(res =>
      this.setState({ users: res.data })
    )
    .catch(err => console.log(err));
  }

  createUpdatedUser = (id, username, password, email) => { 
    let userData = {
      _id: id,
      username: username, // select what you want updated
      password: password,
      email: email
    }
    API.updateUser(userData)({
      // _id: id,
      // username: username, // select what you want updated
      // password: password,
      // email: email
      

    })
      .then(res => this.loadUsers())
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
            <form className="m-4">
              <div className="form-group">
                <label for="username">
                Change current Username:</label>
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
                <label for="password">Change current Password:</label>
                <input
                  type="text"
                  className="form-control"
                  name="password"
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
                  name="email"
                  placeholder="New Email"
                  onChange={this.handleInputChange}
                  value={this.state.email}
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={() => this.createUpdatedUser(id,this.state.username, this.state.password, this.state.email)}>
                Update
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button id="pmodal-button" onClick={() => this.handleClose()} >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ProfileModal;
