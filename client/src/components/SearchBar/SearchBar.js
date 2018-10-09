import React from "react";
import "./SearchBar.css";

 

const SearchBar = props =>

<div className="container">
<div className="search-box">
  <div className="row" >
	<div className="col-lg-12" id ="search-bar">
	  <div className="panel panel-primary">
		
		<div className="panel-body">
		  <form>
			<div className="form-group">
			  <label htmlFor="topic">Group Name</label>
			  <input onChange={props.handleGroupNameChange} type="text" className="form-control" id="topic" aria-describedby="emailHelp" />
			</div>
			<div className="form-group">
			  <label htmlFor="start-year">Platform</label>
			  <input onChange={props.handlePlatformChange} type="text" className="form-control" id="start-year" />
			</div>
			<div className="form-group">
			  <label htmlFor="end-year">Group Rank</label>
			  <input onChange={props.handleGroupRankChange} type="text" className="form-control" id="end-year" />
			</div>
			<div className="form-group">
			  <label htmlFor="end-year">Time</label>
			  <input onChange={props.handleTimeChange} type="text" className="form-control" id="end-year" />
			</div>
			<button onClick={props.handleFormSubmit} type="submit" className="submit-button">Search</button>
		  </form>
		</div>
	  </div>
	</div>
  </div>
  </div>

  <br/><br/>

  <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i> Results
              </strong>
            </h3>
          </div>
          <div className="panel-body">
			{/* {props.renderSearchedGroups()} */}
			
          </div>
        </div>
      </div>
    </div>
    <br/><br/>
  


 
 
 </div>

  
export default SearchBar;
