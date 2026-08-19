import { useState } from 'react'; 
import YoutubeLogo from '../../assets/youtubelogo.webp'

import './Sound.css'

function Video () { 
    const [videoUrl, setVideoUrl] = useState("")
    const [hasVideo, setHasVideo] = useState(false) 
    const [embedVideoUrl, setEmbedVideoUrl] = useState("")

    const youtubeRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(?:-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/;
    const isValidYoutubeUrl = youtubeRegex.test(videoUrl);
    const youtubeRegexIdLink = /(?:youtube(?:-nocookie)?\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
       
    const handleAddVideo = () => {
        if (!isValidYoutubeUrl) return;
        
        console.log(videoUrl)

        let match = videoUrl.match(youtubeRegexIdLink)
        if (match) {
            let videoId = match[1];
            console.log("Video ID:", videoId);
            setEmbedVideoUrl('https://www.youtube.com/embed/' + videoId)
            setHasVideo(true)
        }

        // Ajustar o valor de videoUrl para o embed
        // definir hasVideo como true
    };
    
    return (
        <>
            <div className="sound-video">
                {hasVideo ? (
                    <iframe
                        src={embedVideoUrl}
                        className='video'
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                )
                :
                (
                    <div className='video-set'> 
                        <h2 className='video-input-title'>Add your
                        <img className='video-yt-logo' src={YoutubeLogo}/>
                        sound</h2>
                       
                        <div className='video-input-base'>
                            <input
                                className='video-input'
                                type="text"
                                placeholder="Paste your link here"
                                value={videoUrl}
                                onChange={(event) => setVideoUrl(event.target.value)}
                            />
                            <button 
                                disabled={!isValidYoutubeUrl}
                                className='video-button'
                                onClick={handleAddVideo}>
                                Add video
                            </button>
                            
                        </div>
                    </div>
                )
            }
            </div>
           
        </>
    )
}

export default Video;