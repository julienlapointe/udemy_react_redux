import axios from "axios";

export const FETCH_ALL_POSTS = "FETCH_ALL_POSTS";

export function fetchAllPosts() {
	const ROOT_URL = "reduxblog.herokuapp.com/api/posts";
	const API_KEY = "?key=julienlapointe"
	const request = axios.get(`${ROOT_URL}${API_KEY}`);	
	// console.log("Request made!", request);
	return {
		type: FETCH_ALL_POSTS,
		payload: request
	};
}