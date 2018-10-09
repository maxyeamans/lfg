import React from "react";
import { Col, Row } from "../Grid";
import EditProfileBtn from "../EditProfileBtn";

let styles = {
  border: "2px solid",
  backgroundColor: "orange"

}

const Profile = props => (
  <Col size="xl-12 sm-12" style={styles} >
    <Row>
      <h2>Username:</h2>
      {/* name prop to be passed in later */}
    </Row>
    <Row>
      <Col size="xl-6 sm-6">{/* Image prop to be passed in */}</Col>
      <Col size="xl-6 sm-6">
        <Row>
          <h3>Times Played:</h3>
        </Row>
        <Row>
          <h3>Most Played Characters:</h3>
        </Row>
        <Row>
          <h3>Rank:</h3>
        </Row>
      </Col>
    </Row>
    <Row>
      <EditProfileBtn />
    </Row>
  </Col>
 
);

export default Profile;
