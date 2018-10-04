import React from "react";
import { Col, Row } from "../Grid";
// import ProfileModal from "../ProfileModal";

let styles = {
  border: "2px solid"
  
}


  


const Profile = props => (
  <Col size="xl-12 sm-12" style={styles} >
    <Row>
      <h2>User's Name</h2>
      {/* name prop to be passed in later */}
    </Row>
    <Row>
      <Col size="xl-6 sm-6">{/* Image prop to be passed in */}</Col>
      <Col size="xl-6 sm-6">
        <Row>
          <h3>Preferred Characters</h3>
        </Row>
        <Row>
          <h3> Ranking:</h3>
          <div id="ranking-output">
          
          </div>
          
        </Row>
      </Col>
    </Row>
    <Row>
      {/* <ProfileModal /> */}
    </Row>
  </Col>
);

export default Profile;
