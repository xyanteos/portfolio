import { useEffect, useState } from "react";

const YoutubeVideoItemRe = ({ key, onVideoSelect, video }: any) => {

    return (
        <div key={key} className="video-item item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="videoHeader">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default YoutubeVideoItemRe