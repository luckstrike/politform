import React, { Component } from 'react';
import './searchbox.css'
import PlacesAutocomplete from 'react-places-autocomplete';

export default class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = { address: "" };
	}

	handleChange = address => {
		this.setState( { address });
	};
	
	render () {
		return (
			// <div className="search-box">
			// 	<input className="search-txt" type="text" name="" placeholder="Enter your address..."/>
			// 	<a className="search-btn" href="#">
			// 		<i class="fas fa-search-location"></i>
			// 	</a>
			// </div>
			<div className="search-box">
			<PlacesAutocomplete
				value={this.state.address}
				onChange={this.handleChange}
				onSelect={this.handleSelect}
			>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
				<div>
					<input
					{...getInputProps({
						placeholder: 'Enter your address...',
						className: 'search-box',
					})}
					/>
					<a className="search-btn" href="#">
						<i class="fas fa-search-location"></i>
					</a>
					<div className="autocomplete-dropdown-container">
					{loading && <div>Loading...</div>}
					{suggestions.map(suggestion => {
						const className = suggestion.active
						? 'suggestion-item--active'
						: 'suggestion-item';
						// inline style for demonstration purpose
						const style = suggestion.active
						? { backgroundColor: '#fafafa', cursor: 'pointer' }
						: { backgroundColor: '#ffffff', cursor: 'pointer' };
						return (
						<div className="input-suggestion"
							{...getSuggestionItemProps(suggestion, {
							style,
							})}
						>
							<i class="fas fa-map-marker-alt" id="map-marker"></i><span class="location-desc">{suggestion.description}</span>
						</div>
						);
					})}
					</div>
				</div>
				)}
			</PlacesAutocomplete>
			</div>
		)
	}
}