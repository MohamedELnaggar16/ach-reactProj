import React from 'react';
import homeVid from '../Images/homeVid.mp4'

const Player = () => {
    return (
        <div>
            <video width="100%" height="100%" controls autoPlay muted loop>
               <source src={homeVid} type="video/mp4" />
            </video>
        </div>
    )
}

export default Player;