import { useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import VideoPlaylist from './VideoPlaylist';



const VideoPlayer = ({ data }) => {
  const [currentVidIndex, setCurrentVidIndex] = useState(0);

  // changes the video playing
  const handleChange = ({ value }) => {
    setCurrentVidIndex(value);
  }

  return (
    <div className="video__container">
      <ReactHlsPlayer
        url={data[currentVidIndex].manifest_url}
        autoplay={false}
        controls={true}
        width="100%"
        height="auto"
        className="video__player"
      />
      <VideoPlaylist 
        handleChange={handleChange} 
        data={data} 
        currentVidIndex={currentVidIndex}
      />
    </div>
  )
}

export default VideoPlayer;
