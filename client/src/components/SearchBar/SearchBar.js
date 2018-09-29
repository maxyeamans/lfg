import React from "react";
import "./SearchBar.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SearchBar = props => (
  <span className="search-bar" {...props}>
    Search
  </span>
);

export default SearchBar;
