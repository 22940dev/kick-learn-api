import { useEffect, useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';



const VideoPlayer = ({ data }) => {
  const [currentVidIndex, setCurrentVidIndex] = useState(0);

  const handleChange = ({ value }) => {
    setCurrentVidIndex(value);
  }

  const thumbnails = data.map((item, i) => {
    // for some reason strict comparison doesn't work for 'checked' attr, even though these are the same type (number) >:{
    return (
      <label key={i}>
        <input 
          type="radio"
          name="thumbnail"
          value={i}
          checked={currentVidIndex == i}
          onChange={e => handleChange(e.target)}  
        />
        Video
        <img src={item.thumbnail} alt="" />
      </label>
    )
  })

  return (
    <div className="player__container">
      <ReactHlsPlayer
        url={data[currentVidIndex].manifest_url}
        autoplay={false}
        controls={true}
        width="100%"
        height="auto"
      />

      <form className="player__playlist">
        <fieldset>
          {thumbnails}
        </fieldset>
      </form>
    </div>
  )
}

export default VideoPlayer;
