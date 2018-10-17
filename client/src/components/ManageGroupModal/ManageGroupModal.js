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
      
      groupName: "",
      platform: "",
      time: "",
      groupRank: "",
      groupId: "",
      player1: "",
      globalId: localStorage.getItem("globalId")
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
    // console.log()
    API.getGroup(this.state.groupId)
      .then(res =>
        this.setState({
          groupName: res.data.groupName,
          platform: res.data.platform,
          groupRank: res.data.groupRank,
          time: res.data.time,
          groupId: res.data._id,
          player1: res.data.player1.user

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

  deleteCurrentGroup = () => { 
    console.log(this.state.groupId);
    if (this.state.globalId === this.state.player1) {
      API.deleteGroup({
        _id: this.state.groupId
   
       })
         // .then(this.loadGroup())
         .catch(err => console.log(err));
    }
    else {
      console.log("not group leader");
    }
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

    this.updateCurrentGroup(this.state.groupName, this.state.platform, this.state.groupRank, this.state.time, this.state.groupId);
  };

  handleFormDelete = event => {
    event.preventDefault();

    this.deleteCurrentGroup();
  };

  

  render() {
    return (
      <div id="mg-modal">
        <Button
          id="manage-groups-btn"
          bsStyle="primary"
          bsSize="large"
          onClick={this.handleShow}
        >
          Manage Group
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header 
          // closeButton
          >
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
                <select className="form-control" name="platform" value={this.state.platform} onChange={this.handleInputChange}>
                  <option value="">Update Platform</option>
                  <option value="PC" name="platform">PC</option>
                  <option value="Xbox" name="platform">Xbox</option>
                  <option value="Playstation" name="platform">Playstation</option>
                  
                </select>
              </div>
              <div className="form-group">
                <label for="groupRank">Rank: </label>
                <select className="form-control" name="groupRank" value={this.state.groupRank} onChange={this.handleInputChange}>
                  <option value="">Update Rank (7)</option>
                  <option value="Bronze">Bronze</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                  <option value="Platinum">Platinum</option>
                  <option value="Diamond">Diamond</option>
                  <option value="Master">Master</option>
                  <option value="Grand Master">Grand Master</option>
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
                value="submit"
                className="btn btn-primary"
               href="/"
                onClick={this.handleFormSubmit}
                
              >
                Update
              </button>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={this.handleFormDelete}
              >
                Delete
              </button>
            </form>
         

              
          </Modal.Body>
          <Modal.Footer>
          
            <a className="btn btn-primary"  href="/main" role="button"><p>close</p></a>
            {/* onClick={this.handleClose} */}

           </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ManageGroupModal;
