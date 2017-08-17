import React, {Component} from "react";
// add the connect() method from the "react-redux" library to convert the "dumb component" BookDetail into the "smart component" / Container BookDetail by passing in a subset of state as props into BookDetail
import {connect} from "react-redux";

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

// the "react-redux" library's connect() method accepts: 
	// 1. the function mapStateToProps to convert the Application State ("state") to a subset
	// 2. the "dumb component" BookDetail to pass in the subset of "state" generated in step #1 as props to BookDetail, thus converting BookDetail into a "smart component" / container, which is then exported 
// convert / promote BookDetail from a Component -> a Container
// the BookDetail Container needs to know about the dispatch method this.props.selectBook()
export default connect(mapStateToProps)(BookDetail);