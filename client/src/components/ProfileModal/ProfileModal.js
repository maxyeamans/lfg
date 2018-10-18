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
      show: false,
      username:"",
      password:"",
      email:"",
      _id: localStorage.getItem("globalId")
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
    API.getUser(this.state._id)
      .then(res => this.setState({
        _id: localStorage.getItem("globalId"),
        username: res.data.username,
        password: res.data.password,
        email: res.data.email }))
      .catch(err => console.log(err));


  }

  // logoutUser = () => {
  //   console.log("logout user");
  //   API.deleteLogin()
  //     .then( res => console.log(res + "logout profile modal") )
  //     .catch(err => console.log(err));
  // }

  // loginDelete = () => {
  //   API.deleteLogin();
  // }

  handleLogout = () => {
    localStorage.setItem("globalId", "");
    localStorage.setItem("username", "");
      
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
          <Modal.Header 
          // closeButton
          >
            <Modal.Title> <h2>Settings </h2></Modal.Title>
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
                  placeholder={this.state.username}
                  onChange={this.handleInputChange}
                  value={this.state.username}
                />
              </div>
              <div className="form-group">
                <label for="password">Change current Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder={this.state.password}
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
                  placeholder={this.state.email}
                  onChange={this.handleInputChange}
                  value={this.state.email}
                />
              </div>
              <button className="pmodal-update-btn" onClick={this.handleFormSubmit}>
                Update
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
          <a className="pmodal-logout"  href="/" role="button" onClick={this.handleLogout}>
           Logout
            </a>

            <Button className="pmodal-close" onClick={this.handleClose}>
              Close
            </Button >
            
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ProfileModal;
