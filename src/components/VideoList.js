import React from 'react';
import VideoListItem from './VideoListItem.js';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				onVideoClick={props.onVideoClick}
				key={video.id.videoId} 
				video={video} />
		)
	});
	return(
		<ul className='col-md-4 list-group'>
			{videoItems}
		</ul>
	);
};

export default VideoList;