import { useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';



const VideoPlayer = ({ data }) => {
  const [currentVidIndex, setCurrentVidIndex] = useState(0);

  const thumbnails = data.map((item, i) => {
    return (
      <img src={item.thumbnail} alt="" key={i}/>
    )
  })

  return (
    <div className="player__container">
      <ReactHlsPlayer
        url={data[currentVidIndex].manifest_url}
        autoplay={false}
        controls="true"
        width="100%"
        height="auto"
      />
      {thumbnails}

    </div>
  )
}

export default VideoPlayer;
