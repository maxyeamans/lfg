import React from "react";

const SearchGroup = props => (

  <div className="card my-3">

    <ul className="list-group">

      <li className="list-group-item">
        <strong>Name</strong>
      </li>
      <li className="list-group-item">
        <strong>Console</strong>
      </li>
      <li className="list-group-item">
      <strong>Rank</strong>
      </li>
      <button className="btn btn-primary">
        Request Join
      </button>
    </ul>
  </div>
);

export default SearchGroup;