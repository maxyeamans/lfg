import React from "react";

const SearchList = props => (

  <div className="card my-3">

    <ul className="list-group">

      <li className="list-group-item">
        <strong>Title:</strong> {props.title}
      </li>
      <li className="list-group-item">
        <strong>Date:</strong> {props.date}
      </li>
      <li className="list-group-item">
        <a href={props.url}><strong>URL: </strong>{props.url}
        </a>
      </li>
      <button className="btn btn-primary" onClick={() => props.saveArticles(props.data)}>
        Save Article
      </button>
    </ul>
  </div>
);

export default SearchList;