import React from "react";
import { Row } from "../Grid";
import ProfileModal from "../ProfileModal";
import "./Nav.css";

const Nav = () => (
  <header className="header">
  <a href="/main" className="logo">LFG</a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul class="menu">
    <li className="nav-item"><a className="nav-link" href="/main">Home</a></li>
    <li className="nav-item"><a href="/search">Search</a></li>
    <li className="nav-item"> <ProfileModal /> </li>
  
  </ul>
</header>
);

export default Nav;
