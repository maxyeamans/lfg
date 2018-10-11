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
<<<<<<< HEAD
      username: "",
      password: "",
      email: ""
=======

      groupName: "",
      Platform: "",
      time: "",
      rank: "",
      groupId: ""
>>>>>>> c43f80c9aa98b15838b2717a16c1c9d1d49ba85f
    };
  }
  

  //this is a template for how we will change user info after editing:
  //   handleUserNameChange = e => {
  //     this.setState({ UserName: e.target.value });
  //     // Make call to API to save changes here
  //     User.save({ UserName: e.target.value });
  // };

  componentDidMount() {
    this.handleGroupId();
  }

  loadGroup = () => {
    console.log()
    API.getGroup(this.state.groupId)
      .then(res =>
        this.setState({
          groupName: res.data.groupName,
          platform: res.data.platform,
          groupRank: res.data.groupRank,
          time: res.data.time,
          groupId: res.data._id
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

  handleGroupId = () => {
    this.setState({groupId: this.props.idGroup})
  }

  
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.loadGroup();
    this.setState({ show: true });
  }

  updateCurrentGroup = (groupName, platform, groupRank, time, groupId) => { 
    console.log(groupId);
    API.updateGroup({
      groupName: groupName, // select what you want updated
      platform: platform,
      groupRank: groupRank,
      time: time,
      _id: groupId

    })
      //.then(res => this.loadGroups())
      .catch(err => console.log(err));
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

<<<<<<< HEAD
    this.updateCurrentUser();
=======
    this.updateCurrentGroup(this.state.groupName, this.state.platform, this.state.groupRank, this.state.time, this.state.groupId);
>>>>>>> c43f80c9aa98b15838b2717a16c1c9d1d49ba85f
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
                <p hidden
                name="groupId"
                value={this.props.idGroup}
                ></p>
                <input
                  className="form-control"
                  type="text"
                  name="groupName"
                  placeholder="Group Name"
                  onChange={this.handleInputChange}
                  value={this.state.groupName}
                />
              </div>
              <div className="form-group">
                <label for="console">Console: </label>
                <select className="form-control" name="console">
                  <option value={this.state.platform}>Update Platform</option>
                  <option value={this.state.platform}>PC</option>
                  <option value={this.state.platform}>Xbox</option>
                  <option value={this.state.platform}>Playstation</option>
                  
                </select>
              </div>
              <div className="form-group">
                <label for="rank">Rank: </label>
                <select className="form-control" name="rank">
                  <option value={this.state.rank}>Update Rank (7)</option>
                  <option value={this.state.rank}>Bronze</option>
                  <option value={this.state.rank}>Silver</option>
                  <option value={this.state.rank}>Gold</option>
                  <option value={this.state.rank}>Platinum</option>
                  <option value={this.state.rank}>Diamond</option>
                  <option value={this.state.rank}>Master</option>
                  <option value={this.state.rank}>Grand Master</option>
                </select>
              </div>
              <div className="form-group">
                <label for="time">Game Time</label>
                <input
                  type="gametime"
                  className="form-control"
                  name="time"
                  placeholder="Game Time"
                  onChange={this.handleInputChange}
                  value={this.state.time}
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
