import React from "react";
import "./ManageGroupModal.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import API from "../../utils/API";

class ManageGroupModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      username: "",
      password: "",
      email: ""
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

  // ###########################################################
  // Function below will need to update current group, not user

  // updateCurrentUser = (id, username, password, email) => {
  //   console.log(id, username);
  //   API.updateUser({
  //     _id: id,
  //     username: username,
  //     password: password,
  //     email: email
  //   })
  //     .then(res => this.loadUsers())
  //     .catch(err => console.log(err));
  // };

  handleFormSubmit = event => {
    event.preventDefault();

    this.updateCurrentUser();
  };

  render() {
    return (
      <div>
        <Button
          id="manage-groups-btn"
          bsStyle="primary"
          bsSize="large"
          onClick={this.handleShow}
        >
          Manage Group
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Manage Group </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="m-4">
              <div className="form-group">
                <label for="groupName">Group Name: </label>
                <input
                  className="form-control"
                  type="text"
                  name="groupName"
                  placeholder="Group Name"
                />
              </div>
              <div className="form-group">
                <label for="console">Console: </label>
                <select className="form-control" name="console">
                  <option value="">Update Platform</option>
                  <option value="">PC</option>
                  <option value="">Xbox</option>
                  <option value="">Playstation</option>
                </select>
              </div>
              <div className="form-group">
                <label for="rank">Rank: </label>
                <select className="form-control" name="rank">
                  <option value="">Update Rank (7)</option>
                  <option value="">Bronze</option>
                  <option value="">Silver</option>
                  <option value="">Gold</option>
                  <option value="">Platinum</option>
                  <option value="">Diamond</option>
                  <option value="">Master</option>
                  <option value="">Grand Master</option>
                </select>
              </div>
              <div className="form-group">
                <label for="time">Game Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  placeholder="Game Time"
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

export default ManageGroupModal;
