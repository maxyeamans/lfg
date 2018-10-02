import React from "react";
import { Link } from "react-router-dom";

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      LFG
    </a>
    {props.isLoggedIn
      ? ( <a>Logged In</a>)
      : ( <a>Not Logged In</a> )}
  </nav>
);

export default Nav;
