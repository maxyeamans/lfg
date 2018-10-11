import React from "react";
import "./SearchBar.css";

const SearchBar = props =>{

return(

<div className="container">
<div className="search-box">
  <div className="row" >
	<div className="col-lg-12" id ="search-bar">
	  <div className="panel panel-primary">
		
		<div className="panel-body">
		  <form>
			<div className="form-group">
			  <label htmlFor="topic">Group Name</label>
			  <input onChange={props.handleInputChange} type="text" className="form-control" name="groupName" aria-describedby="emailHelp" />
			</div>
			<div className="form-group">
			  <label htmlFor="start-year">Platform</label>
			  <input onChange={props.handleInputChange} type="text" className="form-control" name="platform" />
			</div>

			<div className="form-group">
			platform
			<div className="btn-group btn-group-toggle" data-toggle="buttons">
  <label className="btn btn-secondary active"> 
    <input onChange={props.handlePlatformChange} type="radio" name="PC" id="option1" autoComplete="off"/> PC
  </label>
  <label className="btn btn-secondary">
    <input onChange={props.handlePlatformChange} type="radio" name="Xbox" id="option2" autoComplete="off"/> Xbox
  </label>
  <label className="btn btn-secondary">
    <input onChange={props.handlePlatformChange} type="radio"  name="Playstation" id="option3" autoComplete="off"/> Playstation
  </label>
</div>
			</div>
			
			<div className="form-group">
			  <label htmlFor="end-year">Group Rank</label>
			  <input onChange={props.handleInputChange} type="text" className="form-control" name="groupRank" />
			</div>
			
			<button onClick={props.handleFormSubmit} type="submit" className="submit-button">Search</button>
		  </form>
		</div>
	  </div>
	</div>
  </div>
  </div>

  <br/><br/>

   
 
 </div>


)}
  
export default SearchBar;
