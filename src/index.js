import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from "./components/SearchBar.js";
import VideoList from "./components/VideoList.js";
import VideoDetail from "./components/VideoDetail.js";

const API_KEY = 'AIzaSyAuae3FD2ii6-Ad9c8xnEOikMfdwup79-Y';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch("surfboards");
	}
	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});
	}
	render() {
		const throttledVideoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
		return(
			<div>
				<SearchBar onSearchTermChange={throttledVideoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoClick={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('container'));