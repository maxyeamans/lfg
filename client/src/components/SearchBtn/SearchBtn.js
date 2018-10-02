import React from "react";
import "./SearchBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SearchBtn = props => (
  <button className="search-btn" {...props}>
    Search
  </button>
);

export default SearchBtn;
