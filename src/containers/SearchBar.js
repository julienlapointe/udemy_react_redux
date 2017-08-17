import React, {Component} from "react";
// add the connect() method from the "react-redux" library to convert the "dumb component" SearchBar into the "smart component" / Container SearchBar by passing in a subset of state as props into SearchBar
import {connect} from "react-redux";
// add the fetchWeatherData Action Creator 
import {fetchWeatherData} from "../actions/index.js";
// bindActionCreators ensures the Action (an object with a "type" and "payload" property) returned by the fetchWeatherData Action Creator flows through all the Reducers
import {bindActionCreators} from "redux";

// REDUX LIFECYCLE
// onClick={() => this.props.fetchWeatherData(book)} calls the Action Creator fetchWeatherData(), which dispatches the Action with *this* "book"'s object as the payload when the user clicks a book from SearchBar
// this Action is sent to all Reducers to update the value of the subset of state stored on the Reducer IF that Reducer is listening (via a "switch" statement) for an Action of type: "BOOK_SELECTED"
// the updated Reducer(s) then updates the "Global Application State" and makes this available to the Containers via this.props.[key]
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {term: ""};
		// bind onInputChange() method to SearchBar class so that "this" within onInputChange() references SearchBar
		// this "overrides" the local method
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(event) {
		this.setState({term: event.target.value});
		// this.props.onSearchTermChange(term);
	}
	onFormSubmit(event) {
		event.preventDefault();
		// fetch data from weather API / call Action Creator here
		this.props.fetchWeatherData(this.state.term);
		this.setState({term: ""});
	}
	render() {
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a 5-day forecast for a city..."
					className="form-control"
					value={this.state.term} 
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
};

// "state" = Application State
// this function reduces "state" to a subset and returns this subset (which becomes the "props" object for the SearchBar container / "smart component" above)
// whenever "state" changes, the SearchBar "smart component" / container will re-render and receive the new "state" subset as "props"
// function mapStateToProps(state) {
// 	// whatever is returned will end up as props inside of the SearchBar Container
// 	return {
// 		books: state.books
// 	};
// }

// whatever is returned by this function will end up as props inside the SearchBar Container
function mapDispatchToProps(dispatch) {
	// fetchWeatherData is the Action Creator (a simple function that returns an object) that we imported above from actions/index.js
	// bindActionCreators() ensures that whenver the fetchWeatherData Action Creator is called, the returned value (= an Action = an object with a "type" and "payload" property) is passed to all Reducers
	// dispatch() function is what actually sends the Action to all Reducers
	// this.props.fetchWeatherData() will call the Action Creator
	return bindActionCreators({fetchWeatherData}, dispatch)
}

// the "react-redux" library's connect() method accepts: 
	// 1. the function mapStateToProps to convert the Application State ("state") to a subset
	// 2. the "dumb component" SearchBar to pass in the subset of "state" generated in step #1 as props to SearchBar, thus converting SearchBar into a "smart component" / container, which is then exported 
// convert / promote SearchBar from a Component -> a Container
// the SearchBar Container needs to know about the dispatch method this.props.fetchWeatherData()
// param #1: mapStateToProps (this Container does *not* care about state so mapStateToProps() is not used so the value for param #1 is NULL)
export default connect(null, mapDispatchToProps)(SearchBar);