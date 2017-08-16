import React, {Component} from "react";
// add the connect() method from the "react-redux" library to convert the "dumb component" BookDetail into the "smart component" / Container BookDetail by passing in a subset of state as props into BookDetail
import {connect} from "react-redux";
// add the selectBook Action Creator 
import {selectBook} from "../actions/index.js";
// bindActionCreators ensures the Action (an object with a "type" and "payload" property) returned by the selectBook Action Creator flows through all the Reducers
import {bindActionCreators} from "redux";

class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return (
				<div>
					Select a book to get started...
				</div>
			);
		}
		return(
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
		);
	}
};

// "state" = Application State
// this function reduces "state" to a subset and returns this subset (which becomes the "props" object for the BookDetail container / "smart component" above)
// whenever "state" changes, the BookDetail "smart component" / container will re-render and receive the new "state" subset as "props"
function mapStateToProps(state) {
	// whatever is returned will end up as props inside of the BookDetail Container
	return {
		book: state.activeBook
	};
}

// whatever is returned by this function will end up as props inside the BookDetail Container
function mapDispatchToProps(dispatch) {
	// selectBook is the Action Creator (a simple function that returns an object) that we imported above from actions/index.js
	// bindActionCreators() ensures that whenver the selectBook Action Creator is called, the returned value (= an Action = an object with a "type" and "payload" property) is passed to all Reducers
	// dispatch() function is what actually sends the Action to all Reducers
	// this.props.selectBook() will call the Action Creator
	return bindActionCreators({selectBook: selectBook}, dispatch)
}

// the "react-redux" library's connect() method accepts: 
	// 1. the function mapStateToProps to convert the Application State ("state") to a subset
	// 2. the "dumb component" BookDetail to pass in the subset of "state" generated in step #1 as props to BookDetail, thus converting BookDetail into a "smart component" / container, which is then exported 
// convert / promote BookDetail from a Component -> a Container
// the BookDetail Container needs to know about the dispatch method this.props.selectBook()
export default connect(mapStateToProps)(BookDetail);