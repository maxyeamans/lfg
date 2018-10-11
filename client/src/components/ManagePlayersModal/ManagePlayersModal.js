import React from "react";
import "./ManagePlayersModal.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Players from "../../components/Players";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class ManagePlayersModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      id: "5bb5619e6cb97b6830ca34c8"
    };
  }

  componentDidMount() {

  }

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

  render() {
    return (
      <div>
        <Button
          id="manage-players-btn"
          bsStyle="primary"
          bsSize="large"
          onClick={this.handleShow}
        >
          Manage Player
        </Button>

        <Modal
          dialogClassName="my-modal"
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title> Manage Player </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <form className="m-4">
                <div className="form-group">
                  <label for="gamertag">Gamertag: </label>
                  <input
                    className="form-control"
                    type="text"
                    name="gamertag"
                    placeholder="gamertag"
                  />
                </div>
                <div className="form-group">
                  <label for="role">Role: </label>
                  <select className="form-control" name="role">
                    <option value="">Update Platform</option>
                    <option value="">Attack</option>
                    <option value="">Support</option>
                    <option value="">Tank</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="rank">Player Rank: </label>
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleFormSubmit}
                >
                  Update
                </button>
                <button type="" className="btn btn-danger" onClick="">
                  Leave Group
                </button>
              </form>
            </Container>
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

export default ManagePlayersModal;
