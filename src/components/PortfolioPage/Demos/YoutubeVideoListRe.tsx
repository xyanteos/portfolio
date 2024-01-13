import React from 'react'
import VideoItem from './YoutubeVideoItem'
// import 'semantic-ui-css/semantic.min.css'

const YoutubeVideoListRe = ({ videos, onVideoSelect }: any) => {
    console.log(videos);
    const renderedList = videos.map((video: any) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    })

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}
export default YoutubeVideoListRe