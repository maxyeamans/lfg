import React from "react";
import "./ProfileModal.css";
import { Modal } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';





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
         

            <h4>Name:</h4>
            
            <input
              type="text"
              className="form-control"
              id="name-input"
              aria-describedby="Name"
              placeholder="Name"
              name="email"
              onChange={this.handleFirstNameChange}
            />
            
        
            <h4>Characters normally played:</h4>
            <input
              type="text"
              className="form-control"
              id="characters-input"
              aria-describedby="Characters"
              placeholder="Characters Played"
              name="email"
              onChange={this.handleFirstNameChange}
            />

            <h4>Ranking:</h4>
            <input
              type="text"
              className="form-control"
              id="ranking-input"
              aria-describedby="Ranking"
              placeholder="Rank"
              name="email"
              onChange={this.handleFirstNameChange}
            />

            <hr />

            

          </Modal.Body>
          <Modal.Footer>
            <Button id="pmodal-button" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}





export default ProfileModal;