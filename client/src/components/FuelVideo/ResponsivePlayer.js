import React from 'react';
import ReactPlayer from 'react-player';
import "./responsive-player.css";
import videoFilePath from "../../videos/swiftfuelvideo.mp4";



const FuelVideo = () => {

      return (
        <div className='player-wrapper'>
      
          <ReactPlayer
            className='react-player'
            url={videoFilePath}
            width='90%'
            height='90%'
            controls={true}
            playing={true}
          
          />
        </div>
      )
    
  }
  export default FuelVideo;