import { useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';



const VideoPlayer = ({ data }) => {
  const [index, setIndex] = useState(0)
  console.log(data);

  return (
    <ReactHlsPlayer
      url={data[0].manifest_url}
      autoplay={false}
      controls="true"
      width="100%"
      height="auto"
    />
  )
}

export default VideoPlayer;