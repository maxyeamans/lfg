import React from "react";
import { Row } from "../Grid";
import ProfileModal from "../ProfileModal";
import "./Nav.css";

const Nav = () => (
  <Row>
    <nav className="navbar navbar-expand-sm my-3">
      <a id="lfg" className="navbar-brand" href="/main">
        LFG
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/main">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/search">
              Search
            </a>
          </li>
          <li className="nav-item3">
            <a id="settings-icon" className="nav-link" >
             
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
