import { useEffect, useState } from "react";

const YoutubeDetailsRe = ({ video }: any | null | undefined) => {
    // let videoSrc=''
    const [videoSrc, setVideoSrc] = useState('')
    useEffect(() => {
        setVideoSrc(`https://www.youtube.com/embed/${video?.id?.videoId}`)
    }, [])

    useEffect(() => {
        console.log(videoSrc);
    }, [videoSrc])

    return (
        video ?
            <div>
                <div className="ui segment">
                    <div className="ui embed"> <iframe src={videoSrc} title={video.snippet.title} /></div>
                    <h4 className="ui videoHeader">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
            :
            <div>Ładowanie danych</div>
    )
}

export default YoutubeDetailsRe