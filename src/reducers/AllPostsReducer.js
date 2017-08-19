import {FETCH_ALL_POSTS} from "../actions/index.js";
import _ from "lodash";

export default function(state={}, action) {
	// console.log("Action received!", action);
	switch (action.type) {
		case FETCH_ALL_POSTS:
			// action.payload.data is an "array of post objects" [post1, post2, post3, etc.]
			console.log(action.payload.data);
			// but an "object of post objects" is the desired structure:
			// {4: post4, 12: post12, 15: post15, etc.}
			// where the keys 4, 12, and 15 are the post IDs
			// and post4, post12, and post15 are the post objects
			// return [action.payload.data, ...state];
			// .mapKeys() takes 2 parameters:
				// param #1: "array of objects" (input) to convert to an "object of objects" (output)
				// param #2: key from objects to use as the key for each object in the output ("object of objects") 
			return _.mapKeys(action.payload.data, "id");
		default:
			return state;
	}
}