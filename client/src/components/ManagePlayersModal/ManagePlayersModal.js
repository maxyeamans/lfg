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

      groupName: this.props.groupInfo.groupName,
      platform: this.props.groupInfo.platform,
      groupRank: this.props.groupInfo.groupRank,
      time: this.props.groupInfo.time,
      player1: this.props.groupInfo.player1,
      player2: this.props.groupInfo.player2,
      player3: this.props.groupInfo.player3,
      player4: this.props.groupInfo.player4,
      player5: this.props.groupInfo.player5,
      player6: this.props.groupInfo.player6,
      currentGroup: [
        this.props.groupInfo.player1,
        this.props.groupInfo.player2,
        this.props.groupInfo.player3,
        this.props.groupInfo.player4,
        this.props.groupInfo.player5,
        this.props.groupInfo.player6
      ],
      group: [],
      id: this.props.groupInfo._id

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
            <Modal.Title> <h2>Manage Player</h2> </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>

              {this.state.currentGroup.filter(player => (player.state != 0)).map(player => (
                <Players
                  data={player}
                  gamertag={player.gamertag}
                  role={player.role}
                  state={player.state}
                  rank={player.rank}
                  user={player.user}
                  id={this.state.id}
                />
              ))}

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
                  className="update-btn"
                  onClick={this.handleFormSubmit}
                >
                  Update
                </button>
                <button type="" className="leaveGroup-btn" onClick="">
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
