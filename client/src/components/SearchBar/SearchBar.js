import React from "react";
import "./SearchBar.css";

const SearchBar = props => (

  // <input className="form-control search-bar my-3" type="text" placeholder="Search" aria-label="Search"/>
  <div className="container">
	<div className="row" id="search">
		<form id="search-form" action="" method="POST" enctype="multipart/form-data">
			<div className="form-group col-xs-9">
				<input className="form-control" type="text" placeholder="Search" />
			</div>
			<div class="form-group col-xs-3">
				<button type="submit" className="btn btn-block btn-primary">Search</button>
			</div>
		</form>
	</div>
	<div className="row" id="filter">
		<form>
			<div className="form-group col-sm-3 col-xs-6">
				<select data-filter="make" className="filter-make filter form-control">
					<option value="">Select Platform</option>
					<option value="">PC</option>
          <option value="">XBox</option>
          <option value="">Playstation</option>
				</select>
			</div>
			<div className="form-group col-sm-3 col-xs-6">
				<select data-filter="model" className="filter-model filter form-control">
					<option value="">Select Role</option>
					<option value="">Tank</option>
          <option value="">Damage</option>
          <option value="">Support</option>
				</select>
			</div>
			<div className="form-group col-sm-3 col-xs-6">
				<select data-filter="type" className="filter-type filter form-control">
					<option value="">Select Rank (7)</option>
					<option value="">Bronze</option>
          <option value="">Silver</option>
          <option value=""> Gold</option>
          <option value="">Platinum</option>
          <option value="">Diamond</option>
          <option value="">Master</option>
          <option value="">Grand Master</option>
				</select>
			</div>
			
		</form>
	</div>
	<div className="row" id="products">
		
	</div>
</div>

);

export default SearchBar;
