import { combineReducers } from 'redux';
import AllPostsReducer from "./AllPostsReducer.js";

const rootReducer = combineReducers({
	posts: AllPostsReducer
});

export default rootReducer;
