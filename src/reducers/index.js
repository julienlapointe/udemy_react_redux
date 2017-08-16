import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books.js";
import ActiveBookReducer from "./reducer_active_book.js";

// any key provided to the object in combineReducers() is available as a key on our "Global Application State" (accessed using this.props.______ [ex. this.props.books or this.props.activeBook] by any Container?)
const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBookReducer
});

export default rootReducer;