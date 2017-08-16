import React, {Component} from "react";
// add the connect() method from the "react-redux" library to convert the "dumb component" BookList into the "smart component" / Container BookList by passing in a subset of state as props into BookList
import {connect} from "react-redux";
// add the selectBook Action Creator 
import {selectBook} from "../actions/index.js";
// bindActionCreators ensures the Action (an object with a "type" and "payload" property) returned by the selectBook Action Creator flows through all the Reducers
import {bindActionCreators} from "redux";

// REDUX LIFECYCLE
// onClick={() => this.props.selectBook(book)} calls the Action Creator selectBook(), which dispatches the Action with *this* "book"'s object as the payload when the user clicks a book from BookList
// this Action is sent to all Reducers to update the value of the subset of state stored on the Reducer IF that Reducer is listening (via a "switch" statement) for an Action of type: "BOOK_SELECTED"
// the updated Reducer(s) then updates the "Global Application State" and makes this available to the Containers via this.props.[key]
class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)} 
					className="list-group-item">
						{book.title}
				</li>
			);
		});
	}
	render() {
		return(
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
};

// "state" = Application State
// this function reduces "state" to a subset and returns this subset (which becomes the "props" object for the BookList container / "smart component" above)
// whenever "state" changes, the BookList "smart component" / container will re-render and receive the new "state" subset as "props"
function mapStateToProps(state) {
	// whatever is returned will end up as props inside of the BookList Container
	return {
		books: state.books
	};
}

// whatever is returned by this function will end up as props inside the BookList Container
function mapDispatchToProps(dispatch) {
	// selectBook is the Action Creator (a simple function that returns an object) that we imported above from actions/index.js
	// bindActionCreators() ensures that whenver the selectBook Action Creator is called, the returned value (= an Action = an object with a "type" and "payload" property) is passed to all Reducers
	// dispatch() function is what actually sends the Action to all Reducers
	// this.props.selectBook() will call the Action Creator
	return bindActionCreators({selectBook: selectBook}, dispatch)
}

// the "react-redux" library's connect() method accepts: 
	// 1. the function mapStateToProps to convert the Application State ("state") to a subset
	// 2. the "dumb component" BookList to pass in the subset of "state" generated in step #1 as props to BookList, thus converting BookList into a "smart component" / container, which is then exported 
// convert / promote BookList from a Component -> a Container
// the BookList Container needs to know about the dispatch method this.props.selectBook()
export default connect(mapStateToProps, mapDispatchToProps)(BookList);