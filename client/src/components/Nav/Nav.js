import React from "react";
import { Row } from "../Grid";
import "./Nav.css";

const Nav = () => (
  <Row>

    <nav class="navbar navbar-expand-sm my-3">
      <a class="navbar-brand" href="/main">
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
            <a class="nav-link" href="/profile">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </Row>
);

export default Nav;
