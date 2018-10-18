import React from "react";
import "./JoinGroupModal.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import API from "../../utils/API";

// TODO: Find out if this is going to create a modal for every single search result, and if that's the case, how to avoid letting that happen.

class JoinGroupModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      id: props.id,
      gamertag: "",
      role: "",
      rank: "",
      user: localStorage.getItem("globalId")
    };
  }

  // Closes the modal and clears out any previous form inputs
  handleClose() {
    this.setState({
      show: false,
      gamertag: "",
      role: "",
      rank: ""
    });
  }

  // Display the modal
  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount() {
    // ! Good place to do an API call for the open player slot
  }

  // Form submit function to join group
  handleGroupJoin = (event) => {
    event.preventDefault();
    // console.log(`Join Group Modal data: Group ID is ${groupID}, userID is ${userID}`)
    API.joinGroup({
      id: this.state.id,
      user: this.state.user,
      gamertag: this.state.gamertag,
      role: this.state.role,
      rank: this.state.rank,
    })
      .catch(err => console.log(err));
  }

  // Combined function that submits Group Join form and closes modal
  handleJoinAndClose = (event) => {
    this.handleGroupJoin(event);
    this.handleClose();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        {/* Button displayed under Group search results */}
        <Button id="join-btn" bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Request to Join
        </Button>
        {/* Modal begins here */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title><h2>Your Player Info</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="m-4">
              <div className="form-group" bsSize="large">
                <label htmlFor="gamertag">
                  Gamertag:</label>
                <input
                  type="text"
                  className="form-control"
                  name="gamertag"
                  placeholder="Enter your platform gamertag"
                  onChange={this.handleInputChange}
                  value={this.state.gamertag}
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="role">Enter your preferred role:</label>
                <input
                  type="text"
                  className="form-control"
                  name="role"
                  placeholder="Enter Tank, Attack, or Support"
                  onChange={this.handleInputChange}
                  value={this.state.role}
                /> */}
              <div className="form-group" bsSize="large">
                <label htmlFor="role">Group Rank: </label>
                <select className="form-control" name="role" onChange={this.handleInputChange}>
                  <option value="">Choose Role</option>
                  <option value="Tank">Tank</option>
                  <option value="Attack">Attack</option>
                  <option value="Support">Support</option>
                </select>
              </div>
            {/* <div className="form-group">
                <label htmlFor="rank">Enter your current rank:</label>
                <input
                  type="text"
                  className="form-control"
                  name="rank"
                  placeholder="Enter your current rank (gold, platinum, etc.)"
                  onChange={this.handleInputChange}
                  value={this.state.rank}
                />
              </div> */}
            <div className="form-group">
              <label htmlFor="rank">Group Rank: </label>
              <select className="form-control" name="rank" onChange={this.handleInputChange}>
                <option value="">Choose Rank</option>
                <option value="Bronze">Bronze</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
                <option value="Diamond">Diamond</option>
                <option value="Master">Master</option>
                <option value="Grand Master">Grand Master</option>
              </select>
            </div>
            {/* Button is disabled until the user enters gamertag, role, and rank */}
            <button className="pmodal-update-btn" onClick={this.handleJoinAndClose} disabled={!(this.state.gamertag && this.state.role && this.state.rank)}>
              Send Request
              </button>
            </form>
          </Modal.Body>
        <Modal.Footer>
          <Button className="pmodal-close" onClick={this.handleClose}>
            Cancel
            </Button >
        </Modal.Footer>
        </Modal>
      </div >
    );
  }
}

export default JoinGroupModal;
