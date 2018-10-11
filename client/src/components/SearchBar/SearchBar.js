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
										<input onChange={props.handleGroupNameChange} type="text" className="form-control" id="topic" aria-describedby="emailHelp" />
									</div>
									{/* <div className="form-group">
										<label htmlFor="start-year">Platform</label>
										<input onChange={props.handlePlatformChange} type="text" className="form-control" id="start-year" />
									</div> */}



									<div className="form-group">
									<label htmlFor="topic">Platform</label>
									<br></br>
										<label class="radio-inline"><input onChange={props.handlePlatformChange} value="pc" type="radio" name="optradio" />pc</label>
										<label class="radio-inline"><input onChange={props.handlePlatformChange} value="xbox" type="radio" name="optradio" />xbox</label>
										<label class="radio-inline"><input onChange={props.handlePlatformChange} value="playstation" type="radio" name="optradio" />playstation</label>
									</div>

									<div class="form-group">
									<label htmlFor="topic">Group Rank</label>
									<br></br>
									<label class="radio-inline"><input onChange={props.handleGroupRankChange} value="bronze" type="radio" name="optradio" />bronze</label>
										<label class="radio-inline"><input onChange={props.handleGroupRankChange} value="silver" type="radio" name="optradio" />silver</label>
										<label class="radio-inline"><input onChange={props.handleGroupRankChange} value="gold" type="radio" name="optradio" />gold</label>
										<label class="radio-inline"><input onChange={props.handleGroupRankChange} value="platinum" type="radio" name="optradio" />platinum</label>
										<label class="radio-inline"><input onChange={props.handleGroupRankChange} value="diamond" type="radio" name="optradio" />diamond</label>
										<label class="radio-inline"><input onChange={props.handleGroupRankChange} value="master" type="radio" name="optradio" />master</label>
										<label class="radio-inline"><input onChange={props.handleGroupRankChange} value="grandmaster" type="radio" name="optradio" />grandmaster</label>
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
