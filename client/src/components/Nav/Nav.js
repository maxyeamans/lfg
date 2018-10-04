import React from "react";
import { Row } from "../Grid";
import ProfileModal from "../ProfileModal";
import "./Nav.css";

const Nav = () => (
  <Row>
    <nav class="navbar navbar-expand-sm my-3">
      <a id="lfg" class="navbar-brand" href="/main">
        LFG
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/main">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/search">
              Search
            </a>
          </li>
          <li class="nav-item">
            <a id="settings-icon" class="nav-link" >
             
              <ProfileModal />
            </a>
          </li>
          {/* {props.isLoggedIn
      ? ( <a>Logged In</a>)
      : ( <a>Not Logged In</a> )} */}
        </ul>
      </div>
    </nav>
  </Row>
);

export default Nav;
