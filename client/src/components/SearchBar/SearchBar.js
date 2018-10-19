import React from "react";
import "./SearchBar.css";

const SearchBar = props => {

	return (

		<div className="container">

			<form>
				<div className="form-group">
					<label htmlFor="topic">Group Name</label>
					<input onChange={props.handleInputChange} type="text" className="form-control" name="groupName" aria-describedby="emailHelp" />
				</div>
				{/* <div className="form-group">
										<label htmlFor="start-year">Platform</label>
										<input onChange={props.handlePlatformChange} type="text" className="form-control" id="start-year" />
									</div> */}





				{/* <div className="form-group">
										<label htmlFor="topic">Platform 1.0 </label>
										<br></br>
										<div class="container">
											<div class="btn-group btn-group-justified" name="platform"  onChange={props.handleInputChange}>											
		 									<div class="btn-group">
													<button type="button" class="btn btn-primary" name="platform" value="PC"  >PC</button>
												</div>
												<div class="btn-group">
													<button type="button" class="btn btn-primary" name="platform" value="Xbox">Xbox</button>
												</div>
												<div class="btn-group">
													<button type="button" class="btn btn-primary" name="platform" value="PS4">PS4</button>
												</div>											
											</div>
										</div>

									</div> */}

				<div className="form-group">
					<label for="topic">Platform 2.0: </label>
					<select className="form-control" name="platform" onChange={props.handleInputChange}>
						<option value="">Choose Platform (3)</option>
						<option value="PC">PC</option>
						<option value="Xbox">Xbox</option>
						<option value="PS4">PS4</option>

					</select>
				</div>




				{/* <div class="form-group">
										<label htmlFor="topic">Group Rank</label>
										<br></br>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="bronze" type="radio" name="groupRank" />bronze</label>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="silver" type="radio" name="groupRank" />silver</label>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="gold" type="radio" name="groupRank" />gold</label>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="platinum" type="radio" name="groupRank" />platinum</label>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="diamond" type="radio" name="groupRank" />diamond</label>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="master" type="radio" name="groupRank" />master</label>
										<label class="radio-inline"><input onChange={props.handleInputChange} value="grandmaster" type="radio" name="groupRank" />grandmaster</label>
									</div> */}

				<div className="form-group">
					<label for="groupRank">Group Rank: </label>
					<select className="form-control" name="groupRank" onChange={props.handleInputChange}>
						<option value="">Choose Rank (7)</option>
						<option value="Bronze">Bronze</option>
						<option value="Silver">Silver</option>
						<option value="Gold">Gold</option>
						<option value="Platinum">Platinum</option>
						<option value="Diamond">Diamond</option>
						<option value="Master">Master</option>
						<option value="Grand Master">Grand Master</option>
					</select>
				</div>

				<button onClick={props.handleFormSubmit} type="submit" className="submit-button">Search</button>
			</form>

			<br /> <br />



		</div >


	)
}

export default SearchBar;
