import Playlist from "./Playlist";
import Video from "./Video";

import './Sound.css'

function Sound () { 
    return (
        <>
            <div className="sound-base">
                <Video />
                <Playlist />
            </div>
        </>
    )
}

export default Sound;