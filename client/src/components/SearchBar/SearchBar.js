import React from "react";
import "./SearchBar.css";

const SearchBar = props => {

	return (

		<div className="container">
			<div className="search-box">
				<div className="row" >
					<div className="col-lg-12" id="search-bar">
						<div className="panel panel-primary">

							<div className="panel-body">
								<form>
									<div className="form-group">
										<label htmlFor="topic">Group Name</label>
										<input onChange={props.handleInputChange} type="text" className="form-control" name="groupName" aria-describedby="emailHelp" />
									</div>
									{/* <div className="form-group">
										<label htmlFor="start-year">Platform</label>
										<input onChange={props.handlePlatformChange} type="text" className="form-control" id="start-year" />
									</div> */}



									<div className="form-group">
									<label htmlFor="topic">Platform</label>
									<br></br>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="PC" type="radio" name="platform" />PC</label>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="Xbox" type="radio" name="platform" />Xbox</label>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="PS4" type="radio" name="platform" />PS4</label>
									</div>

									<div class="form-group">
									<label htmlFor="topic">Group Rank</label>
									<br></br>
									<label class="radio-inline"><input onChange={props.handleInputChange} value="bronze" type="radio" name="groupRank" />bronze</label>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="silver" type="radio" name="groupRank" />silver</label>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="gold" type="radio" name="groupRank" />gold</label>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="platinum" type="radio" name="groupRank" />platinum</label>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="diamond" type="radio" name="groupRank" />diamond</label>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="master" type="radio" name="groupRank" />master</label>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="grandmaster" type="radio" name="groupRank" />grandmaster</label>
									</div>

									<button onClick={props.handleFormSubmit} type="submit" className="submit-button">Search</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<br /><br />



		</div>


	)
}

export default SearchBar;
