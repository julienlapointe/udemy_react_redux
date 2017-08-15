import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from "./components/SearchBar.js";

const API_KEY = 'AIzaSyAuae3FD2ii6-Ad9c8xnEOikMfdwup79-Y';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('container'));