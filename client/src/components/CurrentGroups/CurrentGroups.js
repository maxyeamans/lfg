import React from "react";

const CurrentGroups = props => (

  <div className="card">

    <ul className="list-group">

      <li className="list-group-item">
        <strong>Group name:</strong> 
        {/* {props.title} */}
      </li>
      <li className="list-group-item">
        <strong>Members:</strong> 
        {/* {props.date} */}
      </li>
      <button className="btn btn-primary" 
      // onClick={() => props.saveArticles(props.data)}
      >
        Manage
      </button>
    </ul>
  </div>
);

export default CurrentGroups;