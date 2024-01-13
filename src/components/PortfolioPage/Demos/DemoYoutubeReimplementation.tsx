// import { useState } from 'react'
// import SearchBar from './SearchBar'
// import VideoList from './VideoList'
// import VideoDetail from './VideoDetail'
// import axios from 'axios'
// import YoutubeSearchBarRe from './YoutubeSearchBar';
// import YoutubeVideoListRe from './YoutubeVideoListRe';
// import YoutubeDetailsRe from './YoutubeDetailsRe';
import './YoutubeSpecificUi.css'

const YoutubeDemoRe = () => {
    // const [videos, setVideos] = useState<any[]>();
    // const [selectedVideo, setSelectedVideo] = useState<string | null>();


    // useEffect(() => {
    //     onTermSubmit('Gdańsk');
    // }, []);

    // const onVideoSelect = (video: any) => {
    //     console.log("Z apki", video)
    //     setSelectedVideo(video);
    //     // setState({selectedVideo : video})
    // }

    // const onTermSubmit = (term: string) => {
    //     axios.get("https://www.googleapis.com/youtube/v3/search", {
    //         params: {
    //             q: term,
    //             part: "snippet",
    //             maxparams: 5,
    //             key: "AIzaSyBiSg1yWcd2wStLxJWUml9mt5DgNATk4Fk"
    //         }
    //     })
    //         .then(res => {
    //             console.log(res.data.items)
    //             setVideos(res.data.items);
    //             setSelectedVideo(res.data.items[0]);
    //             // setState({videos: videos.data.items, selectedVideo: videos.data.items[0]});
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         });
    // }

    return (
        <h2 className='centered'>
            Not implemented yet!
        </h2>
        // <div id="content">
        //     <YoutubeSearchBarRe onFormSubmit={onTermSubmit} />
        //     <div className="currentAndFeed">
        //         <div className='current'>
        //             <YoutubeDetailsRe video={selectedVideo} />
        //         </div>
        //         <div className="feed">
        //             {videos ? <YoutubeVideoListRe videos={videos} onVideoSelect={onVideoSelect} /> : <></>}
        //         </div>
        //     </div>
        // </div>
    )

}

export default YoutubeDemoRe