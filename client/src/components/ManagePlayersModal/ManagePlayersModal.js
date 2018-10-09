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
      id: "5bb5619e6cb97b6830ca34c8"
    };
  }

  componentDidMount() {
    // this.searchPlayers();
  }

  searchPlayers() {
    console.log(this.state.group);
    let myGroup = [];
    // let currentGroup = this.state.currentGroup;
    // const filteredGroup = currentGroup.filter(player => player.state != 0);
    // this.state.currentGroup.forEach(function(player) {
    //   if (player.state == 2) {
    //     this.setState({ group: [...this.state.group, player] });
    //   }
    // });

    console.log(this.state.group);
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
          Manage Players
        </Button>

        <Modal
          dialogClassName="my-modal"
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title> Manage Players </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              {this.state.currentGroup.map(player => (
                <Players
                  data={player}
                  gamertag={player.gamertag}
                  role={player.role}
                  state={player.state}
                  rank={player.rank}
                />
              ))}
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