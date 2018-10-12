import React from "react";
import "./ProfileModal.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import API from "../../utils/API";
import Login from "../../pages/Login/Login";

class ProfileModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      username:"",
      password:"",
      email:"",
      _id: this.props.id
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

  componentDidMount() {
    
    this.loadLogin();
    
  }

  loadLogin = () => {
    API.getLogin()
      .then(res => this.setState({ _id: res.data._id }))
      .catch(err => console.log(err));


  }

  createUpdatedUser = (_id, username, password, email) => { 
    console.log(username, password, email)
    API.updateUser({
      _id: _id,
      username: username, // select what you want updated
      password: password,
      email: email

    })
      // .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.createUpdatedUser(this.state._id, this.state.username, this.state.password, this.state.email);
  };



  render() {
    return (
      <div>
        {/* <p> Text above modal</p> */}

        <Button id="settings-btn" bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Settings
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> <h2>Settings</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <form className="m-4">
              <div className="form-group">
                <label for="username">
                {/* {this.state.pictures} */}
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
              <button className="btn btn-primary" onClick={this.handleFormSubmit}>
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
