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
      // Figure out how the group ID is coming in through props
      id: props.id,
      gamertag: "",
      role: "",
      rank: "",
      user: localStorage.getItem("globalId")
    };
  }

  handleClose() {
    this.setState({
      show: false,
      gamertag: "",
      role: "",
      rank: ""
    });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount() {
    // ! Good place to do an API call for the open player slot
  }

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
        <Button id="join-btn" bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Request to Join
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title><h2>Your Player Info</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="m-4">
              <div className="form-group">
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
              <div className="form-group">
                <label htmlFor="role">Enter your preferred role:</label>
                <input
                  type="text"
                  className="form-control"
                  name="role"
                  placeholder="Enter Tank, Attack, or Support"
                  onChange={this.handleInputChange}
                  value={this.state.role}
                />
              </div>
              <div className="form-group">
                <label htmlFor="rank">Enter your current rank:</label>
                <input
                  type="text"
                  className="form-control"
                  name="rank"
                  placeholder="Enter your current rank (gold, platinum, etc.)"
                  onChange={this.handleInputChange}
                  value={this.state.rank}
                />
              </div>
              <button className="pmodal-update-btn" onClick={this.handleGroupJoin} disabled={!(this.state.gamertag && this.state.role && this.state.rank)}>
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
      </div>
    );
  }
}

export default JoinGroupModal;
