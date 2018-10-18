import React from "react";
import "./Messages.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CurrentMessage from "../../components/CurrentMessage";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Nav from "../../components/Nav";


class Messages extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.handleShow = this.handleShow.bind(this);
    // this.handleClose = this.handleClose.bind(this);

    this.state = {
      groupId: localStorage.getItem("groupId"),
      globalId: localStorage.getItem("globalId"),
      message: "",
      date: Date(Date.now()).toString,
      groupMessages: [],
      gamertag: "",
      groupData: {}
      
     
      
    };
  }

  componentDidMount() {
    this.loadLogin();
    this.loadGroup();
    this.loadMessages();
    this.getGroup();
    
    // this.getGamertag();
  }

  // componentDidUpdate() {
  //   // console.log(this.state.groupData);
  //   this.state.groupMessages;
  //   // console.log(this.state.groupMessages);
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadLogin = () => {
    this.setState({ globalId: localStorage.getItem("globalId") });
    
  }

  loadGroup = () => {
    this.setState({ group: localStorage.getItem("groupId") });
  }

  

  getGamertag = () => {
    // if (this.state.groupData.length != "default") {
    
    if (this.state.groupData.player1.user === this.state.globalId) {
      this.setState({
        gamertag: this.state.groupData.player1.gamertag
        
      })
    }
    else if (this.state.groupData.player2.user === this.state.globalId) {
      this.setState({
        gamertag: this.state.groupData.player2.gamertag
        
      })
    } else if
    (this.state.groupData.player3.user === this.state.globalId) {
      this.setState({
        gamertag: this.state.groupData.player3.gamertag
        
      })
    } else if
    (this.state.groupData.player4.user === this.state.globalId) {
      this.setState({
        gamertag: this.state.groupData.player4.gamertag
        
      })
    } else if
    (this.state.groupData.player5.user === this.state.globalId) {
      this.setState({
        gamertag: this.state.groupData.player5.gamertag
        
      })
    } else if
    (this.state.groupData.player6.user === this.state.globalId) {
      this.setState({
        gamertag: this.state.groupData.player6.gamertag
        
      })
    }
    else {
      console.log("no match");
    }
  // }
  }

  getGroup = () => {
    API.getGroup(this.state.groupId)
    .then(res =>
      this.setState({
        groupData: res.data
        
      }, () => {
        this.getGamertag();
      })
    )
    
    .catch(err => console.log(err));
  }

  loadMessages = () => {
    // console.log()
    API.getMessages(this.state.groupId)
      .then(res =>
        this.setState({
          groupMessages: res.data
          
        })
      )
      .catch(err => console.log(err));
  };

  // getMessages = () => {

  // }

  saveMessage = (gamertag, message, groupId, globalId) => {
    API.saveMessage({
      gamertag: gamertag,
      message: message,
      groupId: groupId,
      userId: globalId
      
    })
      // .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  

  handleMessageSubmit = event => {
    event.preventDefault();

    this.saveMessage(this.state.gamertag, this.state.message, this.state.groupId, this.state.globalId), () => {
      this.loadMessages();
    };
  } 
  

  // handleClose() {
  //   this.setState({ show: false });
  // }

  // handleShow() {
  //   this.setState({ show: true });
  // }

  render() {
    
    return (
    <Container fluid>
      <Nav/>
        <div>
          
          <h1> Group Messages</h1>

        </div>
        

    <Row>
      
        
      <Col size="xl-12 sm-12">
            <textarea id="text-area" rows="4" cols="100" name="message" onChange={this.handleInputChange} value={this.state.message}>
            </textarea>
            <br/>
            <a href="/messages"><button onClick={this.handleMessageSubmit}>Add Message</button></a>
      </Col>
    </Row>
    {this.state.groupMessages.map(messages => (
      <CurrentMessage 
        gamertag={messages.gamertag}
        date={messages.date}
        message={messages.message}

      />
    ))}



      </Container >
    );
  }
}

export default Messages;