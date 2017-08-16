import React, {Component} from "react";
// add the connect() method from the "react-redux" library to convert the "dumb component" BookList into the "smart component" / Container BookList by passing in a subset of state as props into BookList
import {connect} from "react-redux";
// add the Action selectBook
import {selectBook} from "../actions/index.js";
// bindActionCreators ensures the Action (selectBook) flows through all the Reducers
import {bindActionCreators} from "redux";

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
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
	return {
		books: state.books
	};
}

function mapDispatchToProps(dispatch) {
	// selectBook is the Action Creator that we imported above
	// bindActionCreators() ensures that whenver selectBook is called, the returned value (= an Action = an object) is passed to all Reducers
	// dispatch() function is what actually sends the Action to all Reducers
	return bindActionCreators({selectBook: selectBook}, dispatch)
}

// the "react-redux" library's connect() method accepts: 
	// 1. the function mapStateToProps to convert the Application State ("state") to a subset
	// 2. the "dumb component" BookList to pass in the subset of "state" generated in step #1 as props to BookList, thus converting BookList into a "smart component" / container, which is then exported 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);